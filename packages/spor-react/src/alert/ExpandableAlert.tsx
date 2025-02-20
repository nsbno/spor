"use client";

import {
  Accordion,
  Box,
  Flex,
  HStack,
  Icon,
  RecipeVariantProps,
  Span,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { AlertIcon } from "./AlertIcon";
import { Alert, AlertProps, AlertRoot } from "./Alert";
import { alertExpandableSlotRecipe } from "@/theme/slot-recipes/alert-expandable";
import {
  DropdownDownFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";

type ExpandableAlertVariantProps = RecipeVariantProps<
  typeof alertExpandableSlotRecipe
>;

type ExpandableAlertProps = AlertProps &
  PropsWithChildren<ExpandableAlertVariantProps> & {
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
    value?: string;
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
      variant,
      children,
      title,
      headingLevel = "h3",
      defaultOpen = false,
      onToggle = () => {},
      value,
    } = props;
    const recipe = useSlotRecipe({ key: "alertExpandable" });
    const styles = recipe({ variant });

    const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
      const expandedIndex = (event.target as HTMLDivElement).dataset.index;
      onToggle(expandedIndex === "0");
    };
    return (
      <Accordion.Root
        onChange={handleChange}
        defaultValue={defaultOpen ? ["alert-expandable"] : undefined}
        collapsible
        flexGrow="1"
        ref={ref}
        css={styles.root}
      >
        <Accordion.Item value="alert-expandable">
          <Accordion.ItemTrigger css={styles.itemTrigger}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              flexGrow="1"
            >
              <Flex as={headingLevel} alignItems="center">
                <Box asChild css={styles.indicator}>
                  <AlertIcon variant={variant} />
                </Box>
                <Span
                  css={{
                    // Truncate the title to one line
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                  color={variant === "service" ? "white" : "darkGrey"}
                >
                  {title}
                </Span>
              </Flex>
              <Accordion.ItemIndicator>
                <DropdownDownFill18Icon />
              </Accordion.ItemIndicator>
            </HStack>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent
            color={variant === "service" ? "white" : "darkGrey"}
            css={styles.itemContent}
          >
            {children}
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
);
