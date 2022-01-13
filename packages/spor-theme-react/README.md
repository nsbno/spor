# Theme (React)

The default theme package for the Spor design system.

## Installation

```bash
$ npm install @vygruppen/spor-theme-react
```

## Usage

```tsx
import { theme } from "@vygruppen/spor-theme-react";
```

> **Note: you'll most likely not use this directly.**
> This theme is provided to you automatically with the `spor-react` package.

If you want to extend the default theme for some reason, you can do that like this:

```tsx
import { theme as defaultTheme } from "@vygruppen/spor-theme-react";
import { extendTheme } from "@vygruppen/spor-react";

const customTheme = extendTheme(
  {
    // your own modifications,
  },
  defaultTheme // Pass the base theme in as the last argument
);
```

## Development

Please refer to the root readme for development notes.
