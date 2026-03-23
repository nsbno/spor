#!/usr/bin/env node
/* eslint-disable unicorn/prefer-single-call */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import tokens from "@vygruppen/spor-design-tokens";
import * as spor from "@vygruppen/spor-react";
import { z } from "zod";

const server = new McpServer(
  { name: "spor-mcp", version: "2.0.0" },
  { capabilities: { tools: {} } },
);
const transport = new StdioServerTransport();

async function startServer() {
  try {
    await server.connect(transport);
    console.error("Spor MCP server is running on stdio...");
  } catch (error) {
    console.error("MCP server failed to start:", error);
    process.exit(1); // crash if startup fails
  }
}

const sanityDataRouteUrl =
  process.env.SANITY_DATA_ROUTE_URL || "http://localhost:3008/api/sanity-data";

async function fetchSanityData<T>(
  query: string,
  parameters: Record<string, unknown> = {},
): Promise<T> {
  const requestUrl = new URL(sanityDataRouteUrl);
  requestUrl.searchParams.set("query", query);
  if (Object.keys(parameters).length > 0) {
    requestUrl.searchParams.set("params", JSON.stringify(parameters));
  }

  const response = await fetch(requestUrl);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Sanity data route request failed (${response.status}): ${errorText}`,
    );
  }

  const payload = (await response.json()) as {
    data: T;
  };

  return payload.data;
}

// ── Types ──────────────────────────────────────────────────────────────────
interface SanitySpan {
  _type: "span";
  marks: string[];
  text: string;
}

interface SanityBlock {
  _type: "block";
  style: string;
  children: SanitySpan[];
  listItem?: string;
  level?: number;
}

interface SanityCodeExample {
  _type: "codeExample";
  reactCode?: { code?: string; language?: string };
  layout?: string;
}

interface SanityStaticCodeBlock {
  _type: "staticCodeBlock";
  code?: { code?: string; language?: string };
}

type SanityContent =
  | SanityBlock
  | SanityCodeExample
  | SanityStaticCodeBlock
  | Record<string, unknown>;

interface ComponentSection {
  title: string;
  customTitle?: string;
  content?: SanityContent[];
  components?: Array<{ _ref: string }>;
}

interface SanityArticle {
  _id: string;
  title: string;
  slug: string;
  introduction?: SanityBlock[];
  componentSections?: ComponentSection[];
}

interface SanityProperty {
  _key: string;
  _type: "props";
  name: string;
  type: string;
  typeOther?: string; // used when type === "other"
  isRequired: boolean;
  description?: string;
  defaultValue?: string;
}

interface SanityComponent {
  _id: string;
  name: string;
  slug: string;
  props?: SanityProperty[];
  content?: SanityContent[]; // optional prose (links to external docs etc.)
}

// ── Content parsers ────────────────────────────────────────────────────────

/**
 * Converts a Sanity block array to readable plain text / markdown.
 */
function blocksToMarkdown(blocks: SanityContent[]): string {
  const lines: string[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      lines.push(listBuffer.join("\n"));
      listBuffer = [];
    }
  };

  for (const block of blocks) {
    if (block._type === "block") {
      const b = block as SanityBlock;
      const text = b.children
        .map((span) => {
          const t = span.text;
          if (span.marks.includes("code")) return `\`${t}\``;
          if (span.marks.includes("strong")) return `**${t}**`;
          if (span.marks.includes("em")) return `_${t}_`;
          return t;
        })
        .join("")
        .trim();

      if (!text) {
        flushList();
        continue;
      }

      if (b.listItem === "bullet") {
        listBuffer.push(`${"  ".repeat((b.level ?? 1) - 1)}- ${text}`);
        continue;
      }

      flushList();

      switch (b.style) {
        case "h1": {
          lines.push(`# ${text}`);
          break;
        }
        case "h2": {
          lines.push(`## ${text}`);
          break;
        }
        case "h3": {
          lines.push(`### ${text}`);
          break;
        }
        case "h4": {
          lines.push(`#### ${text}`);
          break;
        }
        default: {
          lines.push(text);
        }
      }
    } else if (block._type === "codeExample") {
      flushList();
      const ce = block as SanityCodeExample;
      const code = ce.reactCode?.code?.trim();
      if (code) {
        lines.push("```tsx", code, "```");
      }
    }
  }

  flushList();
  return lines.join("\n\n");
}

