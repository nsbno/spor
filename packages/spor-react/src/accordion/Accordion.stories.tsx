import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  Box,
  Expandable,
  ExpandableItem,
} from "@vygruppen/spor-react";
import { expect, fn } from "storybook/test";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = (
  <>
    <ExpandableItem value="refunds" title="Can I change my ticket?">
      Yes, ticket changes depend on fare rules and route availability.
    </ExpandableItem>
    <ExpandableItem value="pets" title="Can I bring my pet?">
      Small pets are usually allowed if they do not disturb other passengers.
    </ExpandableItem>
    <ExpandableItem value="bike" title="Can I bring a bicycle?">
      Bicycle availability varies between departures and must be reserved when
      required.
    </ExpandableItem>
  </>
);

export const Grouped: Story = {
  args: {
    onValueChange: fn(),
  },
  render: (arguments_) => (
    <Box>
      <Accordion collapsible defaultValue={["refunds"]} {...arguments_}>
        {items}
      </Accordion>
    </Box>
  ),
  play: async ({ args, canvas, step, userEvent }) => {
    const refunds = canvas.getByRole("button", {
      name: "Can I change my ticket?",
    });
    const pets = canvas.getByRole("button", { name: "Can I bring my pet?" });

    await step("defaultValue opens the first item", async () => {
      await expect(refunds).toHaveAttribute("aria-expanded", "true");
      await expect(pets).toHaveAttribute("aria-expanded", "false");
    });

    await step("opening another item closes the first", async () => {
      await userEvent.click(pets);
      await expect(refunds).toHaveAttribute("aria-expanded", "false");
      await expect(pets).toHaveAttribute("aria-expanded", "true");
      await expect(args.onValueChange).toHaveBeenCalledWith(
        expect.objectContaining({ value: ["pets"] }),
      );
    });
  },
};

export const Controlled: Story = {
  tags: ["!dev"],
  render: (arguments_) => (
    <Accordion collapsible value={["pets"]} {...arguments_}>
      {items}
    </Accordion>
  ),
  play: async ({ canvas, userEvent }) => {
    const refunds = canvas.getByRole("button", {
      name: "Can I change my ticket?",
    });
    const pets = canvas.getByRole("button", { name: "Can I bring my pet?" });

    await expect(pets).toHaveAttribute("aria-expanded", "true");
    await expect(refunds).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(refunds);
    await expect(pets).toHaveAttribute("aria-expanded", "true");
    await expect(refunds).toHaveAttribute("aria-expanded", "false");
  },
};

export const SingleExpandable: Story = {
  render: () => (
    <Box>
      <Expandable
        title="Read more about onboard services"
        variant="floating"
        defaultValue={["single-expandable"]}
      >
        Wi‑Fi, power outlets, and accessible seating may vary by train set and
        route.
      </Expandable>
    </Box>
  ),
};
