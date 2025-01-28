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
      leftIcon,
      ...rest
    } = props;
    return (
      <Accordion {...props} ref={ref} variant={variant} gap={gap} {...rest}>
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

export const ExpandableItem = (props: ExpandableProps) => {
  const { title, children, value, headingLevel, leftIcon, ...rest } = props;
  warnAboutMismatchingIcon({ icon: leftIcon });
  return (
    <AccordionItem value={value} {...rest}>
      <AccordionItemTrigger headingLevel={headingLevel} leftIcon={leftIcon}>
        {title}
      </AccordionItemTrigger>
      <AccordionItemContent>{children}</AccordionItemContent>
    </AccordionItem>
  );
};
