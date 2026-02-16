#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import tokens from "@vygruppen/spor-design-tokens";
import * as spor from "@vygruppen/spor-react";

const server = new Server(
  {
    name: "spor-mcp",
    version: "1.0.0",
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
          "Get Spor design tokens for a specific theme. Returns colors by category, spacing, and typography.",
        inputSchema: {
          type: "object",
          properties: {
            theme: {
              type: "string",
              enum: ["vyDigital", "vyUtvikling", "cargonet"],
              description: "Theme to fetch tokens for: vyDigital (Vy), vyUtvikling (Vy Development), or cargonet (CargoNet)",
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
            content: [{
              type: "text",
              text: "Error: theme parameter is required. Choose from: vyDigital, vyUtvikling, or cargonet",
            }],
            isError: true,
          };
        }
        
        const allColors = tokens.color || {};
        const colors = allColors[theme] || {};
        
        if (Object.keys(colors).length === 0) {
          return {
            content: [{
              type: "text",
              text: `Error: Theme '${theme}' not found. Available themes: vyDigital, vyUtvikling, cargonet`,
            }],
            isError: true,
          };
        }
        
        const colorKeys = Object.keys(colors);
        const prefixes = [...new Set(colorKeys.map(k => k.split(/[A-Z]/)[0]).filter(Boolean))];
        
        const colorsByCategory = {};
        prefixes.forEach(prefix => {
          const filtered = colorKeys
            .filter(key => key.startsWith(prefix))
            .reduce((obj, key) => {
              const val = colors[key];
              obj[key] = typeof val === 'object' ? val.value || val : val;
              return obj;
            }, {});
          if (Object.keys(filtered).length > 0) colorsByCategory[prefix] = filtered;
        });
        
        const result = {
          theme,
          colors: colorsByCategory,
        };
        
        // Only include size and font if available
        if (tokens.size) result.size = tokens.size;
        if (tokens.font) result.font = tokens.font;
        
        return {
          content: [{
            type: "text",
            text: JSON.stringify(result, null, 2),
          }],
        };
      }

      case "list_spor_components": {
        const components = Object.keys(spor).filter(
          (name) => name[0] === name[0].toUpperCase()
        );

        return {
          content: [{
            type: "text",
            text: components.join("\n"),
          }],
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
