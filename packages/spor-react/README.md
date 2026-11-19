# Spor React Component library

This package includes everything you need to build your React component library. It's built with TypeScript, but you can use it with JavaScript if you want.

## Installation

```bash
$ npm install @vygruppen/spor-react
$ yarn add @vygruppen/spor-react
$ pnpm install @vygruppen/spor-react
```

`react`, `react-dom`, `@chakra-ui/react` and `@emotion/react` are peer dependencies. Your app must have exactly one copy of each, so install them yourself if your package manager doesn't:

```bash
$ pnpm add @chakra-ui/react @emotion/react react react-dom
```

### Theme types

On install, a `postinstall` script runs `chakra typegen` on the Spor theme. It writes Spor's tokens, recipes and variants into the generated types of your `@chakra-ui/react`, so props like `variant="primary"` and Spor color tokens type-check and autocomplete. This is why `@chakra-ui/cli` is a dependency and not a devDependency.

pnpm (v10+) and Bun don't run dependency install scripts by default. Allow it with `pnpm approve-builds`, or add `@vygruppen/spor-react` to `trustedDependencies` in Bun.

If you extend the theme, add `@chakra-ui/cli` as a devDependency and run `chakra typegen` on your own system after install. Reinstalling spor-react overwrites the types with Spor's.

## Usage

Import the components and functions you need as named imports:

```tsx
import { Button, Input } from "@vygruppen/spor-react";
```

Each component and function comes with extensive documentation that shows up once you use it. Just hover over the component to make it show up in your IDE. Documentation is also available on [the documentation website](https://spor.vy.no).

## Development

Please refer to the root readme for development notes.
