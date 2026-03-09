# Spor MCP Server

Local MCP server exposing Spor design system tokens and components.

## Quick Start

**Test the server:**

```bash
cd spor-mcp
pnpm install
node sdk-client.js                                          # list available tools
node sdk-client.js list_spor_components                    # all React components
node sdk-client.js get_spor_tokens '{"theme":"vyDigital"}' # full token set
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

### `get_spor_tokens`

Returns all design tokens for a specific theme in one call.

**Input:**

```json
{ "theme": "vyDigital" | "vyUtvikling" | "cargonet" }
```

**Output:**

```json
{
  "theme": "vyDigital",
  "colors": {
    "bg": { "DEFAULT": "#FFFFFF", "secondary": "#F5F5F5", ... },
    "text": { "DEFAULT": "#262626", ... },
    "brand": { "DEFAULT": "#00685E", ... },
    ...
  },
  "palette": {
    "green": { "700": "#00685E", "800": "#004D45", ... },
    "grey": { "100": "#F5F5F5", ... },
    ...
  },
  "aliases": {
    "pine": "#00685E",
    "night": "#001A18",
    "seaMist": "#C4E0DC",
    ...
  },
  "size": { "spacing": { ... }, "border-radius": { ... }, ... },
  "font": { "style": { ... }, "family": { ... } }
}
```

- `colors` — semantic tokens (e.g. `bg.DEFAULT`, `brand.DEFAULT`) fully resolved to hex, scoped to the selected theme and color mode references preserved (`_light`/`_dark`)
- `palette` — primitive color scales used by this theme (e.g. `green.700`), resolved to hex
- `aliases` — named color shortcuts used by this theme (e.g. `pine`, `night`), resolved to hex
- `size` — spacing, border-radius, breakpoints, stroke, line-height, font-size
- `font` — font families and text styles

---

### `list_spor_components`

Returns a newline-separated list of all exported React component names from `@vygruppen/spor-react`.

**Input:** none

**Output:**

```
Box
Button
Card
Heading
...
```

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
