import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@vygruppen/spor-react";

const meta = {
  title: "Components/Alert",
  component: Alert,
  args: {
    title: "Traffic update",
    children: "Track work may affect departures this afternoon.",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = [
  "info",
  "important",
  "alt",
  "error",
  "error-secondary",
  "success",
] as const;

export const Overview: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", minWidth: "28rem" }}>
      {variants.map((variant) => (
        <Alert key={variant} variant={variant} title={variant}>
          Example of the {variant} alert variant.
        </Alert>
      ))}
    </div>
  ),
};

export const Closable: Story = {
  args: {
    variant: "info",
    closable: true,
    title: "Dismissible message",
    children: "This alert can be closed by the user.",
  },
};
