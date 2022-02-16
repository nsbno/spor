# Spor

This is the monorepo containing Vy's design system, Spor.

> ## This is beta software
>
> The code in this repo is still in its early stages, and is not quite production ready yet.
> We are, however, looking for feedback on the earliest versions of the `@vygruppen/spor-react` package, so please give it a try in your application.
>
> If you have any questions, please get in touch at #design-system on Slack (for Vy employees and contractors only).

## What's inside?

This repo includes the following packages/apps:

- `docs`: a [Remix](https://remix.run) app documenting the design system
- `spor-react`: a React component library
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Usage

Currently, the only package meant for direct consumption is `@vygruppen/spor-react`. To get started, please check out its [readme](https://github.com/nsbno/spor/tree/main/packages/spor-react)!

You can test it out in a CodeSandbox ([JavaScript](https://codesandbox.io/s/spor-react-template-4q3uwc?file=/src/index.js) or [TypeScript](https://codesandbox.io/s/spor-react-typescript-template-wej0dq)).

## Setup

To develop locally, clone the repository and run `npm install` at the root level.

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

### Add new package

To add a new package, run the following command, and follow the wizard:

```
npm run add-package
```
