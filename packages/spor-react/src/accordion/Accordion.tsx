"use client";

import {
  Box,
  Accordion as ChakraAccordion,
  HStack,
  Stack,
  useSlotRecipe,
} from "@chakra-ui/react";
import { DropdownDownFill24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef } from "react";
import {
  AccordionProps,
  AccordionItemTriggerProps,
  AccordionItemContentProps,
} from "./types";
import { warnAboutMismatchingIcon } from "./helpers";

/*
 * Wraps a set of AccordionItem or AccordionItem components.
 *
 * ```tsx
 * <Accordion variant="ghost">
 *   <AccordionItem>
 *      <AccordionItemTrigger headingLevel="h3" title="Is Spor easy?" />
 *      <AccordionItemContent>Yes</AccordionItemContent>
 *   </AccordionItem>
 *   <AccordionItem>
 *      <AccordionItemTrigger headingLevel="h3" title="Is Spor lovable?" />
 *      <AccordionItemContent>Yes</AccordionItemContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 *
 * If you need to have a default open item, you can use the `defaultValue` prop.
 *
 * ```tsx
 * <Accordion defaultValue="a">
 *  <AccordionItem value="a">
 *    <AccordionItemTrigger headingLevel="h3" title="Is Spor easy?" />
 *    <AccordionItemContent>Yes</AccordionItemContent>
 *  </AccordionItem>
 *  <AccordionItem value="b">
 *    <AccordionItemTrigger headingLevel="h3" title="Is Spor lovable?" />
 *    <AccordionItemContent>Yes</AccordionItemContent>
 *  </AccordionItem>
 * </Accordion>
 * ```
 *
 * If you only have one expandable item, you can use the `<Expandable />` component instead.
 */

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const { variant = "core", children, gap = 2, ...rest } = props;
    const recipe = useSlotRecipe({ key: "accordion" });
    const styles = recipe({ variant });
    return (
      <ChakraAccordion.Root
        {...rest}
        ref={ref}
        css={styles.root}
        variant={variant}
      >
        <Stack gap={gap}>{children}</Stack>
      </ChakraAccordion.Root>
    );
  },
);

export const AccordionItemTrigger = forwardRef<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(function AccordionItemTrigger(props, ref) {
  const {
    startElement,
    indicatorPlacement = "end",
    headingLevel = "h3",
    children,
    ...rest
  } = props;
  warnAboutMismatchingIcon({ icon: startElement });
  const recipe = useSlotRecipe({ key: "accordion" });
  const styles = recipe();
  return (
    <ChakraAccordion.ItemTrigger {...rest} ref={ref} css={styles.itemTrigger}>
      {indicatorPlacement === "start" && (
        <ChakraAccordion.ItemIndicator
          rotate={{ base: "-90deg", _open: "0deg" }}
        >
          <DropdownDownFill24Icon />
        </ChakraAccordion.ItemIndicator>
      )}

      <HStack as={headingLevel} flex="1" gap={1} textAlign="start" width="full">
        {startElement && startElement}
        {children}
      </HStack>
      {indicatorPlacement === "end" && (
        <ChakraAccordion.ItemIndicator>
          <DropdownDownFill24Icon />
        </ChakraAccordion.ItemIndicator>
      )}
    </ChakraAccordion.ItemTrigger>
  );
});

export const AccordionItemContent = forwardRef<
  HTMLDivElement,
  AccordionItemContentProps
>(function AccordionItemContent(props, ref) {
  const { children } = props;

  const recipe = useSlotRecipe({ key: "accordion" });
  const styles = recipe();

  return (
    <ChakraAccordion.ItemContent css={styles.itemContent}>
      <ChakraAccordion.ItemBody {...props} ref={ref}>
        {children}
      </ChakraAccordion.ItemBody>
    </ChakraAccordion.ItemContent>
  );
});

export const AccordionItem = ChakraAccordion.Item;
