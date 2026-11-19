# AGENTS.md

Spor is Vy's open-source design system: published packages in `packages/`, plus `apps/` with the Sanity CMS and the React Router site at https://design.vy.no.

## Tooling

- Use **pnpm** for everything, including running Node: `pnpm <script>`, `pnpm exec <bin>`, `pnpm dlx <pkg>`. Node.js is the only runtime outside the browser.

## Dependencies

- Versions live in the `catalog` in `pnpm-workspace.yaml`; reference them as `"catalog:"`. Pin exact versions.
- If an install fails on `minimumReleaseAge`, `strictDepBuilds` or `trustPolicy`, stop and ask the user. `pnpm-workspace.yaml` explains each.

## Workflow

- After code changes (not prose), run `pnpm lint` and `pnpm typecheck`, and fix.
- Changes under `packages/` need a changeset. `pnpm changeset` is interactive, so write `.changeset/<name>.md` by hand, then check with `pnpm changeset status --since main`:

  ```md
  ---
  "@vygruppen/spor-react": patch
  ---

  Changelog entry.
  ```

## spor-react

Built on Chakra UI v3. After theme changes (`src/theme/`), run `pnpm --filter @vygruppen/spor-react typegen`.
