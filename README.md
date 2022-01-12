# Spor

This is the monorepo containing Vy's design system, Spor.

> ## Still under active pre-development
>
> The code in this repo is still being bootstrapped, and is not published or deployed anywhere yet. We hope to get the first version of our React component library published as a public beta sometime in January, and the docs site in February.
> If you have any questions, please get in touch at #design-system on Slack (for Vy employees and contractors only).

## What's inside?

This repo includes the following packages/apps:

- `docs`: a [Next.js](https://nextjs.org) app documenting the design system
- `spor-react`: a React component library
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Usage

The code isn't yet in a usable state. Once it is, usage information will be found here, and in the `packages/spor-react` README.

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
