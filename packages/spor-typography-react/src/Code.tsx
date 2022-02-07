import {
  As,
  Code as ChakraCode,
  CodeProps as ChakraCodeProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type CodeProps = {} & ChakraCodeProps;
/**
 * Shows inline code.
 */
export const Code = forwardRef<CodeProps, As<"code">>((props, ref) => (
  <ChakraCode {...props} ref={ref} />
));
