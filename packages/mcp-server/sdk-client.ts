#!/usr/bin/env node

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function main() {
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
    args: ["./server.js"],
  });

  await client.connect(transport);
  console.log("Connected to server\n");

  // List available tools
  const { tools } = await client.listTools();
  console.log("Available tools:");
  for (const t of tools) console.log(`  - ${t.name}: ${t.description}`);
  console.log();

  const toolName = process.argv[2];

  if (!toolName) {
    console.log("Usage: node sdk-client.js <tool-name> [json-args]");
    console.log("Examples:");
    console.log("  node sdk-client.js list_spor_components");
    console.log(
      '  node sdk-client.js get_spor_tokens \'{"theme":"vyDigital"}\'',
    );
    console.log(
      '  node sdk-client.js get_spor_tokens \'{"theme":"vyUtvikling"}\'',
    );
    console.log(
      '  node sdk-client.js get_spor_tokens \'{"theme":"cargonet"}\'',
    );
    await client.close();
    return;
  }

  const toolExists = tools.some((t) => t.name === toolName);
  if (!toolExists) {
    console.error(`Unknown tool: "${toolName}"`);
    console.error(`Available: ${tools.map((t) => t.name).join(", ")}`);
    await client.close();
    process.exit(1);
  }

  let arguments_ = {};
  if (process.argv[3]) {
    try {
      arguments_ = JSON.parse(process.argv[3]);
    } catch {
      console.error("Invalid JSON for arguments:", process.argv[3]);
      await client.close();
      process.exit(1);
    }
  }

  console.log(
    `Calling "${toolName}"${Object.keys(arguments_).length > 0 ? ` with ${JSON.stringify(arguments_)}` : ""}...\n`,
  );
  const result = await client.callTool({
    name: toolName,
    arguments: arguments_,
  });

  if (result.isError) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.error("Tool error:", (result as any).content[0].text);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log((result as any).content[0].text);
  }

  await client.close();
}

try {
  await main();
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