/**
 * Extracts all code examples (TSX snippets) from a section's content.
 */
function extractCodeExamples(
  content: SanityContent[],
): Array<{ title: string; code: string; language: string }> {
  const examples: Array<{ title: string; code: string; language: string }> = [];
  let lastHeading = "Example";

  for (const item of content) {
    switch (item._type) {
      case "block": {
        const b = item as SanityBlock;
        const text = b.children
          .map((s) => s.text)
          .join("")
          .trim();
        if (text && ["h3", "h4"].includes(b.style)) {
          lastHeading = text;
        }
        break;
      }
      case "codeExample": {
        const ce = item as SanityCodeExample;
        const code = ce.reactCode?.code?.trim();
        if (code) {
          examples.push({
            title: lastHeading,
            code,
            language: ce.reactCode?.language?.trim() || "tsx",
          });
        }
        break;
      }
      case "staticCodeBlock": {
        const block = item as SanityStaticCodeBlock;
        const code = block.code?.code?.trim();
        if (code) {
          examples.push({
            title: lastHeading,
            code,
            language: block.code?.language?.trim() || "tsx",
          });
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  return examples;
}

/**
 * Formats a complete article into a rich markdown document.
 */
function formatArticle(article: SanityArticle): string {
  const parts: string[] = [
    `# ${article.title}`,
    `**Slug:** \`${article.slug}\``,
  ];

  // Introduction
  if (article.introduction?.length) {
    const intro = blocksToMarkdown(article.introduction as SanityContent[]);
    if (intro) {
      parts.push(`## Introduction\n\n${intro}`);
    }
  }

  // Sections
  for (const section of article.componentSections ?? []) {
    const sectionTitle = section.title ?? "Section";
    parts.push(`## ${capitalize(sectionTitle)}`);

    if (section.content?.length) {
      parts.push(blocksToMarkdown(section.content));
    }
  }

  return parts.join("\n\n");
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function normalizeSectionTitle(title?: string): string {
  return (title ?? "")
    .normalize("NFKC")
    .replaceAll(/[\u200B-\u200D\uFEFF]/g, "")
    .trim()
    .toLowerCase();
}

function findExamplesContent(article: SanityArticle): SanityContent[] {
  const sections = article.componentSections ?? [];
  const examplesSection = sections.find((section) => {
    const title = normalizeSectionTitle(section.title);
    const customTitle = normalizeSectionTitle(section.customTitle);
    return title === "examples" || customTitle === "examples";
  });

  if (examplesSection?.content?.length) {
    return examplesSection.content;
  }

  return sections.flatMap((section) => section.content ?? []);
}

/**
 * Renders a SanityComponent's props as a clean markdown table + optional prose notes.
 */
function formatComponentProps(component: SanityComponent): string {
  const parts: string[] = [`### \`${component.name}\``];

  // Prose notes (e.g. links to external docs)
  if (component.content?.length) {
    const notes = blocksToMarkdown(component.content);
    if (notes) parts.push(`> ${notes.replaceAll("\n", "\n> ")}`);
  }

  if (!component.props?.length) {
    parts.push("_No props documented._");
    return parts.join("\n\n");
  }

  // Table header
  const header = "| Prop | Type | Required | Description |";
  const divider = "|------|------|:--------:|-------------|";

  const rows = component.props.map((p) => {
    const type = p.type === "other" ? (p.typeOther ?? "—") : p.type;
    const required = p.isRequired ? "✓" : "";
    const description = p.description?.trim().replaceAll("\n", " ") ?? "—";
    // Escape pipe characters inside cells
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const escape = (s: string) => s.replaceAll("|", String.raw`\|`);
    return `| \`${escape(p.name)}\` | \`${escape(type)}\` | ${required} | ${escape(description)} |`;
  });

  parts.push([header, divider, ...rows].join("\n"));
  return parts.join("\n\n");
}

// ── Tool definitions ───────────────────────────────────────────────────────
server.registerTool(
  "list_components",
  {
    description:
      "List all documented Spor components with their slugs and a short description. Use this as the starting point to discover what components are available.",
  },
  async () => {
    const articles = await fetchAllArticles();

    const rows = articles.map((a) => {
      const intro =
        a.introduction
          ?.flatMap((b) => (b as SanityBlock).children ?? [])
          .map((s) => s.text)
          .join(" ")
          .trim()
          .slice(0, 120) ?? "";

      return `- **${a.title}** (\`${a.slug}\`)${intro ? `\n  ${intro}` : ""}`;
    });

    return {
      content: [
        {
          type: "text",
          text: `# Spor Component Library\n\n${rows.join("\n\n")}\n\n---\nTotal: ${articles.length} components`,
        },
      ],
    };
  },
);

server.registerTool(
  "get_component_docs",
  {
    description:
      "Get full documentation for a specific component: introduction, usage guidelines, and all code examples. Pass the component slug obtained from list_components.",
    inputSchema: {
      slug: z
        .string()
        .min(1)
        .describe(
          "Component slug, e.g. 'autocomplete-new-combobox'. Obtain slugs from list_components.",
        ),
    },
  },
  async ({ slug }) => {
    const article = await fetchArticleBySlug(slug);
    if (!article) {
      return {
        content: [
          {
            type: "text",
            text: `No component found with slug: "${slug}". Use list_components to see available slugs.`,
          },
        ],
        isError: true,
      };
    }

    return {
      content: [{ type: "text", text: formatArticle(article) }],
    };
  },
);

server.registerTool(
  "get_component_examples",
  {
    description:
      "Get only the code examples (TSX snippets) for a component. Useful when you want copy-paste-ready code without the surrounding prose.",
    inputSchema: {
      slug: z
        .string()
        .min(1)
        .describe("Component slug, e.g. 'autocomplete-new-combobox'."),
    },
  },
  async ({ slug }) => {
    const article = await fetchArticleBySlug(slug);
    if (!article) {
      return {
        content: [
          {
            type: "text",
            text: `No component found with slug: "${slug}".`,
          },
        ],
        isError: true,
      };
    }

    const content = findExamplesContent(article);

    if (content.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No code examples found for "${article.title}".`,
          },
        ],
      };
    }

    const examples = extractCodeExamples(content);

    if (examples.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No code examples found for "${article.title}".`,
          },
        ],
      };
    }

    const formatted = examples
      .map(
        (example, index) =>
          `### Example ${index + 1}: ${example.title}\n\n\`\`\`${example.language}\n${example.code}\n\`\`\``,
      )
      .join("\n\n---\n\n");

    return {
      content: [
        {
          type: "text",
          text: `# Code Examples: ${article.title}\n\n${formatted}`,
        },
      ],
    };
  },
);

server.registerTool(
  "get_component_guidelines",
  {
    description:
      "Get the design / usage guidelines for a component — when to use it, when not to, and UX best practices.",
    inputSchema: {
      slug: z
        .string()
        .min(1)
        .describe("Component slug, e.g. 'autocomplete-new-combobox'."),
    },
  },
  async ({ slug }) => {
    const article = await fetchArticleBySlug(slug);
    if (!article) {
      return {
        content: [
          {
            type: "text",
            text: `No component found with slug: "${slug}".`,
          },
        ],
        isError: true,
      };
    }

    const guidelinesSection = article.componentSections?.find(
      (section) => section.title?.toLowerCase() === "guidelines",
    );

    const parts: string[] = [`# Guidelines: ${article.title}`];

    if (article.introduction?.length) {
      const intro = blocksToMarkdown(article.introduction as SanityContent[]);
      if (intro) parts.push(`## Overview\n\n${intro}`);
    }

    if (guidelinesSection?.content?.length) {
      parts.push(
        `## Usage Guidelines\n\n${blocksToMarkdown(guidelinesSection.content)}`,
      );
    } else {
      parts.push("_No specific guidelines documented for this component._");
    }

    return {
      content: [{ type: "text", text: parts.join("\n\n") }],
    };
  },
);

server.registerTool(
  "search_components",
  {
    description:
      "Search for components by keyword across titles and documentation content. Returns matching components with summaries.",
    inputSchema: {
      query: z
        .string()
        .min(1)
        .describe("Search term, e.g. 'dropdown', 'form', 'navigation'."),
    },
  },
  async ({ query }) => {
    const articles = await fetchAllArticles();
    const normalizedQuery = query.toLowerCase();

    const matches = articles.filter((article) => {
      const titleMatch = article.title.toLowerCase().includes(normalizedQuery);
      const introMatch = article.introduction
        ?.flatMap((block) => (block as SanityBlock).children ?? [])
        .some((span) => span.text.toLowerCase().includes(normalizedQuery));
      const sectionMatch = article.componentSections?.some((section) =>
        section.content?.some((block) => {
          if (block._type === "block") {
            return (block as SanityBlock).children?.some((span) =>
              span.text.toLowerCase().includes(normalizedQuery),
            );
          }
          return false;
        }),
      );
      return titleMatch || introMatch || sectionMatch;
    });

    if (matches.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No components found matching "${query}".`,
          },
        ],
      };
    }

    const rows = matches.map((article) => {
      const intro =
        article.introduction
          ?.flatMap((block) => (block as SanityBlock).children ?? [])
          .map((span) => span.text)
          .join(" ")
          .trim()
          .slice(0, 150) ?? "";

      return `### ${article.title}\n**Slug:** \`${article.slug}\`\n\n${intro || "_No description available._"}`;
    });

    return {
      content: [
        {
          type: "text",
          text: `# Search Results for "${query}"\n\nFound ${matches.length} component(s):\n\n${rows.join("\n\n---\n\n")}`,
        },
      ],
    };
  },
);

server.registerTool(
  "get_component_props",
  {
    description:
      "Get the props (API reference) for all sub-components of a given component. Returns a markdown table per sub-component with prop name, type, whether it's required, and description. Pass the article slug from list_components, e.g. 'autocomplete-new-combobox'.",
    inputSchema: {
      slug: z
        .string()
        .min(1)
        .describe(
          "Article slug, e.g. 'autocomplete-new-combobox'. Obtain slugs from list_components.",
        ),
    },
  },
  async ({ slug }) => {
    const components = await fetchComponentsByArticleSlug(slug);

    if (components.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No prop definitions found for slug: "${slug}". The component may not have documented props yet, or the slug may be incorrect. Use list_components to verify.`,
          },
        ],
      };
    }

    const article = await fetchArticleBySlug(slug);
    const title = article?.title ?? slug;
    const sections = components.map((component) =>
      formatComponentProps(component),
    );

    return {
      content: [
        {
          type: "text",
          text: [
            `# Props: ${title}`,
            `_${components.length} sub-component(s) documented_`,
            ...sections,
          ].join("\n\n---\n\n"),
        },
      ],
    };
  },
);

