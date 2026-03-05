#!/usr/bin/env node

import { createRequire } from "node:module";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import tokens from "@vygruppen/spor-design-tokens";
import * as spor from "@vygruppen/spor-react";

const require = createRequire(import.meta.url);
const { version } = require("./package.json");

// Resolve a "colors.xxx" or "colors.xxx.yyy" reference to its hex value
function resolveColorRef(ref, palette, alias, depth = 0) {
  if (depth > 5) return ref; // guard against circular references
  if (typeof ref !== "string" || !ref.startsWith("colors.")) return ref;
  const path = ref.slice("colors.".length);
  const parts = path.split(".");

  if (parts.length === 1) {
    const name = parts[0];
    // Check direct palette value first (e.g. "white", "black") to avoid circular alias refs
    if (typeof palette[name] === "string") return palette[name];
    // Then resolve through named alias (e.g. "pine" → "colors.green.700")
    if (alias[name] && alias[name] !== ref) {
      return resolveColorRef(alias[name], palette, alias, depth + 1);
    }
  }
  if (parts.length === 2) {
    const [group, scale] = parts;
    if (palette[group]?.[scale]) return palette[group][scale];
  }
  return ref; // unresolved — return as-is
}

// Recursively resolve all color references in a token tree
function resolveTokenTree(object, palette, alias) {
  if (typeof object === "string")
    return resolveColorRef(object, palette, alias);
  if (Array.isArray(object))
    return object.map((v) => resolveTokenTree(v, palette, alias));
  if (object && typeof object === "object") {
    return Object.fromEntries(
      Object.entries(object).map(([k, v]) => [
        k,
        resolveTokenTree(v, palette, alias),
      ]),
    );
  }
  return object;
}

// Collect all "colors.xxx" reference strings used in a token tree
function collectReferences(object, references = new Set()) {
  if (typeof object === "string") {
    if (object.startsWith("colors.")) references.add(object);
  } else if (Array.isArray(object)) {
    for (const v of object) collectReferences(v, references);
  } else if (object && typeof object === "object") {
    for (const v of Object.values(object)) collectReferences(v, references);
  }
  return references;
}

// Build theme-scoped palette and resolved aliases from a set of "colors.*" refs
function buildThemeScopedPalette(references, palette, alias) {
  const usedPalette = {};
  const usedAliases = {};

  for (const ref of references) {
    const path = ref.slice("colors.".length);
    const parts = path.split(".");

    if (parts.length === 2) {
      const [group, scale] = parts;
      if (palette[group]?.[scale]) {
        usedPalette[group] = usedPalette[group] || {};
        usedPalette[group][scale] = palette[group][scale];
      }
    } else if (parts.length === 1) {
      const name = parts[0];
      if (alias[name]) {
        usedAliases[name] = resolveColorRef(alias[name], palette, alias);
        // Also include the backing palette entry
        const aliasRef = alias[name];
        if (typeof aliasRef === "string" && aliasRef.startsWith("colors.")) {
          const aliasParts = aliasRef.slice("colors.".length).split(".");
          if (aliasParts.length === 2) {
            const [group, scale] = aliasParts;
            if (palette[group]?.[scale]) {
              usedPalette[group] = usedPalette[group] || {};
              usedPalette[group][scale] = palette[group][scale];
            }
          }
        }
      } else if (typeof palette[name] === "string") {
        usedPalette[name] = palette[name];
      }
    }
  }

  return { palette: usedPalette, aliases: usedAliases };
}

const server = new Server(
  {
    name: "spor-mcp",
    version,
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_spor_tokens",
        description:
          "Get Spor design tokens for a specific theme. Returns resolved semantic colors, the scoped primitive palette, named color aliases, spacing, and typography — all in one call.",
        inputSchema: {
          type: "object",
          properties: {
            theme: {
              type: "string",
              enum: ["vyDigital", "vyUtvikling", "cargonet"],
              description:
                "Theme to fetch tokens for: vyDigital (Vy), vyUtvikling (Vy Development), or cargonet (CargoNet)",
            },
          },
          required: ["theme"],
        },
      },
      {
        name: "list_spor_components",
        description: "List all available Spor React components",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name } = request.params;

  try {
    switch (name) {
      case "get_spor_tokens": {
        const { theme } = request.params.arguments || {};

        if (!theme) {
          return {
            content: [
              {
                type: "text",
                text: "Error: theme parameter is required. Choose from: vyDigital, vyUtvikling, or cargonet",
              },
            ],
            isError: true,
          };
        }

        const allColors = tokens.color || {};
        const semanticTokens = allColors[theme] || {};

        if (Object.keys(semanticTokens).length === 0) {
          return {
            content: [
              {
                type: "text",
                text: `Error: Theme '${theme}' not found. Available themes: vyDigital, vyUtvikling, cargonet`,
              },
            ],
            isError: true,
          };
        }

        const palette = allColors.palette || {};
        const alias = allColors.alias || {};

        // Resolve all "colors.xxx" references to actual hex values
        const resolvedTokens = resolveTokenTree(semanticTokens, palette, alias);

        // Scope palette and aliases to only what this theme uses
        const references = collectReferences(semanticTokens);
        const { palette: scopedPalette, aliases: scopedAliases } =
          buildThemeScopedPalette(references, palette, alias);

        const result = {
          theme,
          colors: resolvedTokens,
          palette: scopedPalette,
          aliases: scopedAliases,
        };

        // Only include size and font if available
        if (tokens.size > 0) result.size = tokens.size;
        if (tokens.font) result.font = tokens.font;

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "list_spor_components": {
        const components = Object.keys(spor).filter(
          (name) => name[0] === name[0].toUpperCase(),
        );

        return {
          content: [
            {
              type: "text",
              text: components.join("\n"),
            },
          ],
        };
      }

      default: {
        return {
          content: [
            {
              type: "text",
              text: `Unknown tool: ${name}`,
            },
          ],
          isError: true,
        };
      }
    }
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Spor MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
