#!/usr/bin/env node

import process from "node:process";
import { fileURLToPath } from "node:url";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

type TextContent = {
  type: "text";
  text: string;
};

function getTextContent(content: unknown): string {
  if (!Array.isArray(content)) {
    throw new TypeError(
      "Tool result did not return an array of content blocks",
    );
  }

  const textBlock = content.find(
    (item): item is TextContent =>
      typeof item === "object" &&
      item !== null &&
      "type" in item &&
      item.type === "text" &&
      "text" in item &&
      typeof item.text === "string",
  );

  if (!textBlock) {
    throw new Error("Tool result did not return a text content block");
  }

  return textBlock.text;
}

async function main() {
  const serverPath = fileURLToPath(new URL("index.js", import.meta.url));
  const client = new Client(
    {
      name: "test-client",
      version: "1.0.0",
    },
    {
      capabilities: {},
    },
  );

  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [serverPath],
  });

  await client.connect(transport);
  console.log("Connected to server\n");

  // List tools
  const tools = await client.listTools();
  console.log("Available tools:");
  for (const t of tools.tools) console.log(`  - ${t.name}: ${t.description}`);
  console.log();

  // Call list_spor_components
  const result = await client.callTool({
    name: "list_spor_components",
    arguments: {},
  });

  const componentsText = getTextContent(result.content);
  const components = componentsText
    .split("\n")
    .map((component) => component.trim())
    .filter(Boolean);

  if (components.length === 0) {
    throw new Error("`list_spor_components` returned no components");
  }

  console.log(`Spor Components: ${components.length} found`);
  console.log(components.slice(0, 10).join("\n"));
  if (components.length > 10) {
    console.log("...");
  }
  console.log();

  const tokenResult = await client.callTool({
    name: "get_spor_tokens",
    arguments: { theme: "vyDigital" },
  });

  const tokenText = getTextContent(tokenResult.content);
  const parsedTokens = JSON.parse(tokenText) as {
    theme?: string;
    colors?: Record<string, unknown>;
  };

  if (parsedTokens.theme !== "vyDigital") {
    throw new Error("`get_spor_tokens` did not return the requested theme");
  }

  if (!parsedTokens.colors || Object.keys(parsedTokens.colors).length === 0) {
    throw new Error("`get_spor_tokens` returned no colors");
  }

  console.log("Token lookup succeeded for theme: vyDigital");
  console.log(
    `Color categories: ${Object.keys(parsedTokens.colors)
      .slice(0, 10)
      .join(", ")}`,
  );
  console.log("\nSmoke test passed ✅");

  await client.close();
}

try {
  await main();
} catch (error) {
  console.error("Smoke test failed:", error);
  process.exitCode = 1;
}
