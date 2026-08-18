# Testing the Codemods

## Quick Test

To test a codemod on an example file:

```bash
# From the spor-codemods directory
pnpm exec jscodeshift -t transforms/color-tokens.js __tests__/example.tsx --dry --print
```
