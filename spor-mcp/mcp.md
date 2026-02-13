# Spor MCP Server

Local MCP server exposing Spor design system tokens and components.

## Quick Start

**Test the server:**

```bash
node sdk-client.js
```

## Setup

> ⚠️ **NOTE:** MCP for Copilot is not enabled yet in Vygruppen yet, but Q Developer works.

### VS Code Copilot

Add to `~/.vscode/mcp.json` (in your home directory, applies globally):

```json
{
  "servers": {
    "spor": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/spor-mcp/server.js"]
    }
  }
}
```

Once configured globally, use `@spor` in Copilot Chat across all workspaces.

### Amazon Q Developer

Add to `~/.aws/amazonq/default.json` (use absolute path to spor-mcp/server.js):

```json
{
  "mcpServers": {
    "spor": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/spor-mcp/server.js"]
    }
  }
}
```

Once configured globally, the tools will be available in Q Developer chat across all workspaces.

## Files

- **`server.js`** - MCP server implementation
- **`sdk-client.js`** - Test client (run from this directory)

## Available Tools

- `list_spor_components` - All Spor React components
- `get_spor_tokens` - Design tokens (colors, spacing, typography)

---

**References:**
- [Spor Design System](https://spor.vy.no)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [VS Code Copilot MCP Setup](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
- [Amazon Q Developer MCP Setup](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/mcp-ide.html)
