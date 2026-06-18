import { ConditionalValue } from "@chakra-ui/react";
import { AccordionRootProps as ChakraAccordionProps } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  SporProvider,
} from "@vygruppen/spor-react";
import { Ref } from "react";
import { JSX } from "react/jsx-runtime";
import { describe, expect, test, vi } from "vitest";

const AccordionTest = (
  props: JSX.IntrinsicAttributes &
    ChakraAccordionProps & {
      variant?: ConditionalValue<
        "core" | "ghost" | "underlined" | "floating" | undefined
      >;
    } & {
      children?: React.ReactNode | undefined;
    } & {
      variant?: "ghost" | "core" | "floating" | "underlined";
      gap?: string | number;
      href?: string;
    } & {
      ref?: Ref<HTMLDivElement>;
    },
) => {
  return (
    <SporProvider>
      <Accordion
        collapsible
        width="100%"
        {...props}
        data-testid="accordion-root"
      >
        <AccordionItem value="accordion-item-1">
          <AccordionItemTrigger data-testid="accordion-item-1">
            Item 1 trigger
          </AccordionItemTrigger>
          <AccordionItemContent>Item 1 content</AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="accordion-item-2">
          <AccordionItemTrigger data-testid="accordion-item-2">
            Item 1 trigger
          </AccordionItemTrigger>
          <AccordionItemContent>Item 1 content</AccordionItemContent>
        </AccordionItem>
      </Accordion>
    </SporProvider>
  );
};

describe("Uncontrolled accordion", () => {
  test("handles expandable-state correctly", async () => {
    const user = userEvent.setup();

    render(<AccordionTest />);

    const item1 = screen.getByTestId("accordion-item-1") as HTMLInputElement;
    const item2 = screen.getByTestId("accordion-item-2") as HTMLInputElement;

    await user.click(item2);

    expect(item1.ariaExpanded).toBe("false");
    expect(item2.ariaExpanded).toBe("true");
  });
});

describe("Controlled accordion", () => {
  test("handles expandable-state correctly", async () => {
    const expandedItems = ["accordion-item-1"];
    render(<AccordionTest value={expandedItems} />);

    const item1 = screen.getByTestId("accordion-item-1") as HTMLInputElement;
    const item2 = screen.getByTestId("accordion-item-2") as HTMLInputElement;

    expect(item1.ariaExpanded).toBe("true");
    expect(item2.ariaExpanded).toBe("false");
  });
});

describe("Default open accordion", () => {
  test("handles expandable-state correctly", async () => {
    render(<AccordionTest defaultValue={["accordion-item-1"]} />);

    const item1 = screen.getByTestId("accordion-item-1") as HTMLInputElement;
    const item2 = screen.getByTestId("accordion-item-2") as HTMLInputElement;

    expect(item1.ariaExpanded).toBe("true");
    expect(item2.ariaExpanded).toBe("false");
  });
});

describe("OnValuechange accordion", () => {
  test("handles onValueChange correctly", async () => {
    const onValueChange = vi.fn();

    const user = userEvent.setup();
    render(<AccordionTest onValueChange={onValueChange} />);

    const item1 = screen.getByTestId("accordion-item-1") as HTMLInputElement;
    await user.click(item1);

    expect(onValueChange).toHaveBeenCalled();
  });
});
