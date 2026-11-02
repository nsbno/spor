# @vygruppen/oxlint-config

A shared [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) configuration for Vygruppen projects. It is the Oxlint counterpart of [`@vygruppen/eslint-config`](../eslint-config/README.md), and enforces the same standards across TypeScript, React, and JavaScript codebases.

## Features

- TypeScript recommended rules
- React and React Hooks best practices (including most React Compiler rules)
- Accessibility checks with jsx-a11y
- Modern JavaScript standards (ESLint recommended + Unicorn)
- Custom rule for semantic design tokens
- Automatic import sorting

Oxlint has no formatting rules, so it doesn't need a Prettier config. The few Unicorn rules that `eslint-config-prettier` turns off in the ESLint config are turned off here too.

## Installation

```bash
pnpm install --save-dev oxlint @vygruppen/oxlint-config
```

Oxlint requires Node.js 22.18+ to load a TypeScript config file.

## Usage

Create an `oxlint.config.ts` file in your project root:

```ts
import config from "@vygruppen/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [config],
});
```

Add your own rules or overrides next to `extends`:

```ts
import config from "@vygruppen/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [config],
  ignorePatterns: ["dist"],
  rules: {
    "typescript/no-explicit-any": "off",
  },
});
```

Then run `oxlint` (for example `"lint": "oxlint"` in your `package.json`).

> [!NOTE]
> Oxlint rule names use the plugin scopes `eslint/`, `typescript/`, `react/`, `jsx-a11y/` and `unicorn/`, not the ESLint plugin names. For example `@typescript-eslint/no-explicit-any` is `typescript/no-explicit-any`, and `react-hooks/exhaustive-deps` is `react/exhaustive-deps`.

## Migrating from `@vygruppen/eslint-config`

1. Install `oxlint` and `@vygruppen/oxlint-config`, and add an `oxlint.config.ts` as described in [Usage](#usage).
2. Update your `lint` script, for example from `eslint .` to `oxlint --max-warnings=0`.
3. Move any custom rules or ignores from `eslint.config.mjs` into `oxlint.config.ts`. Use the Oxlint rule names, see the note above.
4. Update inline disable comments to the Oxlint rule names. Oxlint also reads `eslint-disable` comments, but only for rule names it recognises:

   ```diff
   - // eslint-disable-next-line @typescript-eslint/no-explicit-any
   + // oxlint-disable-next-line typescript/no-explicit-any
   ```

   `spor/use-semantic-tokens` and the `unicorn/*` rules keep the same names.

5. Remove `eslint.config.mjs` and the `eslint` and `@vygruppen/eslint-config` dependencies.
6. Keep Prettier as it is. Neither tool handles formatting for the other.
7. Install Oxlint's editor extension (`oxc` in VS Code) so diagnostics and autofix on save work in your editor. JS plugin rules (import sorting and `spor/use-semantic-tokens`) are alpha and may behave differently in the editor than on the command line.

Run `oxlint` once after migrating. Expect some differences from ESLint, listed under [What's included](#whats-included).

## What's included

| ESLint config                        | In this package                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------------- |
| `@eslint/js` recommended             | Native `eslint/*` rules                                                                     |
| `typescript-eslint` recommended      | Native `typescript/*` rules (non type-aware)                                                |
| `eslint-plugin-react` recommended    | Native `react/*` rules                                                                      |
| `eslint-plugin-react-hooks`          | Native `react/rules-of-hooks`, `react/exhaustive-deps` and most of the React Compiler rules |
| `eslint-plugin-jsx-a11y` recommended | Native `jsx-a11y/*` rules                                                                   |
| `eslint-plugin-unicorn` recommended  | Native `unicorn/*` rules, except the few Oxlint doesn't implement (see below)               |
| `eslint-plugin-simple-import-sort`   | JS plugin, `simple-import-sort/imports` and `simple-import-sort/exports`                    |
| `eslint-config-prettier`             | The conflicting rules are turned off, see below                                             |
| `spor/use-semantic-tokens`           | JS plugin, the same rule as in `@vygruppen/eslint-config`                                   |

Differences from the ESLint config:

- `unicorn/filename-case` and `unicorn/no-null` are off, as in the ESLint config.
- `no-unexpected-multiline`, `unicorn/no-nested-ternary`, `unicorn/empty-brace-spaces`, `unicorn/number-literal-case` and `unicorn/template-indent` are off. `eslint-config-prettier` turns them off in the ESLint config, since Prettier handles formatting.
- `unicorn/consistent-function-scoping` is off. The ESLint version skips functions that contain JSX, Oxlint's version does not, and flags most components defined inside stories and render functions.
- A few rules are implemented more strictly than their ESLint counterparts, for example `jsx-a11y/role-has-required-aria-props` and `jsx-a11y/aria-proptypes`, so you may see new accessibility findings.
- These rules have no Oxlint implementation: `no-dupe-args`, `no-octal`, `react/prop-types`, `react/no-deprecated`, and the React Compiler rules `react-hooks/component-hook-factories`, `react-hooks/config` and `react-hooks/gating`.
- These Unicorn rules have no Oxlint implementation either, and are left out to avoid loading `eslint-plugin-unicorn` as a JS plugin: `unicorn/expiring-todo-comments`, `unicorn/no-for-loop`, `unicorn/no-named-default`, `unicorn/no-unnecessary-polyfills`, `unicorn/prefer-switch` and `unicorn/prevent-abbreviations`. You can remove `eslint-disable` comments for them.
- Oxlint's default `correctness` category is enabled on top of the rules above, so you may see a few extra diagnostics (for example from the `oxc` plugin).
- Type-aware rules are not enabled. Opt in with `options.typeAware` and install `oxlint-tsgolint` if you want them.
- JS plugins are in alpha in Oxlint, and may not be supported by every editor integration.

## Custom Rules

### `spor/use-semantic-tokens`

Enforces the use of semantic color tokens in Chakra UI components to facilitate dark mode implementation and ensure design consistency. See the [`@vygruppen/eslint-config` README](../eslint-config/README.md#spor-use-semantic-tokens) for the full description; the rule is identical.

```jsx
// ✅ Good - semantic tokens
<Box bg="bg" color="text.subtle" />

// ❌ Bad - hardcoded colors
<Box bg="blue.500" color="greenHaze" />
```

In rare cases where you need a non-semantic token, disable the rule for that line:

```jsx
// oxlint-disable-next-line spor/use-semantic-tokens
<Box bg="blue.500" />
```

(`// eslint-disable-next-line spor/use-semantic-tokens` works as well.)

## Development

The allowed tokens are generated from `@vygruppen/spor-design-tokens` into `dist/tokens.js` by `pnpm build` (also run on `prepare`). The custom rule reads that file, so build before linting.
