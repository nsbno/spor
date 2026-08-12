import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, Flex } from "@vygruppen/spor-react";

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
    <Box display="grid" gap={4}>
      {sizes.map((size) => (
        <Flex key={size} alignItems="center" gap={2}>
          {variants.map((variant) => (
            <Button key={`${size}-${variant}`} size={size} variant={variant}>
              {variant}
            </Button>
          ))}
        </Flex>
      ))}
    </Box>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Flex gap={4}>
      <Button leftIcon={icon("←")}>Left icon</Button>
      <Button rightIcon={icon("→")}>Right icon</Button>
      <Button leftIcon={icon("★")} rightIcon={icon("→")} variant="secondary">
        Both icons
      </Button>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex gap={4}>
      <Button loading loadingText="Loading">
        Loading
      </Button>
      <Button disabled variant="secondary">
        Disabled
      </Button>
      <Button loading variant="ghost" leftIcon={icon("⟳")}>
        Refreshing
      </Button>
    </Flex>
  ),
};
