# Vy Spor Theme package

The default theme package for the Spor design system.

## Usage

> **Note: you'll most likely not use this directly.**
> This theme is provided to you automatically with the `spor-react` package.

Install with `npm install @vygruppen/spor-theme-react`, and use it in your code like so:

```tsx
import { theme as defaultTheme } from "@vygruppen/spor-theme-react";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    // your own modifications,
  },
  defaultTheme // Pass the base theme in as the last argument
);
```
