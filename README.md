# Spor

This is the monorepo containing Vy's design system, **Spor**, and its supporting applications.

## What's inside?

This repo includes the following apps:

- `docs`: a [Remix](https://remix.run) app documenting and demoing the design system. Available @ [spor.vy.no](https://spor.vy.no).
- `studio`: a [Sanity](https://sanity.io) Studio app for creating and editing documentation content. Available @ [spor.vy.no/studio](https://spor.vy.no/studio).

This repo also includes a bunch of packages. The ones you need to know about are:

- `@vygruppen/spor-react` - The React component library
- `@vygruppen/spor-design-tokens` - Design tokens for React, React Native and Elm
- `@vygruppen/spor-icon` - All SVG icons
- `@vygruppen/spor-icon-react` - All SVG icons as React components
- `@vygruppen/spor-icon-react-native` - All SVG icons as React components
- `@vygruppen/spor-loader` - All Lottie loading animation data

## Documentation and demos

Feel free to visit our documentation website on [spor.vy.no](https://spor.vy.no). You'll find live versions of all components, including extensive documentation. And the website is built by dogfooding the React component library!

If you want, you can also test it out in a [CodeSandbox](https://codesandbox.io/s/demo-spor-b137ig).

## Usage (React)

To get started, you'll need to install the required packages:

```bash
$ npm install @vygruppen/spor-react
```

Next, wrap your entire application in the `SporProvider` component. You'll need to pass the current language as well:

```tsx
// In your src/index.tsx file, for instance
import { SporProvider, Language } from "@vygruppen/spor-react";
import { createRoot } from "react-dom";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <SporProvider language={Language.English}>
    <App />
  </SporProvider>,
);
```

Now, you can start importing components across your app. For instance, to use the Button component:

```tsx
import { Button } from "@vygruppen/spor-react";
import { EditOutline24Icon } from "@vygruppen/spor-icon-react";

export const App = () => {
  return (
    <Button variant="primary" leftIcon={<EditOutline24Icon />}>
      Edit me
    </Button>
  );
};
```

You'll find lots of components, and extensive documentation on the [documentation site](https://spor.vy.no/components).

## Usage (React Native)

The React Native version of Spor lives in the [app repo](https://github.com/nsbno/salgsapp-react-native/tree/master/app/spor). The APIs should be pretty much the same as in React, but there might be some differences. Look at the relevant documentation for more information.

## Setup

To develop locally, clone the repository and run `npm install` at the root level.

If you want to run the docs website locally, you'll need a few secrets. Follow the instructions in each app's readme to discover and set them locally.

Then run `npm run build` to build all artifacts for the first time. Finally, run `npm run dev` to start the development servers.

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

This will start all apps and packages in development mode. You can then visit the following URLs:

[localhost:3000](http://localhost:3000) - The local version of the docs website
[localhost:3333](http://localhost:3333) - The local version of the Sanity Studio

### Testing components 🎨

When creating or editing components in Spor, use `/playground` as a testing ground.

[localhost:3000/playground](http://localhost:3000/playground) - Happy testing!
