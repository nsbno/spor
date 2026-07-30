---
"@vygruppen/spor-design-tokens": minor
"@vygruppen/spor-react": minor
"@vygruppen/spor-mcp-server": minor
---

Add new VyTeknologi brand theme and deprecate VyUtvikling

- New `Brand.VyTeknologi` theme, usable with `<SporProvider theme={themes[Brand.VyTeknologi]}>`
- Three new color palettes with 12 steps each: `teal`, `pink` and `violet`, with named aliases (e.g. `grape` → `violet.900`, `moss` → `teal.700`, `jam` → `pink.800`)
- The existing `pink` alias (→ `red.50`) still resolves as before; the new range is available as `pink.50`–`pink.1100`
- `Brand.VyUtvikling` and `vyUtviklingColors` are marked as `@deprecated` — migrate to `Brand.VyTeknologi`
- The MCP server's `get_spor_tokens` tool now accepts `vyTeknologi` as a theme
