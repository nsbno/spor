"use client";

import {
  Separator as ChakraSeparator,
  SeparatorProps as ChakraSeparatorProps,
} from "@chakra-ui/react";

export const Separator = ({
  ref,
  ...props
}: ChakraSeparatorProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return <ChakraSeparator {...props} ref={ref} data- />;
};
