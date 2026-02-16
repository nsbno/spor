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

  // List tools
  const tools = await client.listTools();
  console.log("Available tools:");
  tools.tools.forEach((t) => console.log(`  - ${t.name}: ${t.description}`));
  console.log();

  // Call list_spor_components
  const result = await client.callTool({
    name: "list_spor_components",
    arguments: {},
  });
  console.log("Spor Components:");
  console.log(result.content[0].text);

  await client.close();
}

main().catch(console.error);
