Prerelease workflow
===================

Overview
--------

This repository includes a manual GitHub Actions workflow to create prereleases (alpha/beta) of packages using Changesets and pnpm. The workflow is at `.github/workflows/prerelease.yml` and is triggered via `workflow_dispatch` with two inputs: `channel` and `publish`.

How to trigger from GitHub
--------------------------

- Open the repository on GitHub, go to the **Actions** tab and select the **Prerelease** workflow.
- Click **Run workflow** and set the inputs:
  - `channel`: `alpha` or `beta` (dist-tag used when publishing)
  - `publish`: `true` to publish to npm, `false` to only run changesets and create PRs

Required secrets
----------------

- `NPM_TOKEN` — token with publish access for npm
- `SLACK_WEBHOOK_URL` — optional, used by the repo's Slack notify action

Run locally (build / publish with tag)
-------------------------------------

To run the local build step used by the workflow:

```bash
pnpm install --frozen-lockfile
pnpm build
```

To publish a prerelease locally (passes `--tag` through to the release script):

```bash
pnpm release -- --tag alpha
# or for beta
pnpm release -- --tag beta
```

Notes
-----

- The repo `package.json` defines `release` as `turbo run build && changeset publish`. Passing `-- --tag <tag>` forwards the extra args to the npm script which in turn is received by `changeset publish`.
- If you only want to test the workflow behavior without publishing, run the workflow with `publish` set to `false` from GitHub.

Troubleshooting
---------------

- If publishing fails, confirm `NPM_TOKEN` is set and has correct permissions.
- Ensure you pushed all changesets and that `fetch-depth: 0` is present in the checkout step (the prerelease workflow already includes this).
