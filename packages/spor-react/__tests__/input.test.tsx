import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input, SporProvider } from "@vygruppen/spor-react";
import { describe, expect, test, vi } from "vitest";

describe("Input", () => {
  test("renders with a label and accepts text", async () => {
    const user = userEvent.setup();

    render(
      <SporProvider>
        <Input label="Email" />
      </SporProvider>,
    );

    const input = screen.getByRole("textbox", { name: "Email" });

    await user.type(input, "hello@example.com");

    expect(input).toHaveValue("hello@example.com");
  });

  test("shows the error state", () => {
    render(
      <SporProvider>
        <Input label="Email" invalid errorText="Enter a valid email address" />
      </SporProvider>,
    );

    const input = screen.getByRole("textbox", { name: "Email" });

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Enter a valid email address")).toBeVisible();
  });

  test("calls onChange when text is entered", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SporProvider>
        <Input label="Email" onChange={onChange} />
      </SporProvider>,
    );

    const input = screen.getByRole("textbox", { name: "Email" });
    await user.type(input, "hello@example.com");

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "hello@example.com" }),
      }),
    );
  });
});
