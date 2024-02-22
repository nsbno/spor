import {
  Accordion as ChakraAccordion,
  AccordionProps as ChakraAccordionProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";
import { Stack, StackProps } from "../layout";
import { AccordionProvider } from "./AccordionContext";
export {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
export type {
  AccordionButtonProps,
  AccordionItemProps,
  AccordionPanelProps,
} from "@chakra-ui/react";

export type AccordionProps = Omit<ChakraAccordionProps, "variant" | "size"> & {
  /**
   * The display variant of the accordion items.
   *
   * - `ghost` renders a pretty unstyled expandable list without any borders
   * - `base` renders an outlined version
   * - `floating` renders a version with a drop shadow
   */
  variant?: "ghost" | "base" | "floating";
  size?: "sm" | "md" | "lg";
  /** The margin between accordion items */
  spacing?: StackProps["spacing"];
};
/*
 * Wraps a set of ExpandableItem or AccordionItem components.
 *
 * ```tsx
 * <Accordion variant="ghost" size="md">
 *   <ExpandableItem title="Is Spor easy?" headingLevel="h3">
 *     Yes
 *   </ExpandableItem>
 *   <ExpandableItem title="Is Spor lovable?" headingLevel="h3">
 *     🥰
 *   </ExpandableItem>
 * </Accordion>
 * ```
 *
 * If you only have one expandable item, you can use the `<Expandable />` component instead.
 */
export const Accordion = forwardRef<AccordionProps, "div">(
  ({ children, spacing = 2, ...props }, ref) => {
    const defaultIndex =
      typeof props.defaultIndex === "number" && props.allowMultiple
        ? [props.defaultIndex]
        : props.defaultIndex;
    return (
      <AccordionProvider size={props.size}>
        <ChakraAccordion
          {...props}
          ref={ref}
          defaultIndex={defaultIndex as number[] | undefined}
        >
          <Stack spacing={spacing}>{children}</Stack>
        </ChakraAccordion>
      </AccordionProvider>
    );
  },
);
