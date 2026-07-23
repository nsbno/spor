import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Input, SearchInput, Textarea } from "@vygruppen/spor-react";
import { useState } from "react";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Flex direction="column" gap={4}>
      <Input label="Name" helperText="Enter your full name" />
      <Input
        label="Email"
        variant="floating"
        type="email"
        helperText="Used for booking updates"
      />
      <Input label="Disabled field" disabled value="Unavailable" />
    </Flex>
  ),
};

export const Textareas: Story = {
  render: () => (
    <Flex direction="column" gap={4}>
      <Textarea label="Message" helperText="Share additional travel details" />
      <Textarea
        label="Accessibility needs"
        variant="floating"
        helperText="Optional"
        defaultValue="Wheelchair assistance at Oslo S."
      />
    </Flex>
  ),
};

export const Search: Story = {
  render: () => {
    const SearchExample = () => {
      const [value, setValue] = useState("Oslo");

      return (
        <Box>
          <SearchInput
            label="Search departures"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onReset={() => setValue("")}
          />
        </Box>
      );
    };

    return <SearchExample />;
  },
};
