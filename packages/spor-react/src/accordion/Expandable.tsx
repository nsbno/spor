import React, { forwardRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
} from "./Accordion";
import { ExpandableProps } from "./types";
import { warnAboutMismatchingIcon } from "./helpers";

export const Expandable = forwardRef<HTMLDivElement, ExpandableProps>(
  (props, ref) => {
    const {
      variant = "core",
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
      <Accordion
        {...props}
        ref={ref}
        variant={variant}
        gap={gap}
        {...rest}
        collapsible={collapsible}
      >
        <ExpandableItem
          title={title}
          headingLevel={headingLevel}
          value={value}
          leftIcon={leftIcon}
        >
          {children}
        </ExpandableItem>
      </Accordion>
    );
  },
);

export const ExpandableItem = forwardRef<HTMLDivElement, ExpandableProps>(
  (props, ref) => {
    const { title, children, value, headingLevel, leftIcon, ...rest } = props;
    warnAboutMismatchingIcon({ icon: leftIcon });
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
