# Spor Storybook

This is the [Storybook](https://storybook.js.org/) instance for the Spor design system. It provides an interactive playground for browsing and testing the components in `@vygruppen/spor-react`.

Stories are co-located with the components in `packages/spor-react/src/` and picked up automatically by Storybook.

## Running locally

From the repo root:

```bash
pnpm --filter @vygruppen/spor-storybook storybook
```

Or from this directory:

```bash
pnpm storybook
```

Storybook starts on [http://localhost:6006](http://localhost:6006).

## Building

```bash
pnpm build-storybook
```

## Testing

Every story runs as a test in headless Chromium through [`@storybook/addon-vitest`](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon). A story without a `play` function checks that it renders without errors. A story with one also runs its interactions and assertions.

Install the browser once:

```bash
pnpm exec playwright install chromium
```

Then run the tests from this directory, or with `pnpm test` from the repo root:

```bash
pnpm test
```

Build the packages first (`pnpm build` in the repo root). Storybook reads `spor-react` from source, but not its workspace dependencies.

To test behaviour, add a `play` function. Import queries and assertions from `storybook/test`:

```tsx
import { expect } from "storybook/test";

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Save" }));
    await expect(canvas.getByText("Saved")).toBeInTheDocument();
  },
};
```

A story that only exists for a test can be hidden from the sidebar with `tags: ["!dev"]`. It still runs as a test.

## Creating new stories

Stories live next to their component in `packages/spor-react/src/`. Create a file named `<Component>.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "@vygruppen/spor-react";

const meta = {
  title: "Components/MyComponent",
  component: MyComponent,
} satisfies Meta<typeof MyComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // pass props here
  },
};
```

Storybook picks up any `*.stories.tsx` (or `.mdx`) file under `packages/spor-react/src/` automatically — no registration needed.
