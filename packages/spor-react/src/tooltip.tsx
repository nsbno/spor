"use client";

import { Portal, Tooltip as ChakraTooltip } from "@chakra-ui/react";
import { forwardRef } from "react";

export const Tooltip = ChakraTooltip.Root;

export const TooltipTrigger = forwardRef<
  HTMLButtonElement,
  ChakraTooltip.TriggerProps
>(({ children, ...props }, ref) => {
  const isStringChild = typeof children === "string";

  return (
    <ChakraTooltip.Trigger {...props} ref={ref} asChild={!isStringChild}>
      {children}
    </ChakraTooltip.Trigger>
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

export type TooltipProps = ChakraTooltip.ContentProps;

export const TooltipContent = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, ...props }, ref) => {
    return (
      <Portal>
        <ChakraTooltip.Positioner>
          <ChakraTooltip.Content ref={ref} {...props}>
            <ChakraTooltip.Arrow />
            <ChakraTooltip.Content {...props}>{children}</ChakraTooltip.Content>
          </ChakraTooltip.Content>
        </ChakraTooltip.Positioner>
      </Portal>
    );
  },
);
TooltipContent.displayName = "TooltipContent";
