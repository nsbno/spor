# Spor MCP Server Notes

The canonical documentation for this package now lives in `README.md` in the same folder:

- [README.md](./README.md)

## Quick commands

From repository root:

```bash
pnpm --filter @vygruppen/spor-mcp-server build
pnpm --filter @vygruppen/spor-mcp-server test:smoke
```

From `packages/spor-mcp-server`:

```bash
node dist/sdk-client.js
node dist/sdk-client.js list_components
node dist/sdk-client.js get_spor_tokens '{"theme":"vyDigital"}'
```

## Why this file exists

This file is kept as a short compatibility note for anyone who bookmarked `mcp.md`.

For setup details, MCP client config, env vars, all tools, and troubleshooting, use `README.md`.
