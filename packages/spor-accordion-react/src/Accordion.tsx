import {
  Accordion as ChakraAccordion,
  AccordionProps as ChakraAccordionProps,
} from "@chakra-ui/react";
import React from "react";
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
   * - `list` renders a pretty unstyled expandable list without any borders
   * - `outline` renders an outlined version
   * - `card` renders a version with a drop shadow
   */
  variant?: "list" | "outline" | "card";
  size?: "sm" | "md" | "lg";
};
/**
 * Wraps a set of ExpandableItem or AccordionItem components.
 *
 * ```tsx
 * <Accordion variant="list" size="md">
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
export const Accordion = (props: AccordionProps) => {
  const defaultIndex =
    typeof props.defaultIndex === "number" && props.allowMultiple
      ? [props.defaultIndex]
      : props.defaultIndex;
  return (
    <AccordionProvider size={props.size}>
      <ChakraAccordion
        {...props}
        defaultIndex={defaultIndex as number[] | undefined}
      />
    </AccordionProvider>
  );
};
