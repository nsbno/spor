import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "@vygruppen/spor-react";
import { expect } from "storybook/test";

const meta = {
  title: "Components/Radio",
  component: RadioGroup,
  render: (arguments_) => (
    <RadioGroup {...arguments_}>
      <Radio value="economy">Economy</Radio>
      <Radio value="business">Business</Radio>
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const economy = canvas.getByRole("radio", { name: "Economy" });
    const business = canvas.getByRole("radio", { name: "Business" });

    await expect(economy).not.toBeChecked();
    await expect(business).not.toBeChecked();

    await userEvent.click(business);
    await expect(economy).not.toBeChecked();
    await expect(business).toBeChecked();
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "economy",
  },
  play: async ({ canvas, userEvent }) => {
    const economy = canvas.getByRole("radio", { name: "Economy" });
    const business = canvas.getByRole("radio", { name: "Business" });

    await expect(economy).toBeChecked();
    await expect(business).not.toBeChecked();

    await userEvent.click(business);
    await expect(economy).not.toBeChecked();
    await expect(business).toBeChecked();
  },
};
