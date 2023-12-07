import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type TextProps = Omit<ChakraTextProps, "textStyle"> & {
  /** The size and style of the text.
   *
   * Defaults to "sm" */
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
  ({ variant = "sm", ...props }, ref) => {
    return <ChakraText {...props} textStyle={variant} ref={ref} />;
  },
);
