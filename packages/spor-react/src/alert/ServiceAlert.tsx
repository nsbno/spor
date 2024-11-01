import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Stack,
  Text,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React from "react";
import { AlertIcon } from "./AlertIcon";
import { BaseAlert, BaseAlertProps } from "./BaseAlert";
import { createTexts, useTranslation } from "../i18n";

type ServiceAlertProps = BaseAlertProps & {
  /** The title string  */
  title: string;
  /** The number of notifications when there is a list of multiple alerts */
  notification: number;
  /** The maximum width to display the service message
   *
   * Defaults to container.md */
  contentWidth: string;
  /** Callback for when the expandable panel is opened or closed */
  onToggle?: (isOpen: boolean) => void;
  /** Whether or not the default state of the alert is open */
  defaultOpen?: boolean;
  /**
   * The HTML element used for the `title` prop.
   *
   * Defaults to h3 */
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  /** The variant of Service Alert. Default: service */
  variant?: "service" | "operational";
};
/**
 * A service alert component.
 *
 * A regular alert with an expandable body, used to show service messages. The expandable body can be used to provide more information about the alert(s).
 *
 * ```tsx
 * <ServiceAlert title="Error with Vipps" notification={1} contentWidth="container.md">
 *   <Text>Some customers are experiencing issues logging in with Vipps. Vipps is working to resolve the issue. Try logging in with email instead.</Text>
 * </ServiceAlert>
 * ```
 */
export const ServiceAlert = ({
  variant = "service",
  children,
  title,
  notification,
  contentWidth = "container.md",
  headingLevel = "h3",
  defaultOpen = false,
  onToggle = () => {},
  ...boxProps
}: ServiceAlertProps) => {
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("AlertService", { variant });
  return (
    <BaseAlert
      variant={variant}
      {...boxProps}
      paddingX={0}
      paddingY={0}
      sx={styles.outerBox}
    >
      <Accordion
        onChange={(expandedIndex) => onToggle(expandedIndex === 0)}
        defaultIndex={defaultOpen ? 0 : -1}
        allowToggle
        flexGrow={1}
        sx={{ outline: "none" }}
        variant={variant}
      >
        <AccordionItem>
          <AccordionButton sx={styles.container}>
            <Stack
              flexDirection="row"
              justifyContent="center"
              width="100%"
              paddingX={2}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                flexGrow={1}
                maxWidth={contentWidth}
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
                    color={variant === "operational" ? "black" : "white"}
                  >
                    {title}
                  </Box>
                </Flex>

                <Flex alignItems="center">
                  {notification && (
                    <Text sx={styles.notificationText}>
                      {t(texts.notification(notification))}
                    </Text>
                  )}

                  <AccordionIcon
                    color={variant === "operational" ? "black" : "white"}
                  />
                </Flex>
              </Flex>
            </Stack>
          </AccordionButton>

          <AccordionPanel sx={styles.serviceMessageContent}>
            <Stack flexDirection="row" justifyContent="center" width="100%">
              <Stack
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                maxWidth={contentWidth}
                flexFlow="column"
                gap={2}
                sx={{
                  p: {
                    padding: "0.8rem 0",
                    borderBottom: "0.08rem solid rgba(255, 255, 255, 0.4)",
                  },
                  "p:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                {children}
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </BaseAlert>
  );
};

const texts = createTexts({
  notification: (notification) => {
    const numNotification = Number(notification);
    return {
      nb: `${numNotification} varsel`,
      nn: `${numNotification} varsel`,
      sv: `${numNotification} ${numNotification > 1 ? "underrättelser" : "underrättelse"}`,
      en: `${numNotification} ${numNotification > 1 ? "notifications" : "notification"}`,
    };
  },
});
