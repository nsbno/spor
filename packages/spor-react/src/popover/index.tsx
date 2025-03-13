import { CloseButton } from "@/button";
import { Portal, Popover as ChakraPopover } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const Popover = ChakraPopover.Root;

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  ChakraPopover.TriggerProps
>(({ children, ...props }, ref) => (
  <ChakraPopover.Trigger asChild {...props} ref={ref}>
    {children}
  </ChakraPopover.Trigger>
));

type PopoverProps = ChakraPopover.ContentProps &
  React.RefAttributes<HTMLDivElement> & {
    showCloseButton?: boolean;
  };

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, showCloseButton = false, ...props }, ref) => {
    return (
      <Portal>
        <ChakraPopover.Positioner>
          <ChakraPopover.Content {...props} ref={ref}>
            <ChakraPopover.Arrow />
            <ChakraPopover.Body>{children}</ChakraPopover.Body>
            {showCloseButton && (
              <div>
                <ChakraPopover.CloseTrigger asChild>
                  <CloseButton />
                </ChakraPopover.CloseTrigger>
              </div>
            )}
          </ChakraPopover.Content>
        </ChakraPopover.Positioner>
      </Portal>
    );
  },
);
