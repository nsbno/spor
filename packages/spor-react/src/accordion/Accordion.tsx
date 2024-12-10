"use client";
import {
  Box,
  Accordion as ChakraAccordion,
  AccordionRootProps as ChakraAccordionProps,
  HStack,
} from "@chakra-ui/react";
import { DropdownDownFill24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef } from "react";

export type AccordionProps = Omit<ChakraAccordionProps, "variant" | "size"> & {
  /**
   * The display variant of the accordion items.
   *
   * - `ghost` renders a pretty unstyled expandable list without any borders
   * - `base` renders an outlined version
   * - `floating` renders a version with a drop shadow
   */
  variant?: "ghost" | "base" | "floating";
};
/*
 * Wraps a set of AccordionItem or AccordionItem components.
 *
 * ```tsx
 * <AccordionRoot variant="ghost">
 *   <AccordionItem>
 *      <AccordionItemTrigger headingLevel="h3" title="Is Spor easy?" />
 *      <AccordionItemContent>Yes</AccordionItemContent>
 *   </AccordionItem>
 *   <AccordionItem>
 *      <AccordionItemTrigger headingLevel="h3" title="Is Spor lovable?" />
 *      <AccordionItemContent>Yes</AccordionItemContent>
 *   </AccordionItem>
 * </AccordionRoot>
 * ```
 *
 * If you only have one expandable item, you can use the `<Expandable />` component instead.
 */

type AccordionItemTriggerProps = ChakraAccordion.ItemTriggerProps & {
  indicatorPlacement?: "start" | "end";
  title?: string;
  headingLevel?: HeadingLevel;
  leftIcon?: React.ReactNode;
};

export const AccordionItemTrigger = forwardRef<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(function AccordionItemTrigger(props, ref) {
  const {
    title,
    leftIcon,
    indicatorPlacement = "end",
    headingLevel = "h3",
    ...rest
  } = props;
  warnAboutMismatchingIcon({ icon: leftIcon });
  return (
    <ChakraAccordion.ItemTrigger {...rest} ref={ref}>
      {indicatorPlacement === "start" && (
        <ChakraAccordion.ItemIndicator
          rotate={{ base: "-90deg", _open: "0deg" }}
        >
          <DropdownDownFill24Icon />
        </ChakraAccordion.ItemIndicator>
      )}

      <HStack as={headingLevel} gap="4" flex="1" textAlign="start" width="full">
        {leftIcon && <Box marginRight={1}>{leftIcon}</Box>}
        {title}
      </HStack>
      {indicatorPlacement === "end" && (
        <ChakraAccordion.ItemIndicator>
          <DropdownDownFill24Icon />
        </ChakraAccordion.ItemIndicator>
      )}
    </ChakraAccordion.ItemTrigger>
  );
});

type HeadingLevel = "h2" | "h3" | "h4" | "h5" | "h6";

type AccordionItemContentProps = ChakraAccordion.ItemContentProps & {
  headingLevel?: HeadingLevel;
  title?: string;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export const AccordionItemContent = forwardRef<
  HTMLDivElement,
  AccordionItemContentProps
>(function AccordionItemContent(props, ref) {
  const { children } = props;

  return (
    <ChakraAccordion.ItemContent>
      <ChakraAccordion.ItemBody {...props} ref={ref}>
        {children}
      </ChakraAccordion.ItemBody>
    </ChakraAccordion.ItemContent>
  );
});

export const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const { variant = "base", children, ...rest } = props;
    return (
      <ChakraAccordion.Root {...rest} ref={ref}>
        {children}
      </ChakraAccordion.Root>
    );
  },
);
export const AccordionItem = ChakraAccordion.Item;

type WarnAboutMismatchingIcon = {
  icon: any;
};
const warnAboutMismatchingIcon = ({ icon }: WarnAboutMismatchingIcon) => {
  if (process.env.NODE_ENV !== "production") {
    const displayName = icon?.type?.render?.displayName;
    if (!displayName) {
      return;
    }
    if (displayName.includes("Fill")) {
      console.warn(
        `You passed a filled icon. This component requires outlined icons. You passed ${displayName}, replace it with ${displayName.replace(
          "Fill",
          "Outline",
        )}.`,
      );
      return;
    }
    if (!displayName.includes("24Icon")) {
      console.warn(
        `The icon you passed was of the wrong size. You passed ${displayName}, replace it with ${displayName.replace(
          /(\d{2})Icon/,
          "24Icon",
        )}.`,
      );
    }
  }
};
