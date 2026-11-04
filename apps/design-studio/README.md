# Sanity Studio

This is the Sanity Studio for the Designmanual website. It runs on **Sanity Studio v6**.

The studio has two workspaces, each with its own dataset in the Sanity project:

- **Production** (`/production`) – the live content, previewed against `stage.design.vy.no`.
- **Test** (`/test`) – a copy of production for trying things out, previewed against `localhost:3008`. It is refreshed from production every Monday by the "Copy production to test" workflow.

## Prerequisites

- **Node.js 22** is required (Sanity Studio v6 dropped Node 20, which is end-of-life). pnpm installs the exact version pinned in the root `package.json` (`devEngines.runtime`) and uses it for `pnpm` scripts.

## Setup

To get started, install all dependencies by running `pnpm install` from the repo root and start a local development server with `pnpm dev` in this directory. The Sanity studio will open on `localhost:4444`.

To use the studio, you need to request access in our Slack channel - #spor.

If you're an external contributor, you want to create your own Sanity account and get a project ID. You can set it in `sanity.cli.ts` and `sanity.config.ts`.

## Deploy

The studio is deployed to [vydesignmanual.sanity.studio](https://vydesignmanual.sanity.studio) by the "Deploy Design Studio" GitHub workflow on every push to `main`. You can also trigger it manually from the Actions tab.

To deploy from your own machine, you need to be logged in to the Sanity CLI.

If you haven't already, install the Sanity CLI tool globally:

```sh
$ pnpm install -g @sanity/cli
```

Then, log in to your Sanity account:

```sh
$ sanity login
```

Then, run the deploy command:

```sh
$ pnpm run deploy
```

This will trigger a build, followed by a deploy to the Sanity project.
