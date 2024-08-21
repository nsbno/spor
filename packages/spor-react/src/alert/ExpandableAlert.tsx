import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";
import { AlertIcon } from "./AlertIcon";
import { BaseAlert, BaseAlertProps } from "./BaseAlert";

type ExpandableAlertProps = BaseAlertProps & {
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
export const ExpandableAlert = ({
  variant,
  children,
  title,
  headingLevel = "h3",
  defaultOpen = false,
  onToggle = () => {},
  ...boxProps
}: ExpandableAlertProps) => {
  const styles = useMultiStyleConfig("AlertExpandable", { variant });
  return (
    <BaseAlert variant={variant} {...boxProps} paddingX={0} paddingY={0}>
      <Accordion
        onChange={(expandedIndex) => onToggle(expandedIndex === 0)}
        defaultIndex={defaultOpen ? 0 : -1}
        allowToggle
        flexGrow="1"
      >
        <AccordionItem>
          <AccordionButton sx={styles.container}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              flexGrow="1"
            >
              <Flex as={headingLevel} alignItems="center">
                <AlertIcon variant={variant} />

                <Box
                  as="span"
                  sx={{
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
              <AccordionIcon
                color={variant === "service" ? "white" : "darkGrey"}
              />
            </Flex>
          </AccordionButton>
          <AccordionPanel color={variant === "service" ? "white" : "darkGrey"}>
            {children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </BaseAlert>
  );
};
