"use client";

import { Accordion, Box, Flex, Icon, useSlotRecipe } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { AlertIcon } from "./AlertIcon";
import { Alert, AlertProps } from "./Alert";

type ExpandableAlertProps = AlertProps & {
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
export const ExpandableAlert = forwardRef<
  HTMLButtonElement,
  ExpandableAlertProps
>((props, ref) => {
  const {
    variant,
    children,
    title,
    headingLevel = "h3",
    defaultOpen = false,
    onToggle = () => {},
    value,
  } = props;
  const recipe = useSlotRecipe({ key: "alert-expandable" });
  const styles = recipe({ variant });

  const handleChange = (event: React.FormEvent<HTMLDivElement>) => {
    const expandedIndex = (event.target as HTMLDivElement).dataset.index;
    onToggle(expandedIndex === "0");
  };
  return (
    <Alert {...props} paddingX={0} paddingY={0}>
      <Accordion.Root
        onChange={handleChange}
        defaultValue={["alert-expandable"]}
        collapsible
        flexGrow="1"
      >
        <Accordion.Item css={styles.accordion} value={"alert-expandable"}>
          <Accordion.ItemTrigger css={styles.container}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexGrow="1"
            >
              <Flex as={headingLevel} alignItems="center">
                <AlertIcon variant={variant} />

                <Box
                  as="span"
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
                </Box>
              </Flex>
              <Icon color={variant === "service" ? "white" : "darkGrey"} />
            </Flex>
          </Accordion.ItemTrigger>
          <Accordion.ItemBody
            color={variant === "service" ? "white" : "darkGrey"}
          >
            {children}
          </Accordion.ItemBody>
        </Accordion.Item>
      </Accordion.Root>
    </Alert>
  );
});
