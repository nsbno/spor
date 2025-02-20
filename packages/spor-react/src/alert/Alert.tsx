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

export type AlertProps = Exclude<
  ChakraAlert.RootProps,
  "status" | "colorPalette" | "size"
> &
  PropsWithChildren<AlertVariantProps> & {
    /** The color scheme and icon of the alert */
    variant:
      | "info"
      | "success"
      | "warning"
      | "alt-transport"
      | "error"
      | "service"
      | "global-deviation";
    /** The body content of the alert */
    children: React.ReactNode;
    /** The title of the alert */
    title?: string;
    indicator?: React.ReactNode;
    closable?: boolean;
  };

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    variant = "info",
    title,
    indicator = true,
    closable = false,
    children,
  } = props;
  const { open, onClose } = useDisclosure({ defaultOpen: true });
  if (!open) return null;
  return (
    <ChakraAlert.Root ref={ref} {...props} variant={variant}>
      <ChakraAlert.Content flexDirection={title ? "column" : "row"}>
        <HStack gap="1.5" alignItems="center">
          {indicator && (
            <ChakraAlert.Indicator>
              <AlertIcon variant={variant} />
            </ChakraAlert.Indicator>
          )}
          {title && <ChakraAlert.Title>{title}</ChakraAlert.Title>}
        </HStack>
        <ChakraAlert.Description>{children}</ChakraAlert.Description>
      </ChakraAlert.Content>
      {closable && <CloseButton size="xs" onClick={onClose} />}
    </ChakraAlert.Root>
  );
});
