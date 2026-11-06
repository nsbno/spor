# @vygruppen/oxlint-config

## 0.1.1

### Patch Changes

- c37ec21: Clean up package dependencies.
  - **`@vygruppen/spor-react`**: Move `@react-types/datepicker` and `@react-types/shared` to `dependencies`. The published type declarations import from them, so consumers need them to type-check.
  - **`@vygruppen/spor-codemods`**: Stop installing `@vygruppen/spor-react` with the codemods, since only the test fixtures use it. Remove the `jscodeshift` peer dependency, since the package already depends on `jscodeshift` directly.
  - **`@vygruppen/spor-mcp-server`**: Remove the unused `@sanity/client` dependency.
  - **`@vygruppen/oxlint-config`**: Add `@vygruppen/spor-design-tokens` as a dev dependency.

## 0.1.0

### Minor Changes

- 147c990: Add `@vygruppen/oxlint-config`, a shared Oxlint configuration that mirrors `@vygruppen/eslint-config`, including the `spor/use-semantic-tokens` rule.