server.registerTool(
  "get_spor_tokens",
  {
    description:
      "Get Spor design tokens for a specific theme and category. Returns flattened color tokens with their alias names, palette keys, and hex values, plus size, font, depth, and transition tokens.",
    inputSchema: {
      theme: z
        .enum(["vyDigital", "vyUtvikling", "cargonet"])
        .describe("Theme to fetch tokens for."),
      category: z
        .enum(["color", "size", "font", "depth", "time", "palette"])
        .optional()
        .describe(
          "Token category to fetch. Omit to get all. Use 'color' for semantic color tokens, 'palette' for raw color values.",
        ),
      colorKey: z
        .string()
        .optional()
        .describe(
          "Specific color group within the theme, e.g. 'brand', 'alert', 'badge'. Only used when category is 'color'.",
        ),
      colorMode: z
        .enum(["light", "dark"])
        .default("light")
        .describe("Resolve _light or _dark values."),
    },
  },
  async ({ theme, category, colorKey, colorMode }) => {
    const themeColors = (tokens.color as unknown as Record<string, unknown>)[
      theme
    ] as Record<string, unknown> | undefined;

    if (!themeColors) {
      return {
        content: [
          {
            type: "text",
            text: `Theme '${theme}' not found. Available: vyDigital, vyUtvikling, cargonet`,
          },
        ],
        isError: true,
      };
    }

    // ── Types ──────────────────────────────────────────────────────────────

    type FlatToken = {
      token: string;
      alias: string | null;
      paletteKey: string;
      hex: string | null;
    };

    // ── Helpers ────────────────────────────────────────────────────────────

    const palette = (tokens.color as unknown as Record<string, unknown>)
      .palette as Record<string, unknown>;

    const aliases = Object.entries(
      (tokens.color as unknown as Record<string, Record<string, string>>)
        .alias ?? {},
    ).map(([name, ref]) => ({ name, value: ref.replace("colors.", "") }));

    function resolvePaletteHex(paletteKey: string): string | null {
      const [color, shade] = paletteKey.split(".");
      const entry = palette[color];
      if (typeof entry === "string") return entry;
      if (typeof entry === "object" && entry !== null && shade) {
        return (entry as Record<string, string>)[shade] ?? null;
      }
      return null;
    }

    function flattenColors(object: unknown, path: string[] = []): FlatToken[] {
      const result: FlatToken[] = [];
      if (typeof object !== "object" || object === null) return result;

      for (const [key, value] of Object.entries(
        object as Record<string, unknown>,
      )) {
        if (key === `_${colorMode}`) {
          const resolved = (value as string).replace("colors.", "");
          const alias = aliases.find((a) => a.name === resolved) ?? null;
          const paletteKey = alias?.value ?? resolved;
          const hex = resolvePaletteHex(paletteKey);

          result.push({
            token: path.join(".").replace(/\.DEFAULT$/, ""),
            alias: alias?.name ?? null,
            paletteKey,
            hex,
          });
        } else if (typeof value === "object" && value !== null) {
          result.push(...flattenColors(value, [...path, key]));
        }
      }
      return result;
    }

    function formatColorSection(key: string, data: unknown): string {
      const flat = flattenColors(data);
      if (flat.length === 0) return "";
      const rows = flat
        .map(
          ({ token, alias, paletteKey, hex }) =>
            `| \`${key}.${token}\` | ${alias ? `\`${alias}\`` : "—"} | \`${paletteKey}\` | ${hex ? `\`${hex}\`` : "—"} |`,
        )
        .join("\n");
      return `### ${key}\n\n| Token | Alias | Palette | Hex |\n|-------|-------|---------|-----|\n${rows}`;
    }

    // ── Category routing ───────────────────────────────────────────────────

    const parts: string[] = [`# Spor Tokens — ${theme}`];

    if (!category || category === "color") {
      const source = colorKey
        ? { [colorKey]: themeColors[colorKey] }
        : themeColors;

      parts.push(`## Color tokens (${colorMode} mode)`);
      for (const [key, value] of Object.entries(source)) {
        const section = formatColorSection(key, value);
        if (section) parts.push(section);
      }
    }

    if (!category || category === "palette") {
      const rows = Object.entries(palette).flatMap(([color, shades]) => {
        if (typeof shades === "string")
          return [`| \`${color}\` | \`${shades}\` |`];
        return Object.entries(shades as Record<string, string>).map(
          ([shade, hex]) => `| \`${color}.${shade}\` | \`${hex}\` |`,
        );
      });
      parts.push(
        `## Palette\n\n| Token | Hex |\n|-------|-----|\n${rows.join("\n")}`,
      );
    }

    if (!category || category === "size") {
      parts.push(
        `## Size\n\n\`\`\`json\n${JSON.stringify(tokens.size, null, 2)}\n\`\`\``,
      );
    }

    if (!category || category === "font") {
      parts.push(
        `## Font\n\n\`\`\`json\n${JSON.stringify(tokens.font, null, 2)}\n\`\`\``,
      );
    }

    if (!category || category === "depth") {
      parts.push(
        `## Depth\n\n\`\`\`json\n${JSON.stringify(tokens.depth, null, 2)}\n\`\`\``,
      );
    }

    if (!category || category === "time") {
      parts.push(
        `## Transitions\n\n\`\`\`json\n${JSON.stringify(tokens.time, null, 2)}\n\`\`\``,
      );
    }

    return {
      content: [{ type: "text", text: parts.join("\n\n") }],
    };
  },
);

