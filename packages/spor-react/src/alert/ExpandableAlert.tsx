"use client";

import {
  Accordion,
  Box,
  HStack,
  RecipeVariantProps,
  Span,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { AlertIcon } from "./AlertIcon";
import { AlertProps } from "./Alert";
import { alertExpandableSlotRecipe } from "@/theme/slot-recipes/alert-expandable";
import { DropdownDownFill18Icon } from "@vygruppen/spor-icon-react";
import { AccordionItemContent } from "@/accordion";

type ExpandableAlertVariantProps = RecipeVariantProps<
  typeof alertExpandableSlotRecipe
>;

type ExpandableAlertProps = PropsWithChildren<ExpandableAlertVariantProps> & {
  /** The title string  */
  title: string;
  /** Callback for when the expandable panel is opened or closed */
  onToggle?: (isOpen: boolean) => void;
  /** Whether or not the default state of the expandable alert is open */
  defaultOpen?: boolean;
  /**
   * The HTML element used for the `title` prop.
   *
   * Defaults to h3 */
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  /** If the user should be able to close the Accordion. Defaults to true */
  collapsible?: boolean;
  /**
   * The variant of the alert. Default: info
   * "info"
      | "success"
      | "important"
      | "alt-transport"
      | "error"
      | "service"
      | "global-deviation";
   */
  variant?: AlertProps["variant"];
};
/**
 * An expandable alert component.
 *
 * A regular alert with an expandable body. The expandable body can be used to provide more information about the alert.
 *
 * ```tsx
 * <ExpandableAlert variant="alt-transport" title="Replacement bus service">
 *   The replacement bus service will be running from 10:00 to 16:00.
 * </ExpandableAlert>
 * ```
 */
export const ExpandableAlert = forwardRef<HTMLDivElement, ExpandableAlertProps>(
  (props, ref) => {
    const {
      variant = "info",
      children,
      title,
      collapsible = true,
      headingLevel = "h3",
      defaultOpen = false,
    } = props;
    const recipe = useSlotRecipe({ key: "alertExpandable" });
    const styles = recipe({ variant });

    const defaultValue = "alert-expandable";

    return (
      <Accordion.Root
        defaultValue={defaultOpen ? [defaultValue] : undefined}
        ref={ref}
        css={styles.root}
        collapsible={collapsible}
      >
        <Accordion.Item value={defaultValue} css={styles.item}>
          <Accordion.ItemTrigger css={styles.itemTrigger}>
            <HStack
              gap="1"
              alignItems="center"
              justifyContent="space-between"
              flex="1"
              width="full"
            >
              <HStack gap="1" alignItems="center">
                <Box css={styles.indicator}>
                  <AlertIcon variant={variant} />
                </Box>
                <Span
                  as={headingLevel}
                  css={{
                    // Truncate the title to one line
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {title}
                </Span>
              </HStack>

              <Accordion.ItemIndicator>
                <DropdownDownFill18Icon />
              </Accordion.ItemIndicator>
            </HStack>
          </Accordion.ItemTrigger>
          <AccordionItemContent css={styles.itemContent}>
            {children}
          </AccordionItemContent>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
);
