# Spor

This is the monorepo containing Vy's design system, Spor.

## What's inside?

This repo includes the following packages/apps:

- `docs`: a [Next.js](https://nextjs.org) app documenting the design system
- `spor-react`: a React component library
- `spor-react-native`: a React Native component library
- `spor-elm`: an Elm component library
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

## Setup

To develop locally, clone the repository and run `npm install` at the root level.

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```
