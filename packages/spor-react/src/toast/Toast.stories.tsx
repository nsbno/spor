import type { Meta, StoryObj } from "@storybook/react";
import { Button, createToast, HStack } from "@vygruppen/spor-react";
import { expect, fn, screen, waitFor, within } from "storybook/test";

// SporProvider renders the Toaster, so these stories only need a trigger.
const meta = {
  title: "Components/Toast",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

// Toasts render in a portal outside the story canvas.
const findToast = async (text: string) => {
  const description = await screen.findByText(text);
  return description.closest<HTMLElement>('[role="alert"]')!;
};

export const Default: Story = {
  render: () => (
    <Button
      variant="secondary"
      onClick={() =>
        createToast({ variant: "success", text: "Your ticket is booked" })
      }
    >
      Show toast
    </Button>
  ),
  play: async ({ canvas, userEvent }) => {
    await expect(screen.queryByText("Your ticket is booked")).toBeNull();
    await userEvent.click(canvas.getByRole("button", { name: "Show toast" }));
    await expect(await findToast("Your ticket is booked")).toBeInTheDocument();
  },
};

export const Closable: Story = {
  render: () => (
    <Button
      variant="secondary"
      onClick={() =>
        createToast({
          variant: "success",
          text: "Your seat is reserved",
          duration: 10_000,
          closable: true,
        })
      }
    >
      Show toast
    </Button>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Show toast" }));
    const toast = await findToast("Your seat is reserved");

    await userEvent.click(within(toast).getByRole("button", { name: "Lukk" }));
    await waitFor(
      () => expect(screen.queryByText("Your seat is reserved")).toBeNull(),
      { timeout: 3000 },
    );
  },
};

const onUndo = fn();

export const WithAction: Story = {
  render: () => (
    <Button
      variant="secondary"
      onClick={() =>
        createToast({
          variant: "success",
          text: "Your ticket was cancelled",
          action: { label: "Undo", onClick: onUndo },
        })
      }
    >
      Show toast
    </Button>
  ),
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Show toast" }));
    const toast = await findToast("Your ticket was cancelled");

    await userEvent.click(within(toast).getByRole("button", { name: "Undo" }));
    await expect(onUndo).toHaveBeenCalled();
  },
};

const variants = ["success", "info", "critical"] as const;

export const Variants: Story = {
  render: () => (
    <HStack>
      {variants.map((variant) => (
        <Button
          key={variant}
          variant="secondary"
          onClick={() => createToast({ variant, text: `A ${variant} toast` })}
        >
          {variant}
        </Button>
      ))}
    </HStack>
  ),
  // "critical" is a Spor-only toast type. @zag-js/toast before Chakra 3.38 crashed on it.
  play: async ({ canvas, userEvent }) => {
    for (const variant of variants) {
      await userEvent.click(canvas.getByRole("button", { name: variant }));
      await expect(await findToast(`A ${variant} toast`)).toHaveAttribute(
        "data-color",
        variant,
      );
    }
  },
};
