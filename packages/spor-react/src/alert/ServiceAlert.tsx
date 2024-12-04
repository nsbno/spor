import {
  Accordion,
  Box,
  Flex,
  Icon,
  RecipeVariantProps,
  Stack,
  Text,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { AlertIcon } from "./AlertIcon";
import { BaseAlert, BaseAlertProps } from "./BaseAlert";
import { createTexts, useTranslation } from "../i18n";
import { serviceAlertSlotRecipe } from "../theme/components/alert-service";

type ServiceAlertVariantProps = RecipeVariantProps<
  typeof serviceAlertSlotRecipe
>;

type ServiceAlertProps = BaseAlertProps &
  PropsWithChildren<ServiceAlertVariantProps> & {
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
    variant?: "service" | "global-deviation";
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
  const recipe = useSlotRecipe({ key: "alert-service" });
  const styles = recipe({ variant });
  return (
    <BaseAlert
      variant={variant}
      {...boxProps}
      paddingX={0}
      paddingY={0}
      sx={styles.outerBox}
    >
      <Accordion.Root
        onChange={(expandedIndex: number) => onToggle(expandedIndex === 0)}
        defaultIndex={defaultOpen ? 0 : -1}
        allowToggle
        flexGrow={1}
        sx={{ outline: "none" }}
        variant={variant}
      >
        <Accordion.Item>
          <Accordion.ItemTrigger css={styles.container}>
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
                    css={{
                      // Truncate the title to one line
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: "1",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {title}
                  </Box>
                </Flex>

                <Flex alignItems="center">
                  {notification && (
                    <Text css={styles.notificationText}>
                      {t(texts.notification(notification))}
                    </Text>
                  )}

                  <Icon />
                </Flex>
              </Flex>
            </Stack>
          </Accordion.ItemTrigger>

          <Accordion.ItemBody css={styles.serviceMessageContent}>
            <Stack flexDirection="row" justifyContent="center" width="100%">
              <Stack
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                maxWidth={contentWidth}
                flexFlow="column"
                gap={2}
                css={{
                  p: {
                    padding: "0.8rem 0",
                    borderBottom: "0.08rem solid",
                    borderColor:
                      variant === "global-deviation"
                        ? "blackAlpha.400"
                        : "whiteAlpha.400",
                  },
                  "p:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                {children}
              </Stack>
            </Stack>
          </Accordion.ItemBody>
        </Accordion.Item>
      </Accordion.Root>
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
