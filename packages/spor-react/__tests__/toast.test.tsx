import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, createToast, SporProvider } from "@vygruppen/spor-react";
import { describe, expect, test, vi } from "vitest";

// SporProvider renders the Toaster internally, so toasts appear within it

describe("Toast", () => {
  test("shows toast triggered by a button click", async () => {
    const user = userEvent.setup();

    render(
      <SporProvider>
        <Button
          variant="secondary"
          onClick={() =>
            createToast({
              variant: "success",
              text: "Button triggered toast",
            })
          }
        >
          Show toast
        </Button>
      </SporProvider>,
    );

    expect(
      screen.queryByText("Button triggered toast"),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Show toast" }));

    await waitFor(() => {
      expect(screen.getByText("Button triggered toast")).toBeInTheDocument();
    });
  });

  test("close toast by a close trigger button click", async () => {
    const user = userEvent.setup();

    render(
      <SporProvider>
        <Button
          variant="secondary"
          onClick={() =>
            createToast({
              variant: "success",
              text: "Button triggered toast 2",
              duration: 10_000,
              closable: true,
            })
          }
        >
          Show toast
        </Button>
      </SporProvider>,
    );

    expect(
      screen.queryByText("Button triggered toast 2"),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Show toast" }));

    await waitFor(() => {
      expect(screen.getByText("Button triggered toast 2")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Lukk" }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(
      screen.queryByText("Button triggered toast 2"),
    ).not.toBeInTheDocument();
  });

  test("click on custom action button in toast", async () => {
    const user = userEvent.setup();
    const onButtonClick = vi.fn();

    render(
      <SporProvider>
        <Button
          variant="secondary"
          onClick={() =>
            createToast({
              variant: "success",
              text: "Button triggered toast 3",
              action: {
                label: "Undo",
                onClick: onButtonClick,
              },
            })
          }
        >
          Show toast
        </Button>
      </SporProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Show toast" }));
    await waitFor(() => {
      expect(screen.getByText("Button triggered toast 3")).toBeInTheDocument();
    });
    await user.click(screen.getByRole("button", { name: "Undo" }));
    expect(onButtonClick).toHaveBeenCalled();
  });
});
