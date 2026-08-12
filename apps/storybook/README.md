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
