# Spor

This is the monorepo containing Vy's design system, **Spor**, and its supporting applications.

## What's inside?

This repo includes the following apps:

- `docs`: a [Remix](https://remix.run) app documenting and demoing the design system. Available @ [spor.cloud.vy.no](https://spor.cloud.vy.no).
- `studio`: a [Sanity](https://sanity.io) Studio app for creating and editing documentation content. Available @ [spor.cloud.vy.no/studio](https://spor.cloud.vy.no/studio).

This repo also includes a bunch of packages. The ones you need to know about are:

- `@vygruppen/spor-react` - The React component library
- `@vygruppen/spor-design-tokens` - Design tokens for React, React Native and Elm
- `@vygruppen/spor-icon` - All SVG icons

There are others as well, but most of them are meant for internal consumption.

## Documentation and demos

Feel free to visit our documentation website on [spor.cloud.vy.no](https://spor.cloud.vy.no). You'll find live versions of all components, including extensive documentation. And the website is built by dogfooding the React component library!

If you want, you can also test it out in a [CodeSandbox](https://codesandbox.io/s/demo-spor-b137ig).

## Usage (React)

To get started, you'll need to install the required packages:

```bash
$ npm install @vygruppen/spor-react
# or
$ yarn add @vygruppen/spor-react
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
  </SporProvider>
);
```

Now, you can start importing components across your app. For instance, to use the Button component:

```tsx
import { Button, EditOutline24Icon } from "@vygruppen/spor-react";

export const App = () => {
  return (
    <Button variant="primary" leftIcon={<EditOutline24Icon />}>
      Edit me
    </Button>
  );
};
```

You'll find lots of components, and extensive documentation on the [documentation site](https://spor.cloud.vy.no/komponenter).

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

## Add new package

To add a new package, run the following command, and follow the wizard:

```
npm run add-package
```

Then, add a dependency in the component library.

For instance, the dependency for the package `message-box` with the type react should be added to `spor-react/package.json`

````diff
    "dependencies": {
+      "@vygruppen/spor-message-box-react": "*"
    }
At last, export the package in the index file. e.g `spor-react/src/index.tsx`.

```tsx
export * from "@vygruppen/spor-message-box-react";
````
