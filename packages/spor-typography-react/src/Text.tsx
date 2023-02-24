import {
  forwardRef,
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import React from "react";

export type TextProps = Exclude<ChakraTextProps, "textStyle"> & {
  /** @deprecated Use `variant` instead */
  textStyle?: ChakraTextProps["textStyle"];
  /** The size and style of the text.
   *
   * Defaults to "xl" */
  variant?: ChakraTextProps["textStyle"];
};
/**
 * A paragraph of text.
 *
 * ```tsx
 * <Text>Welcome to this paragraph of text.</Text>
 * ```
 */
export const Text = forwardRef<TextProps, "p">(
  ({ fontSize = "xl", ...props }, ref) => {
    return <ChakraText fontSize={fontSize} {...props} ref={ref} />;
  }
);
