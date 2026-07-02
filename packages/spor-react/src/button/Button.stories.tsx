import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@vygruppen/spor-react";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Book trip",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const variants = [
  "primary",
  "secondary",
  "tertiary",
  "ghost",
  "floating",
] as const;
const sizes = ["lg", "md", "sm", "xs"] as const;

const icon = (symbol: string) => <span aria-hidden="true">{symbol}</span>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {sizes.map((size) => (
        <div
          key={size}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          {variants.map((variant) => (
            <Button key={`${size}-${variant}`} size={size} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Button leftIcon={icon("←")}>Left icon</Button>
      <Button rightIcon={icon("→")}>Right icon</Button>
      <Button leftIcon={icon("★")} rightIcon={icon("→")} variant="secondary">
        Both icons
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      <Button loading loadingText="Loading">
        Loading
      </Button>
      <Button disabled variant="secondary">
        Disabled
      </Button>
      <Button loading variant="ghost" leftIcon={icon("⟳")}>
        Refreshing
      </Button>
    </div>
  ),
};
