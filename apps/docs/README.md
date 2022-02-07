# The Spor Documentation website

This package contains the code for the Vy Spor documentation website.
It's based on [Remix](https://remix.run/docs), [TypeScript](https://typescriptlang.org) and [Chakra UI](https://chakra-ui.com/), as well as the Spor design system itself.

## Development

Before you start development, you need to copy the `.env.example` file to `.env`:

```sh
cd apps/docs # If you're not already here
cp .env.example .env
```

Enter the file and make your own SESSION_SECRET variable. It's not strictly neccessary, but should be done either way.

From your terminal:

```sh
npm run dev
```

This starts your app in development mode at `localhost:3000`, rebuilding assets on file changes.
