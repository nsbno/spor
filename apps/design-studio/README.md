# Sanity Studio

This is the Sanity Studio for the Designmanual website.

## Setup

To get started, install all dependencies by running pnpm install and start a local development server with pnpm dev. The Sanity studio will open on localhost:3333.

To use the studio, you need to request access in our Slack channel - #spor.

If you're an external contributor, you want to create your own Sanity account and get a project ID. You can pass that in via the sanity.json file.

## Deploy

To deploy changes to this project, you need to be logged in to the Sanity CLI.

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
$ sanity deploy
```

This will trigger a build, followed by a deploy to the Sanity project. You can visit your newly deployed site at spor.sanity.studio (or spor.vy.no/studio).
