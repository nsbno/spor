---
"@vygruppen/spor-react": major
"@vygruppen/spor-icon-react": major
"@vygruppen/spor-loader": minor
---

Publish ES modules only. The CommonJS build (`.cjs`) is removed.

- `import` works as before.
- `require()` works on Node 22.12 and later, which can load ES modules.
- Jest doesn't transform `node_modules` by default. Let it transform Spor:

  ```js
  // jest.config.js
  transformIgnorePatterns: ["/node_modules/(?!(\\.pnpm/)?@vygruppen)"],
  ```
