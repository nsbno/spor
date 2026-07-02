import type { Meta, StoryObj } from "@storybook/react";
import { Input, SearchInput, Textarea } from "@vygruppen/spor-react";
import { useState } from "react";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", minWidth: "22rem" }}>
      <Input label="Name" helperText="Enter your full name" />
      <Input
        label="Email"
        variant="floating"
        type="email"
        helperText="Used for booking updates"
      />
      <Input label="Disabled field" disabled value="Unavailable" />
    </div>
  ),
};

export const Textareas: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", minWidth: "22rem" }}>
      <Textarea label="Message" helperText="Share additional travel details" />
      <Textarea
        label="Accessibility needs"
        variant="floating"
        helperText="Optional"
        defaultValue="Wheelchair assistance at Oslo S."
      />
    </div>
  ),
};

export const Search: Story = {
  render: () => {
    const SearchExample = () => {
      const [value, setValue] = useState("Oslo");

      return (
        <div style={{ minWidth: "22rem" }}>
          <SearchInput
            label="Search departures"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onReset={() => setValue("")}
          />
        </div>
      );
    };

    return <SearchExample />;
  },
};
