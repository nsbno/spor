# Sanity Studio

This is the Sanity Studio for the Spor docs website.

## Setup

To get started, please make a copy of the .env.example file, and name it .env.development:

```sh
$ cp .env.example .env.development
```

Next, you can install all dependencies by running npm install and start a local development server with npm run dev. The Sanity studio will open on localhost:3333.

To use the studio, you need to request access in our Slack channel - #spor.

If you're an external contributor, you want to create your own Sanity account and get a project ID. You can pass that in via the sanity.json file.

## Deploy

To deploy changes to this project, you need to be logged in to the Sanity CLI.

If you haven't already, install the Sanity CLI tool globally:

```sh
$ npm install -g @sanity/cli
```

Then, log in to your Sanity account:

```sh
$ sanity login
```

Then, run the deploy command:

```sh
$ sanity deploy
```

This will trigger a build, followed by a deploy to the Sanity project. You can visit your newly deployed site at spor.sanity.studio (or spor.cloud.vy.no/studio).
