"use client";

import {
  Popover as ChakraPopover,
  Portal,
  usePopoverContext,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { CloseButton } from "@/button";
import { useColorMode } from "@/color-mode";

export const Popover = ChakraPopover.Root;

export const PopoverTrigger = ({
  ref,
  children,
  ...props
}: ChakraPopover.TriggerProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) => {
  const isStringChild = typeof children === "string";

  return (
    <ChakraPopover.Trigger {...props} ref={ref} asChild={!isStringChild}>
      {children}
    </ChakraPopover.Trigger>
  );
};
PopoverTrigger.displayName = "PopoverTrigger";

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
  ref?: React.RefObject<HTMLDivElement>;
}) => {
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
        <ChakraPopover.Content ref={ref} {...props}>
          <ChakraPopover.Arrow />
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
          <ChakraPopover.Body {...props}>{children}</ChakraPopover.Body>
        </ChakraPopover.Content>
      </ChakraPopover.Positioner>
    </Portal>
  );
};
PopoverContent.displayName = "PopoverContent";
