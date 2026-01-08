"use client";

import {
  Separator as ChakraSeparator,
  SeparatorProps as ChakraSeparatorProps,
} from "@chakra-ui/react";

export const Separator = ({
  ref,
  ...props
}: ChakraSeparatorProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return <ChakraSeparator {...props} ref={ref} data- />;
};
Separator.displayName = "Separator";
