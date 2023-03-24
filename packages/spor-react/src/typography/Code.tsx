import {
  As,
  Code as ChakraCode,
  CodeProps as ChakraCodeProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type CodeProps = ChakraCodeProps & {
  /**
   * The color scheme of the inline code.
   */
  colorScheme?:
    | "yellow"
    | "light-yellow"
    | "red"
    | "green"
    | "orange"
    | "blue"
    | "grey"
    | "white";
  /** The design variant – "solid" by default.
   *
   * Can be specified as `outline` to render a border around the badge. */
  variant?: "solid" | "outline";
};
/**
 * Shows inline code.
 */
export const Code = forwardRef<CodeProps, As<any>>((props, ref) => (
  <ChakraCode {...props} ref={ref} />
));
