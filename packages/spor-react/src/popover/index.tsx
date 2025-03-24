import { CloseButton } from "@/button";
import { useColorMode } from "@/color-mode";
import {
  Portal,
  Popover as ChakraPopover,
  usePopoverContext,
} from "@chakra-ui/react";
import React, { forwardRef, useEffect } from "react";

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
  },
);
