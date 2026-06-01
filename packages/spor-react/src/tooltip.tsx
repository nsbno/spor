"use client";

import { Box, Portal, Tooltip as ChakraTooltip } from "@chakra-ui/react";

export const Tooltip = ChakraTooltip.Root;

export const TooltipTrigger = ({
  ref,
  children,
  ...props
}: ChakraTooltip.TriggerProps & {
  ref?: React.Ref<HTMLButtonElement>;
}) => {
  const isStringChild = typeof children === "string";

  return (
    <ChakraTooltip.Trigger ref={ref} asChild={!isStringChild} {...props}>
      {isStringChild ? children : <Box width="fit-content">{children}</Box>}
    </ChakraTooltip.Trigger>
  );
};

export type TooltipProps = ChakraTooltip.ContentProps & {
  showArrow?: boolean;
};

export const TooltipContent = ({
  ref,
  children,
  showArrow = false,
  ...props
}: TooltipProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <Portal>
      <ChakraTooltip.Positioner>
        <ChakraTooltip.Content
          ref={ref}
          maxWidth="var(--available-width)"
          {...props}
        >
          {showArrow && (
            <ChakraTooltip.Arrow>
              <ChakraTooltip.ArrowTip />
            </ChakraTooltip.Arrow>
          )}
          {children}
        </ChakraTooltip.Content>
      </ChakraTooltip.Positioner>
    </Portal>
  );
};
