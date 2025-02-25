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
import React, { forwardRef, PropsWithChildren } from "react";
import { AlertProps } from "./Alert";
import { createTexts, useTranslation } from "../i18n";
import { alertServiceSlotRecipe } from "../theme/slot-recipes/alert-service";
import {
  DropdownDownFill24Icon,
  ServiceFill24Icon,
  WarningFill24Icon,
} from "@vygruppen/spor-icon-react";

type ServiceAlertVariantProps = RecipeVariantProps<
  typeof alertServiceSlotRecipe
>;

type ServiceAlertProps = Omit<AlertProps, "variant"> &
  PropsWithChildren<ServiceAlertVariantProps> &
  Omit<Accordion.RootProps, "variant" | "orientation" | "size" | "value"> & {
    /** The title string  */
    title: string;
    /** The number of notifications when there is a list of multiple alerts */
    notification: number;
    /** The maximum width to display the service message
     *
     * Defaults to container.md */
    contentWidth: string;
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

export const ServiceAlert = forwardRef<HTMLDivElement, ServiceAlertProps>(
  (props, ref) => {
    const {
      variant = "service",
      children,
      title,
      notification,
      contentWidth = "container.md",
      headingLevel = "h3",
      defaultOpen = false,
      collapsible = true,
      css,
      ...rest
    } = props;
    const { t } = useTranslation();
    const recipe = useSlotRecipe({ key: "alertService" });
    const styles = recipe({ variant });

    const defaultValue = "spor-service-alert";
    return (
      <Accordion.Root
        defaultValue={defaultOpen ? [defaultValue] : undefined}
        collapsible={collapsible}
        css={{ ...styles.root, ...css }}
        ref={ref}
        {...rest}
      >
        <Accordion.Item value={defaultValue}>
          <Accordion.ItemTrigger css={styles.itemTrigger}>
            <HStack
              justifyContent="space-between"
              alignContent="center"
              width="100%"
              maxWidth={contentWidth}
            >
              <HStack as={headingLevel} alignItems="center" gap="1">
                {variant === "service" ? (
                  <ServiceFill24Icon aria-label={t(texts.service)} />
                ) : (
                  <WarningFill24Icon
                    aria-label={t(texts["global-deviation"])}
                  />
                )}
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
              </HStack>
              <Flex alignItems="center" gap={[0.5, null, null, 1]}>
                {notification && (
                  <Text css={styles.notificationText}>
                    {t(texts.notification(notification))}
                  </Text>
                )}
                <Accordion.ItemIndicator>
                  <DropdownDownFill24Icon color="icon.inverted" />
                </Accordion.ItemIndicator>
              </Flex>
            </HStack>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent asChild>
            <Stack flexDirection="row" justifyContent="center" width="100%">
              <Accordion.ItemBody
                as={Stack}
                maxWidth={contentWidth}
                css={styles.itemBody}
              >
                {children}
              </Accordion.ItemBody>
            </Stack>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    );
  },
);

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
  service: {
    nb: "Driftsmelding",
    nn: "Driftsmelding",
    sv: "Service meddelande",
    en: "Service message",
  },
  "global-deviation": {
    nb: "Trafikkmelding",
    nn: "Trafikkmelding",
    sv: "Trafikmeddelande",
    en: "Traffic announcement",
  },
});
