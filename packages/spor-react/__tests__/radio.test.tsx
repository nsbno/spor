import { RadioGroupRootProps } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio, RadioGroup, SporProvider } from "@vygruppen/spor-react";
import { Ref } from "react";
import { JSX } from "react/jsx-runtime";
import { describe, expect, test } from "vitest";

const value1 = "My first value";
const label1 = "World's best radio label";
const value2 = "Life changing value";
const label2 = "Radio label of the year";

const RadioGroupTest = (
  props: JSX.IntrinsicAttributes &
    Omit<RadioGroupRootProps, "colorPalette" | "size" | "variant"> & {
      ref?: Ref<HTMLDivElement>;
    },
) => (
  <SporProvider>
    <RadioGroup {...props}>
      <Radio value={value1}>{label1}</Radio>
      <Radio value={value2}>{label2}</Radio>
    </RadioGroup>
  </SporProvider>
);

describe("Uncontrolled RadioGroup", () => {
  test("handles state correctly", async () => {
    const user = userEvent.setup();

    render(<RadioGroupTest />);

    const input1 = screen.getByRole("radio", {
      name: label1,
    }) as HTMLInputElement;
    const input2 = screen.getByRole("radio", {
      name: label2,
    }) as HTMLInputElement;

    expect(input1.checked).toBe(false);
    expect(input2.checked).toBe(false);

    await user.click(screen.getByRole("radio", { name: label2 }));

    expect(input1.checked).toBe(false);
    expect(input2.checked).toBe(true);
  });

  test("handles defaultValue correctly", async () => {
    const user = userEvent.setup();
    render(<RadioGroupTest defaultValue={value1} />);

    const input1 = screen.getByRole("radio", {
      name: label1,
    }) as HTMLInputElement;
    const input2 = screen.getByRole("radio", {
      name: label2,
    }) as HTMLInputElement;

    expect(input1.checked).toBe(true);
    expect(input2.checked).toBe(false);

    await user.click(screen.getByRole("radio", { name: label2 }));

    expect(input1.checked).toBe(false);
    expect(input2.checked).toBe(true);
  });
});
