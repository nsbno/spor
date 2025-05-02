"use client";

import React, { forwardRef } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "./Accordion";
import { warnAboutMismatchingIcon } from "./helpers";
import { ExpandableItemProps, ExpandableProps } from "./types";

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
    const { title, children, headingLevel, startElement, ...rest } = props;
    return (
      <Accordion {...props} ref={ref} {...rest}>
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
 *
 * @see https://spor.vy.no/components/accordion
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
      <AccordionItemTrigger
        startElement={startElement}
        headingLevel={headingLevel}
      >
        {title}
      </AccordionItemTrigger>

      <AccordionItemContent>{children}</AccordionItemContent>
    </AccordionItem>
  );
};
