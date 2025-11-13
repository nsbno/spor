"use client";

import {
  Separator as ChakraSeparator,
  SeparatorProps as ChakraSeparatorProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export const Separator = forwardRef<HTMLDivElement, ChakraSeparatorProps>(
  (props, ref) => {
    return <ChakraSeparator {...props} ref={ref} data- />;
  },
);
Separator.displayName = "Separator";