server.registerTool(
  "list_spor_react_exports",
  {
    description:
      "List all exported names from the @vygruppen/spor-react package. Useful to check what components, hooks, and utilities are available to import.",
  },
  async () => {
    const allExports = Object.keys(spor);
    const components = allExports.filter((name) => /^[A-Z]/.test(name));
    const hooks = allExports.filter((name) => /^use[A-Z]/.test(name));
    const other = allExports.filter(
      (name) => !/^[A-Z]/.test(name) && !/^use[A-Z]/.test(name),
    );

    const lines = [
      "# @vygruppen/spor-react exports",
      `\n## Components (${components.length})\n`,
      components.map((component) => `- \`${component}\``).join("\n"),
    ];

    if (hooks.length > 0) {
      lines.push(`\n## Hooks (${hooks.length})\n`);
      lines.push(hooks.map((hook) => `- \`${hook}\``).join("\n"));
    }

    if (other.length > 0) {
      lines.push(`\n## Utilities / Other (${other.length})\n`);
      lines.push(other.map((entry) => `- \`${entry}\``).join("\n"));
    }

    return {
      content: [{ type: "text", text: lines.join("\n") }],
    };
  },
);

// ── Fetch helpers ──────────────────────────────────────────────────────────

async function fetchAllArticles(): Promise<SanityArticle[]> {
  return fetchSanityData<SanityArticle[]>(`
    *[
      _type == "article" &&
      category->slug.current == "components" &&
      slug.current != "overview"
    ] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      introduction,
      componentSections
    }
  `);
}

