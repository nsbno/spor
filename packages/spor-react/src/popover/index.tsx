"use client";

import {
  Box,
  Popover as ChakraPopover,
  Portal,
  usePopoverContext,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { CloseButton } from "@/button";
import { useColorMode } from "@/color-mode";
import { SporColor } from "@/theme/tokens/global-css";

import { DataColorProvider, useDataColor } from "..";

export const Popover = ({
  children,
  "data-color": dataColor,
  ...rest
}: ChakraPopover.RootProps & { "data-color"?: SporColor }) => {
  return (
    <DataColorProvider data-color={dataColor}>
      <ChakraPopover.Root {...rest}>{children}</ChakraPopover.Root>
    </DataColorProvider>
  );
};

export const PopoverTrigger = ({
  ref,
  children,
  ...props
}: ChakraPopover.TriggerProps & {
  ref?: React.Ref<HTMLButtonElement>;
}) => {
  const dataColor = useDataColor();

  const isStringChild = typeof children === "string";

  return (
    <ChakraPopover.Trigger
      ref={ref}
      asChild={!isStringChild}
      width={isStringChild ? undefined : "fit-content"}
      data-color={dataColor}
      {...props}
    >
      {isStringChild ? children : <Box>{children}</Box>}
    </ChakraPopover.Trigger>
  );
};

export type PopoverProps = ChakraPopover.ContentProps &
  React.RefAttributes<HTMLDivElement> & {
    showCloseButton?: boolean;
  };

export const PopoverContent = ({
  ref,
  children,
  showCloseButton = false,
  ...props
}: PopoverProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const dataColor = useDataColor();

  const { colorMode } = useColorMode();

  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const { open } = usePopoverContext();

  useEffect(() => {
    if (showCloseButton && open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [showCloseButton, open]);

  return (
    <Portal>
      <ChakraPopover.Positioner>
        <ChakraPopover.Content ref={ref} data-color={dataColor} {...props}>
          <ChakraPopover.Arrow />
          <ChakraPopover.Body {...props}>{children}</ChakraPopover.Body>
          {showCloseButton && (
            <div>
              <ChakraPopover.CloseTrigger asChild>
                <CloseButton
                  className={colorMode === "dark" ? "light" : "dark"}
                  ref={closeButtonRef}
                />
              </ChakraPopover.CloseTrigger>
            </div>
          )}
        </ChakraPopover.Content>
      </ChakraPopover.Positioner>
    </Portal>
  );
};
