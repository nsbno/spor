"use client";

import {
  Accordion,
  Flex,
  HStack,
  RecipeVariantProps,
  Span,
  Stack,
  Text,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { AlertIcon } from "./AlertIcon";
import { Alert, AlertProps } from "./Alert";
import { createTexts, useTranslation } from "../i18n";
import { alertServiceSlotRecipe } from "../theme/slot-recipes/alert-service";
import { DropdownDownFill24Icon } from "@vygruppen/spor-icon-react";

type ServiceAlertVariantProps = RecipeVariantProps<
  typeof alertServiceSlotRecipe
>;

type ServiceAlertProps = Exclude<AlertProps, "variant"> &
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
    onToggle?: (open: boolean) => void;
    /** Whether or not the default state of the alert is open */
    defaultOpen?: boolean;
    /**
     * The HTML element used for the `title` prop.
     *
     * Defaults to h3 */
    headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
    /** The variant of Service Alert. Default: service */
    variant?: "service" | "global-deviation";
    value?: string;
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
  onToggle,
  value,
  ...boxProps
}: ServiceAlertProps) => {
  const { t } = useTranslation();
  const recipe = useSlotRecipe({ key: "alertService" });
  const styles = recipe({ variant });

  const fallbackValue = value || "spor-service-alert";
  return (
    <Alert variant={variant} {...boxProps} css={styles.root}>
      <Accordion.Root
        defaultValue={defaultOpen ? [fallbackValue] : undefined}
        collapsible
        /* onChange={onToggle} */
      >
        <Accordion.Item value={fallbackValue}>
          <Accordion.ItemTrigger css={styles.itemTrigger}>
            <HStack
              justifyContent="space-between"
              alignContent="center"
              width="100%"
              maxWidth={contentWidth}
            >
              <Flex as={headingLevel} alignItems="center">
                <AlertIcon variant={variant} />

                <Span
                  css={{
                    // Truncate the title to one line
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                    ...styles.itemTriggerTitle,
                  }}
                >
                  {title}
                </Span>
              </Flex>
              <Flex alignItems="center" gap={[0.5, null, null, 1]}>
                {notification && (
                  <Text css={styles.notificationText}>
                    {t(texts.notification(notification))}
                  </Text>
                )}
                <Accordion.ItemIndicator>
                  <DropdownDownFill24Icon />
                </Accordion.ItemIndicator>
              </Flex>
            </HStack>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent css={styles.itemContent}>
            <HStack justifyContent="center" width="100%">
              <Stack
                justifyContent="center"
                maxWidth={contentWidth}
                gap={2}
                css={{
                  "& p": {
                    padding: "0.8rem 0",
                    borderBottom: "0.08rem dashed",
                    borderColor:
                      variant === "global-deviation"
                        ? "outline"
                        : "outline.inverted",
                  },
                  "& p:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                {children}
              </Stack>
            </HStack>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Alert>
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
