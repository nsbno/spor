"use client";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";

const textVariantMap = {
  lg: "lg",
  "md-lg": "md-lg",
  md: "md",
  sm: "sm",
  xs: "xs",
  "2xs": "2xs",
} as const;

export type TextVariant = keyof typeof textVariantMap;

export type TextProps = Omit<ChakraTextProps, "textStyle"> & {
  /** The size and style of the text.
   *
   * Defaults to "sm"
   * Variants: "xl" | "lg" | "md-lg" | "md" | "sm" | "xs" | "2xs" */
  variant?: TextVariant;
  spacing?: boolean;
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
  if (variant) return { textStyle: textVariantMap[variant] };

  // If neither fontSize nor lineHeight is provided, default to "sm"
  if (!fontSize && !lineHeight) return { textStyle: textVariantMap.sm };

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
export const Text = function Text({
  ref,
  ...props
}: TextProps & {
  ref?: React.Ref<HTMLParagraphElement>;
}) {
  const { variant, lineHeight, fontSize, spacing, ...rest } = props;
  const resolvedProps = resolveTextProps({ variant, fontSize, lineHeight });

  return (
    <ChakraText
      {...resolvedProps}
      marginBottom={spacing ? "1em" : 0}
      {...rest}
      ref={ref}
    />
  );
};
