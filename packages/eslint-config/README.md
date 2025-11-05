# @vygruppen/eslint-config

A shared ESLint configuration for Vygruppen projects, enforcing code quality standards and best practices across TypeScript, React, and JavaScript codebases.

## Features

- TypeScript support with recommended rules
- React and React Hooks best practices
- Accessibility checks with jsx-a11y
- Modern JavaScript standards
- Custom rule for semantic design tokens
- Automatic import sorting
- Prettier compatibility

## Installation

```bash
pnpm install --save-dev @vygruppen/eslint-config
```

## Usage

Create an `eslint.config.mjs` file in your project root:

```javascript
import vyConfig from "@vygruppen/eslint-config";

export default vyConfig;
```

Or extend it with custom rules:

```javascript
import vyConfig from "@vygruppen/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...vyConfig,
  {
    rules: {
      // Your custom rules
    },
  },
]);
```

Disble rules like this:

```javascript
import config from "@vygruppen/eslint-config";

export default [
  ...config,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
```

​​​​

## Included Plugins and Configurations

### Core ESLint

- **@eslint/js**: Provides JavaScript recommended rules
- **typescript-eslint**: TypeScript-specific linting rules

### React

- **eslint-plugin-react**: React best practices and common pitfalls
- **eslint-plugin-react-hooks**: Enforces Rules of Hooks
- **eslint-plugin-jsx-a11y**: Accessibility checks for JSX elements

### Code Quality

- **eslint-plugin-unicorn**: Additional quality rules (with some rules disabled for practicality)
- **eslint-plugin-simple-import-sort**: Automatically sorts imports and exports

### Formatting

- **eslint-config-prettier**: Disables ESLint rules that conflict with Prettier

## Custom Rules

### `spor/use-semantic-tokens`

Enforces the use of semantic color tokens in Chakra UI components to facilitate dark mode implementation and ensure design consistency.

**Why this rule exists:**

- Ensures consistent theming across the application
- Facilitates dark mode support
- Prevents hardcoded color values that don't respect the design system

**What it checks:**

- Color-related props on JSX elements (`bg`, `color`, `borderColor`, etc.)
- Style objects in `css`, `sx`, and `style` props
- Pseudo-style props (`_hover`, `_active`, etc.)
- Design recipe definitions (`defineRecipe`, `defineSlotRecipe`, `defineStyle`)

**Valid tokens:**

```jsx
// ✅ Good - semantic tokens
<Box bg="bg" color="text.secondary" />
<Button bg="core.surface.active" />

// ✅ Good - allowed special values
<Box bg="transparent" color="inherit" />
```

**Invalid tokens:**

```jsx
// ❌ Bad - hardcoded colors
<Box bg="blue.500" color="greenHaze" />
<Button bg="#ff0000" />
```

**Using the same color in light and dark mode:**

If you need a semantic token to have the same color in both light and dark mode, use `className="light"` or `className="dark"` to lock the color mode:

```jsx
// ✅ Good - same color in both modes using light mode token
<Box className="light" bg="bg" color="text.secondary" />

// ✅ Good - same color in both modes using dark mode token
<Icon className="dark" color="icon.primary" />
```

This ensures the semantic token resolves to the same color value regardless of the user's color mode preference, eliminating the need to hardcode color values.

**Using non-semantic tokens:**

In rare cases where you need to use non-semantic tokens, you can disable the rule:

```jsx
// eslint-disable-next-line spor/use-semantic-tokens
<Box bg="blue.500" color="greenHaze" />
```

### Tips for Effective Use

1. **Auto-fix on save**: Combine with ESLint auto-fix

   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     }
   }
   ```

2. **Visual error highlighting**: Install the [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) extension to see ESLint errors and warnings inline as you type, making it easier to catch issues immediately.

<img width="1234" height="700" alt="image" src="https://github.com/user-attachments/assets/3f9945a9-c35d-4110-a80c-1ac91e46731f" />

