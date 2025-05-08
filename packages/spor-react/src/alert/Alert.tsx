"use client";

import {
  Alert as ChakraAlert,
  HStack,
  useDisclosure,
  useSlotRecipe,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";
import { forwardRef } from "react";

import { CloseButton } from "@/button";

import { AlertIcon } from "./AlertIcon";

export type AlertProps = Omit<ChakraAlert.RootProps, "colorPalette"> & {
  /** Whether or not to show the alert icon */
  showIndicator?: boolean;
  /** Whether or not the alert is closable */
  icon?: IconComponent;
  closable?: boolean;
  /** Callback for when the alert is closed */
  onAlertClose?: () => void;
};

/**
 *
 * Alerts are used to communicate important information to the user.
 * They can be used to inform about success, errors, warnings, or other important information.
 *
 * ```tsx
 * <Alert variant="info" title="Information">
 *  This is an information alert
 * </Alert>
 * ```
 *
 * You may also use the closable prop to allow the user to dismiss the alert.
 *
 * ```tsx
 * <Alert variant="info" title="Information" closable>
 *    This is an closable alert
 * </Alert>
 *
 * @see Docs https://spor.vy.no/alert
 */

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    title,
    showIndicator = true,
    icon,
    closable = false,
    onAlertClose,
    children,
  } = props;
  const { open, onClose } = useDisclosure({ defaultOpen: true });

  const handleAlertClose = () => {
    onClose();
    onAlertClose?.();
  };

  const recipe = useSlotRecipe({ key: "alert" });
  const styles = recipe({ variant: props.variant });

  if (!open) return null;
  return (
    <ChakraAlert.Root ref={ref} {...props}>
      <ChakraAlert.Content flexDirection={title ? "column" : "row"}>
        <HStack gap="1" alignItems="flex-start">
          {showIndicator && (
            <ChakraAlert.Indicator asChild>
              <AlertIcon variant={props.variant} customIcon={icon} />
            </ChakraAlert.Indicator>
          )}
          {title && (
            <ChakraAlert.Title paddingRight={closable ? 6 : 0}>
              {title}
            </ChakraAlert.Title>
          )}
        </HStack>
        {children && (
          <ChakraAlert.Description
            paddingLeft={title ? 0.5 : 0}
            paddingRight={closable ? 6 : 0}
          >
            {children}
          </ChakraAlert.Description>
        )}
      </ChakraAlert.Content>
      {closable && (
        <CloseButton
          size="xs"
          position="absolute"
          top="1.5"
          right="1.5"
          onClick={handleAlertClose}
          css={styles.closeButton}
        />
      )}
    </ChakraAlert.Root>
  );
});

Alert.displayName = "Alert";
