---
"@vygruppen/sidespor-config": patch
"@vygruppen/spor-codemods": patch
"@vygruppen/spor-icon-react": patch
"@vygruppen/spor-icon-react-native": patch
"@vygruppen/spor-loader": patch
"@vygruppen/spor-react": patch
---

Build with tsdown instead of tsup, and emit types with TypeScript 7. Entry points and export names are unchanged.

- Declaration maps (`.d.ts.map`) are now published next to the type declarations.
- `spor-react` puts code shared by its `.` and `./icons` entry points in a separate chunk file.
- `spor-icon-react-native` no longer emits `chunk-*.js` files. Each icon file is self-contained.
