"use client";

import {
  Accordion as ChakraAccordion,
  Box,
  HStack,
  Stack,
  useSlotRecipe,
} from "@chakra-ui/react";
import { DropdownDownFill24Icon } from "@vygruppen/spor-icon-react";
import { forwardRef } from "react";

import { warnAboutMismatchingIcon } from "./helpers";
import {
  AccordionItemContentProps,
  AccordionItemTriggerProps,
  AccordionProps,
} from "./types";

/*
 * Wraps a set of AccordionItem or AccordionItem components.
 *
 * ```tsx
 * <Accordion variant="ghost">
 *   <AccordionItem>
 *      <AccordionItemTrigger>Is Spor easy?</AccordionItemTrigger>
 *      <AccordionItemContent>Yes</AccordionItemContent>
 *   </AccordionItem>
 *   <AccordionItem>
 *      <AccordionItemTrigger>Is Spor lovable?</AccordionItemTrigger>
 *      <AccordionItemContent>Yes</AccordionItemContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 *
 * If you need to have a default open item, you can use the `defaultValue` prop.
 *
 * ```tsx
 * <Accordion defaultValue={["a"]}>
 *  <AccordionItem value="a">
 *    <AccordionItemTrigger>Is Spor easy?</AccordionItemTrigger>
 *    <AccordionItemContent>Yes</AccordionItemContent>
 *  </AccordionItem>
 *  <AccordionItem value="b">
 *    <AccordionItemTrigger>Is Spor lovable?</AccordionItemTrigger>
 *    <AccordionItemContent>Yes</AccordionItemContent>
 *  </AccordionItem>
 * </Accordion>
 * ```
 *
 * If you only have one expandable item, you can use the `<Expandable />` component instead.
 *
 * @see https://spor.vy.no/components/accordion
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
  const { startElement, children, headingLevel, ...rest } = props;
  warnAboutMismatchingIcon({ icon: startElement });
  const recipe = useSlotRecipe({ key: "accordion" });
  const styles = recipe();
  return (
    <Box as={headingLevel}>
      <ChakraAccordion.ItemTrigger {...rest} ref={ref} css={styles.itemTrigger}>
        <HStack flex="1" gap={1} textAlign="start" width="full">
          {startElement && startElement}
          {children}
        </HStack>

        <ChakraAccordion.ItemIndicator>
          <DropdownDownFill24Icon />
        </ChakraAccordion.ItemIndicator>
      </ChakraAccordion.ItemTrigger>
    </Box>
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
Accordion.displayName = "Accordion";

export const AccordionItem = ChakraAccordion.Item;
