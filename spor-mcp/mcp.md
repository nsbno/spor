# Spor MCP Server

Local MCP server exposing Spor design system tokens and components.

## Quick Start

**Test the server:**

```bash
cd spor-mcp
pnpm install
node sdk-client.js
```

## Setup

> ⚠️ **NOTE:** MCP for Copilot in VS Code is not enabled yet in Vygruppen yet, but Q Developer and Copilot CLI work.

### Prerequisites

The server currently requires local dependencies (Once published to npm or bundled as a standalone executable, installation won't be needed). Before configuring, run:

```bash
cd /path/to/spor
pnpm install
```

This installs `@vygruppen/spor-design-tokens` and `@vygruppen/spor-react` that the server imports.

### Copilot in VS Code 

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

### Copilot CLI

Add to `~/.copilot/mcp-config.json`:

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

Once configured, the tools will be available in `copilot` commands.

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

## Distribution Options (Future)

To avoid requiring local installation:

1. **Publish to npm** - Users can run via `npx -y @vygruppen/spor-mcp`
2. **Bundle as standalone** - Use esbuild to create a single executable with embedded dependencies

---

**References:**

- [Spor Design System](https://spor.vy.no)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [VS Code Copilot MCP Setup](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)
- [Copilot CLI MCP Setup](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli#add-an-mcp-server)
- [Amazon Q Developer MCP Setup](https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/mcp-ide.html)
