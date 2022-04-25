import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Accordion, AccordionProps } from "./Accordion";

type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";
type ExpandableProps = AccordionProps & {
  /** The hidden content */
  children: React.ReactNode;
  /** The title that's shown inside the toggle button */
  title: React.ReactNode;
  /** The semantic heading level of the toggle button */
  headingLevel?: HeadingLevel;
};
/**
 * A standalone expandable component.
 *
 * This one is great to use if you have a single expandable component by itself.
 * If you want several expandables in a row, use the `Accordion` and `ExpandableItem` components instead.
 *
 * ```tsx
 * <Expandable title="Click for more" variant="card" size="lg">
 *   <Text>MORE! 🎉</Text>
 * </Expandable>
 * ```
 */
export const Expandable = ({
  children,
  headingLevel,
  title,
  ...rest
}: ExpandableProps) => {
  return (
    <>
      <Accordion {...rest}>
        <ExpandableItem headingLevel={headingLevel} title={title}>
          {children}
        </ExpandableItem>
      </Accordion>
    </>
  );
};

export type ExpandableItemProps = AccordionItemProps & {
  children: React.ReactNode;
  title: React.ReactNode;
  headingLevel?: HeadingLevel;
};
/**
 * An item in a set of Expandables. Must be wrapped in an `<Accordion>` component.
 *
 * ```tsx
 * <Accordion variant="list" size="md">
 *  <ExpandableItem title="Is Spor easy?" headingLevel="h3">
 *    Yes
 *  </ExpandableItem>
 *  <ExpandableItem title="Do you love it?" headingLevel="h3">
 *    🥰
 *  </ExpandableItem>
 * </Accordion>
 * ```
 *
 * If you need even more control, you can put together your own expandable with the `Accordion`, `AccordionItem`, `AccordionButton`, `AccordionIcon` and `AccordionPanel` components.
 */
export const ExpandableItem = ({
  children,
  title,
  headingLevel = "h3",
  ...rest
}: ExpandableItemProps) => {
  return (
    <AccordionItem {...rest}>
      <Box as={headingLevel}>
        <AccordionButton>
          {title}
          <AccordionIcon />
        </AccordionButton>
      </Box>
      <AccordionPanel>{children}</AccordionPanel>
    </AccordionItem>
  );
};
