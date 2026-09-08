"use client";

import { Box, Portal, Tooltip as ChakraTooltip } from "@chakra-ui/react";

import { DataColorProvider, useDataColor } from "./data-color-context";
import { SporSemantic } from "./theme/tokens/global-css";

export const Tooltip = ({
  children,
  "data-color": dataColor,
  ...rest
}: {
  children: React.ReactNode;
  "data-color"?: SporSemantic;
}) => (
  <DataColorProvider data-color={dataColor}>
    <ChakraTooltip.Root data-color={dataColor} {...rest}>
      {children}
    </ChakraTooltip.Root>
  </DataColorProvider>
);

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
  const dataColor = useDataColor();

  return (
    <Portal>
      <ChakraTooltip.Positioner>
        <ChakraTooltip.Content ref={ref} data-color={dataColor} {...props}>
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
