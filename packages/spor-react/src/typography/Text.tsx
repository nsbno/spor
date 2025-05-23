"use client";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

export type TextProps = Omit<ChakraTextProps, "textStyle"> & {
  /** The size and style of the text.
   *
   * Defaults to "sm"
   * textStyle values are: "sm" | "md" | "lg" | "2xl" | "xl-display" | "xl-sans" | "xs" */
  variant?: ChakraTextProps["textStyle"];
};

/**
 * A paragraph of text.
 *
 * ```tsx
 * <Text>Welcome to this paragraph of text.</Text>
 * ```
 */

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  function Text(props, ref) {
    const { variant = "sm", ...rest } = props;
    return <ChakraText {...rest} textStyle={variant} ref={ref} />;
  },
);
