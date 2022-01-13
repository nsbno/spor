# Spor React Component library

This package includes everything you need to build your React component library. It's built with TypeScript, but you can use it with JavaScript if you want.

## Installation

```bash
$ npm install @vygruppen/spor-react
```

## Usage

Import the components and functions you need as named imports:

```tsx
import { Button, Input } from "@vygruppen/spor-react";
```

Each component and function comes with extensive documentation that shows up once you use it. Just hover over the component to make it show up in your IDE. There will also be interactive documentation available online sometime in The Future (tm).

This package comes with one component of its own though - the `SporProvider`:

```tsx
import { SporProvider } from "@vygruppen/spor-react";
```

The `SporProvider` provides the rest of the Spor components with a theme and a language preference.

Wrap your entire app with this component. It's important to place it before you render any UI, like where you mount your React app (`src/index.tsx` in Create React App based apps, and `pages/_app.tsx` in Next.js based apps).

You have to specify the current language (and save/retrieve it somehow). Here's a basic example:

```tsx
import { SporProvider, Language } from "@vygruppen/spor-react";

const Root = () => {
  return (
    <SporProvider language={Language.NorwegianBokmal}>
      <App />
    </SporProvider>
  );
};
```

For more details about internationalization, please refer to the `spor-i18n-react` docs.

You can also override the theme. Please refer to the `spor-theme-react` docs.

## Development

Please refer to the root readme for development notes.

```

```
