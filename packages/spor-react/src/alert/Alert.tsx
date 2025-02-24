"use client";

import {
  RecipeVariantProps,
  Alert as ChakraAlert,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { alertSlotRecipe } from "../theme/slot-recipes/alert";
import { AlertIcon } from "./AlertIcon";
import { CloseButton } from "@/button";

export type AlertVariantProps = RecipeVariantProps<typeof alertSlotRecipe>;

export type AlertProps = Omit<
  ChakraAlert.RootProps,
  "status" | "colorPalette" | "size"
> &
  PropsWithChildren<AlertVariantProps> & {
    /** The color scheme and icon of the alert */
    variant:
      | "info"
      | "success"
      | "important"
      | "alt-transport"
      | "error"
      | "service"
      | "global-deviation";
    /** The body content of the alert */
    children?: React.ReactNode;
    /** The title of the alert */
    title?: string;
    /** Whether or not to show the alert icon */
    indicator?: React.ReactNode;
    /** Whether or not the alert is closable */
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
    variant = "info",
    title,
    indicator = true,
    closable = false,
    onAlertClose,
    children,
  } = props;
  const { open, onClose } = useDisclosure({ defaultOpen: true });

  const handleAlertClose = () => {
    onClose();
    onAlertClose?.();
  };
  if (!open) return null;
  return (
    <ChakraAlert.Root ref={ref} {...props} variant={variant}>
      <ChakraAlert.Content flexDirection={title ? "column" : "row"}>
        <HStack gap="1" alignItems="flex-start">
          {indicator && (
            <ChakraAlert.Indicator paddingTop="0.02rem">
              <AlertIcon variant={variant} />
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
        />
      )}
    </ChakraAlert.Root>
  );
});
