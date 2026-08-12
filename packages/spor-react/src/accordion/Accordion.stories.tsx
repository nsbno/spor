import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  Box,
  Expandable,
  ExpandableItem,
} from "@vygruppen/spor-react";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Grouped: Story = {
  render: () => (
    <Box>
      <Accordion collapsible defaultValue={["refunds"]}>
        <ExpandableItem value="refunds" title="Can I change my ticket?">
          Yes, ticket changes depend on fare rules and route availability.
        </ExpandableItem>
        <ExpandableItem value="pets" title="Can I bring my pet?">
          Small pets are usually allowed if they do not disturb other
          passengers.
        </ExpandableItem>
        <ExpandableItem value="bike" title="Can I bring a bicycle?">
          Bicycle availability varies between departures and must be reserved
          when required.
        </ExpandableItem>
      </Accordion>
    </Box>
  ),
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
