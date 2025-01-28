"use client";

import React, { forwardRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "./Accordion";
import { ExpandableItemProps, ExpandableProps } from "./types";
import { warnAboutMismatchingIcon } from "./helpers";
import { Box } from "@/layout";

/**
 * A standalone expandable component.
 *
 * This one is great to use if you have a single expandable component by itself.
 * If you want several expandables in a row, use the `Accordion` and `ExpandableItem` components instead.
 *
 * ```tsx
 * <Expandable title="Click for more" variant="core">
 *   <Text>MORE! 🎉</Text>
 * </Expandable>
 * ```
 */

export const Expandable = forwardRef<HTMLDivElement, ExpandableProps>(
  (props, ref) => {
    const {
      variant = "core",
      title,
      children,
      value,
      headingLevel,
      startElement,
      items,
      ...rest
    } = props;
    return (
      <Accordion
        {...props}
        ref={ref}
        variant={variant}
        defaultValue={value}
        collapsible
        {...rest}
      >
        <ExpandableItem
          title={title}
          headingLevel={headingLevel}
          startElement={startElement}
          value="single-expandable"
        >
          {children}
        </ExpandableItem>
      </Accordion>
    );
  },
);

/**
 * An item in a set of Expandables. Must be wrapped in an `<Accordion>` component.
 *
 * ```tsx
 * <Accordion variant="ghost">
 *  <ExpandableItem value="a" title="Is Spor easy?" headingLevel="h3">
 *    Yes
 *  </ExpandableItem>
 *  <ExpandableItem value="b" title="Do you love it?" headingLevel="h3">
 *    🥰
 *  </ExpandableItem>
 * </Accordion>
 * ```
 *
 *
 * If you need even more control, you can put together your own expandable with the `Accordion`, `AccordionItem`, `AccordionItemTrigger`, and `AccordionItemContent` components.
 */

export const ExpandableItem = (props: ExpandableItemProps) => {
  const {
    title,
    children,
    value,
    headingLevel = "h3",
    startElement,
    ...rest
  } = props;
  warnAboutMismatchingIcon({ icon: startElement });
  return (
    <AccordionItem value={value} {...rest}>
      <Box as={headingLevel}>
        <AccordionItemTrigger startElement={startElement}>
          {title}
        </AccordionItemTrigger>
      </Box>
      <AccordionItemContent>{children}</AccordionItemContent>
    </AccordionItem>
  );
};
