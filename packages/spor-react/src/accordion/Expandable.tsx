import React, { forwardRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "./Accordion";
import { ExpandableProps } from "./types";

export const Expandable = forwardRef<HTMLDivElement, ExpandableProps>(
  (props, ref) => {
    const {
      variant = "ghost",
      gap,
      title,
      children,
      value,
      headingLevel,
      collapsible = true,
      leftIcon,
      ...rest
    } = props;
    return (
      <Accordion {...props} ref={ref} variant={variant} gap={gap} {...rest}>
        <AccordionItem value={value}>
          <AccordionItemTrigger headingLevel={headingLevel} leftIcon={leftIcon}>
            {title}
          </AccordionItemTrigger>
          <AccordionItemContent>{children}</AccordionItemContent>
        </AccordionItem>
      </Accordion>
    );
  },
);

export const ExpandableItem = forwardRef<HTMLDivElement, ExpandableProps>(
  (props, ref) => {
    const { title, children, value, headingLevel, leftIcon, ...rest } = props;
    return (
      <AccordionItem value={value} {...rest} ref={ref}>
        <AccordionItemTrigger headingLevel={headingLevel} leftIcon={leftIcon}>
          {title}
        </AccordionItemTrigger>
        <AccordionItemContent>{children}</AccordionItemContent>
      </AccordionItem>
    );
  },
);
