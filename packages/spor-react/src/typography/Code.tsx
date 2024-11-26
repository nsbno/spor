import {
  Code as ChakraCode,
  CodeProps as ChakraCodeProps,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";

export type CodeProps = Exclude<ChakraCodeProps, "colorPalette" | "variant"> & {
  /**
   * The color scheme of the inline code.
   */
  colorPalette?:
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

export const Code = forwardRef<HTMLElement, CodeProps>(
  function Code(props, ref) {
    return <ChakraCode {...props} ref={ref} />;
  },
);
