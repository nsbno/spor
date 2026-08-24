# @vygruppen/spor-mcp-server

## 2.2.3

### Patch Changes

- Updated dependencies [ff28880]
  - @vygruppen/spor-react@13.7.2

## 2.2.2

### Patch Changes

- Updated dependencies [15a6c48]
- Updated dependencies [e4c369c]
- Updated dependencies [ac7ec72]
- Updated dependencies [1272e1d]
  - @vygruppen/spor-react@13.7.1

## 2.2.1

### Patch Changes

- Updated dependencies [e6bfa69]
- Updated dependencies [6d0bf57]
- Updated dependencies [b80fda2]
- Updated dependencies [783c84f]
- Updated dependencies [022e894]
- Updated dependencies [a1d5a12]
  - @vygruppen/spor-react@13.7.0
  - @vygruppen/spor-design-tokens@5.1.1

## 2.2.0

### Minor Changes

- ce5b9e0: Add new VyTeknologi brand theme and deprecate VyUtvikling
  - New `Brand.VyTeknologi` theme, usable with `<SporProvider theme={themes[Brand.VyTeknologi]}>`
  - Three new color palettes with 12 steps each: `teal`, `pink` and `violet`, with named aliases (e.g. `grape` → `violet.900`, `moss` → `teal.700`, `jam` → `pink.800`)
  - The existing `pink` alias (→ `red.50`) still resolves as before; the new range is available as `pink.50`–`pink.1100`
  - `Brand.VyUtvikling` and `vyUtviklingColors` are marked as `@deprecated` — migrate to `Brand.VyTeknologi`
  - The MCP server's `get_spor_tokens` tool now accepts `vyTeknologi` as a theme

### Patch Changes

- Updated dependencies [ce5b9e0]
  - @vygruppen/spor-design-tokens@5.1.0
  - @vygruppen/spor-react@13.6.0

## 2.1.17

### Patch Changes

- Updated dependencies [44c4594]
- Updated dependencies [bc0f4b4]
- Updated dependencies [3ca4098]
  - @vygruppen/spor-react@13.5.0

## 2.1.16

### Patch Changes

- Updated dependencies [cc9028e]
- Updated dependencies [4500a7b]
  - @vygruppen/spor-design-tokens@5.0.6
  - @vygruppen/spor-react@13.4.6

## 2.1.15

### Patch Changes

- Updated dependencies [5b62e2e]
  - @vygruppen/spor-react@13.4.5

## 2.1.14

### Patch Changes

- Updated dependencies [5535288]
  - @vygruppen/spor-react@13.4.4

## 2.1.13

### Patch Changes

- Updated dependencies [dea15ec]
- Updated dependencies [3426845]
- Updated dependencies [3b905c8]
- Updated dependencies [5aabe19]
- Updated dependencies [dc7f5af]
  - @vygruppen/spor-react@13.4.3
  - @vygruppen/spor-design-tokens@5.0.5

## 2.1.12

### Patch Changes

- Updated dependencies [5e1ff50]
- Updated dependencies [b395020]
- Updated dependencies [c976a77]
- Updated dependencies [5a65a8e]
  - @vygruppen/spor-react@13.4.2

## 2.1.11

### Patch Changes

- Updated dependencies [e5b9c5e]
- Updated dependencies [b6495d6]
  - @vygruppen/spor-react@13.4.1

## 2.1.10

### Patch Changes

- Updated dependencies [6412d40]
- Updated dependencies [e864f09]
- Updated dependencies [17a00b7]
  - @vygruppen/spor-react@13.4.0

## 2.1.9

### Patch Changes

- Updated dependencies [b1e5186]
- Updated dependencies [d6eddea]
- Updated dependencies [0a35c66]
  - @vygruppen/spor-react@13.3.2
  - @vygruppen/spor-design-tokens@5.0.4

## 2.1.8

### Patch Changes

- Updated dependencies [55e243a]
- Updated dependencies [b365786]
  - @vygruppen/spor-react@13.3.1

## 2.1.7

### Patch Changes

- Updated dependencies [0004541]
- Updated dependencies [6bdd89f]
  - @vygruppen/spor-react@13.3.0

## 2.1.6

### Patch Changes

- Updated dependencies [b6f6c99]
- Updated dependencies [6ee3004]
- Updated dependencies [37467a9]
- Updated dependencies [4c85213]
- Updated dependencies [b91bffd]
- Updated dependencies [ac0c26f]
  - @vygruppen/spor-react@13.2.1
  - @vygruppen/spor-design-tokens@5.0.3

## 2.1.5

### Patch Changes

- Updated dependencies [305f387]
  - @vygruppen/spor-react@13.2.0

## 2.1.4

### Patch Changes

- Updated dependencies [ab364d0]
- Updated dependencies [126094e]
- Updated dependencies [cd92694]
  - @vygruppen/spor-react@13.1.4

## 2.1.3

### Patch Changes

- 7abecea: Install deps from workspace
- Updated dependencies [65651f0]
- Updated dependencies [15b5e35]
  - @vygruppen/spor-design-tokens@5.0.2
  - @vygruppen/spor-react@13.1.3

## 2.1.2

### Patch Changes

- 106ee0f: Patches to new color tokens and add support to badge-inverted back
- Updated dependencies [106ee0f]
- Updated dependencies [448f4e5]
  - @vygruppen/spor-design-tokens@5.0.1
  - @vygruppen/spor-react@13.1.1

## 2.1.1

### Patch Changes

- Updated dependencies [28d1e87]
  - @vygruppen/spor-react@13.0.0

## 2.1.0

### Minor Changes

- 8f77636: Spor MCP server

### Patch Changes

- Updated dependencies [91f17bd]
  - @vygruppen/spor-react@12.24.12