async function fetchArticleBySlug(slug: string): Promise<SanityArticle | null> {
  const results = await fetchSanityData<SanityArticle[]>(
    `*[
      _type == "article" &&
      category->slug.current == "components" &&
      slug.current == $slug
    ] {
      _id,
      title,
      "slug": slug.current,
      introduction,
      componentSections
    }`,
    { slug },
  );
  return results[0] ?? null;
}

/**
 * Fetches all `component` documents referenced in a given article's "code" section.
 * Falls back to a name-based search if the article has no direct refs.
 */
async function fetchComponentsByArticleSlug(
  articleSlug: string,
): Promise<SanityComponent[]> {
  // First get the article to find its referenced component IDs
  const article = await fetchArticleBySlug(articleSlug);
  const codeSection = article?.componentSections?.find(
    (s) => s.title?.toLowerCase() === "code",
  );
  const references = codeSection?.components?.map((c) => c._ref) ?? [];

  if (references.length > 0) {
    // Fetch by explicit references
    const components = await fetchSanityData<SanityComponent[]>(
      `*[_type == "component" && _id in $refs] | order(name asc) {
        _id,
        name,
        "slug": slug.current,
        props,
        content
      }`,
      { refs: references },
    );
    return components;
  }

  // Fallback: fuzzy match by article title
  if (article) {
    // Derive a base name from the article title, e.g. "Autocomplete (New Combobox)" → "autocomplete"
    const baseName = article.title.split(/[\s(]/)[0].toLowerCase();
    const components = await fetchSanityData<SanityComponent[]>(
      `*[_type == "component" && lower(name) match $pattern] | order(name asc) {
        _id,
        name,
        "slug": slug.current,
        props,
        content
      }`,
      { pattern: `${baseName}*` },
    );
    return components;
  }

  return [];
}

await startServer();
