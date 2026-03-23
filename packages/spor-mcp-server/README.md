# @vygruppen/spor-mcp-server

MCP server that gives AI clients access to Spor component documentation, usage guidelines, code examples, props tables, design tokens, and `@vygruppen/spor-react` exports.

The server runs over stdio and can be used from tools like GitHub Copilot CLI, VS Code MCP clients, and Amazon Q Developer.

## What this server exposes

- Sanity-backed component documentation from the Spor design manual
- Design tokens from `@vygruppen/spor-design-tokens`
- Exported API surface from `@vygruppen/spor-react`

## Available tools

- `list_components` — list all documented Spor component articles
- `get_component_docs` — full docs for one component slug
- `get_component_examples` — code examples only for one component slug
- `get_component_guidelines` — usage/guidelines section for one slug
- `search_components` — keyword search across component docs
- `get_component_props` — prop tables for referenced sub-components
- `get_spor_tokens` — token lookup by theme/category/mode
- `list_spor_react_exports` — all exports from `@vygruppen/spor-react`

## Prerequisites

- Node.js 20+

For runtime usage in MCP clients, you can run this server directly with `npx`.

For local development in this monorepo, you also need:

- pnpm 9+
- Dependencies installed in the Spor monorepo

From repository root:

```bash
pnpm install
```

## Quick start (npx)

Use this MCP config:

```json
{
  "servers": {
    "spor": {
      "command": "npx",
      "args": ["-y", "@vygruppen/mcp-server"]
    }
  }
}
```

This is the recommended setup for MCP clients that support stdio server commands.

## Quick start (local)

From repository root:

```bash
pnpm --filter @vygruppen/spor-mcp-server build
pnpm --filter @vygruppen/spor-mcp-server test:smoke
```

What this does:

- Builds TypeScript into `dist/`
- Starts a local MCP client (`dist/sdk-client.js`) against `dist/index.js`
- Lists all registered tools to verify the server boots correctly

## Start the server manually

```bash
pnpm --filter @vygruppen/spor-mcp-server build
pnpm --filter @vygruppen/spor-mcp-server start
```

You should see:

```text
Spor MCP server is running on stdio...
```

## MCP client configuration examples

Two setup options are supported:

- **Recommended:** `npx -y @vygruppen/mcp-server`
- **Local development:** `node /absolute/path/to/spor/packages/spor-mcp-server/dist/index.js`

If using local development mode, build first:

```bash
pnpm --filter @vygruppen/spor-mcp-server build
```

### VS Code MCP config

Add to `~/.vscode/mcp.json`:

#### Option A (recommended: npx)

```json
{
  "servers": {
    "spor": {
      "command": "npx",
      "args": ["-y", "@vygruppen/mcp-server"]
    }
  }
}
```

#### Option B (local built file)

```json
{
  "servers": {
    "spor": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/spor/packages/spor-mcp-server/dist/index.js"]
    }
  }
}
```

### Copilot CLI config

Add to `~/.copilot/mcp-config.json`:

#### Option A (recommended: npx)

```json
{
  "mcpServers": {
    "spor": {
      "command": "npx",
      "args": ["-y", "@vygruppen/mcp-server"]
    }
  }
}
```

#### Option B (local built file)

```json
{
  "mcpServers": {
    "spor": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/spor/packages/spor-mcp-server/dist/index.js"]
    }
  }
}
```

### Amazon Q Developer config

Add to `~/.aws/amazonq/default.json`:

#### Option A (recommended: npx)

```json
{
  "mcpServers": {
    "spor": {
      "command": "npx",
      "args": ["-y", "@vygruppen/mcp-server"]
    }
  }
}
```

#### Option B (local built file)

```json
{
  "mcpServers": {
    "spor": {
      "type": "stdio",
      "command": "node",
      "args": ["/absolute/path/to/spor/packages/spor-mcp-server/dist/index.js"]
    }
  }
}
```

## Using the included smoke client

After build, run:

```bash
cd packages/spor-mcp-server
node dist/sdk-client.js
```

List tools + call one:

```bash
node dist/sdk-client.js list_components
node dist/sdk-client.js search_components '{"query":"form"}'
node dist/sdk-client.js get_component_docs '{"slug":"button"}'
node dist/sdk-client.js get_component_examples '{"slug":"button"}'
node dist/sdk-client.js get_component_guidelines '{"slug":"button"}'
node dist/sdk-client.js get_component_props '{"slug":"button"}'
node dist/sdk-client.js list_spor_react_exports
node dist/sdk-client.js get_spor_tokens '{"theme":"vyDigital","category":"color","colorMode":"dark"}'
```

## `get_spor_tokens` input reference

`theme`:

- `vyDigital`
- `vyUtvikling`
- `cargonet`

Optional fields:

- `category`: `color` | `size` | `font` | `depth` | `time` | `palette`
- `colorKey`: any top-level color group (for example `brand`, `alert`, `badge`) when `category` is `color`
- `colorMode`: `light` | `dark` (default: `light`)

Example:

```json
{
  "theme": "vyDigital",
  "category": "color",
  "colorMode": "dark",
  "colorKey": "brand"
}
```

## Development scripts

From `packages/spor-mcp-server`:

- `pnpm build` — compile TypeScript to `dist/`
- `pnpm dev` — watch-mode TypeScript build
- `pnpm start` — run built server (`dist/index.js`)
- `pnpm test:smoke` — build + run SDK smoke client
- `pnpm inspect` — open MCP Inspector against built server

## Package files

- `index.ts` — MCP server registration + tool implementation
- `sdk-client.ts` — local smoke client for manual calls
- `dist/index.js` — compiled server entrypoint used by MCP clients
- `dist/sdk-client.js` — compiled smoke test client

## References

- https://spor.vy.no
- https://modelcontextprotocol.io
- https://code.visualstudio.com/docs/copilot/customization/mcp-servers
- https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli#add-an-mcp-server
- https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/mcp-ide.html
