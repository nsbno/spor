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
 * Determines the correct props to pass to ChakraText,
 * based on the user's intent and sensible defaults.
 */
function resolveTextProps({
  variant,
  fontSize,
  lineHeight,
}: Pick<TextProps, "variant" | "fontSize" | "lineHeight">) {
  // If user provides a variant, use it (overrides fontSize/lineHeight)
  if (variant) return { textStyle: variant };

  // If neither fontSize nor lineHeight is provided, default to "sm"
  if (!fontSize && !lineHeight) return { textStyle: "sm" };

  // If only lineHeight is provided, default fontSize to "sm"
  if (lineHeight && !fontSize) return { lineHeight, fontSize: "sm" };

  // If only fontSize is provided, use it and let Chakra handle lineHeight
  if (fontSize && !lineHeight) return { fontSize };

  // If both are provided, use both
  return { fontSize, lineHeight };
}

/**
 * A paragraph of text.
 *
 * ```tsx
 * <Text>Welcome to this paragraph of text.</Text>
 * ```
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  function Text(props, ref) {
    const { variant, lineHeight, fontSize, ...rest } = props;
    const resolvedProps = resolveTextProps({ variant, fontSize, lineHeight });

    return (
      <ChakraText {...resolvedProps} {...rest} ref={ref} lineHeight="1.5" />
    );
  },
);
