"use client";

import { Portal, Tooltip as ChakraTooltip } from "@chakra-ui/react";

export const Tooltip = ChakraTooltip.Root;

export const TooltipTrigger = ({
  ref,
  children,
  ...props
}: ChakraTooltip.TriggerProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) => {
  const isStringChild = typeof children === "string";

  return (
    <ChakraTooltip.Trigger {...props} ref={ref} asChild={!isStringChild}>
      {children}
    </ChakraTooltip.Trigger>
  );
};
TooltipTrigger.displayName = "TooltipTrigger";

export type TooltipProps = ChakraTooltip.ContentProps;

export const TooltipContent = ({
  ref,
  children,
  ...props
}: TooltipProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
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
};
TooltipContent.displayName = "TooltipContent";
