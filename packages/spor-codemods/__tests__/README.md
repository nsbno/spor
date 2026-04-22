# Testing the Codemod

## Quick Test

To test the codemod on the example file:

```bash
# From the spor-codemods directory
pnpm exec jscodeshift -t transforms/color-tokens.js __tests__/example.tsx --dry --print
```

## Expected Transformations

The example file should transform:

- `bg.secondary` → `bg.subtle`
- `bg.tertiary` → `bg.brand`
- `alert.error.text` → `text.critical`
- `text.secondary` → `text.subtle`
- `surface.color.blue` → `surface.info`
- `accent.text` → `text.accent`
