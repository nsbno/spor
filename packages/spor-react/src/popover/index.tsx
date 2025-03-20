import { CloseButton } from "@/button";
import { Portal, Popover as ChakraPopover } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const Popover = ChakraPopover.Root;

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  ChakraPopover.TriggerProps
>(({ children, ...props }, ref) => {
  const isStringChild = typeof children === "string";

  return (
    <ChakraPopover.Trigger {...props} ref={ref} asChild={!isStringChild}>
      {children}
    </ChakraPopover.Trigger>
  );
});

export type PopoverProps = ChakraPopover.ContentProps &
  React.RefAttributes<HTMLDivElement> & {
    showCloseButton?: boolean;
  };

export const PopoverContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, showCloseButton = false, ...props }, ref) => {
    console.log(children);

    return (
      <Portal>
        <ChakraPopover.Positioner>
          <ChakraPopover.Content ref={ref}>
            <ChakraPopover.Arrow />
            <ChakraPopover.Body {...props}>{children}</ChakraPopover.Body>
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
