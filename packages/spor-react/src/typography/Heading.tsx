import { HeadingProps as ChakraHeadingProps, Text } from "@chakra-ui/react";
import type tokens from "@vygruppen/spor-design-tokens";
import React from "react";

type TextStyles = keyof typeof tokens.font.style;

export type HeadingProps = Omit<ChakraHeadingProps, "textStyle" | "as"> & {
  /** The heading level, e.g. h1, h2, h3... **/
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** The size and style of the heading */
  variant?: TextStyles;
};
/**
 * Create your own fancy headings with this component.
 *
 * You have to specify what level of heading you want, depending on the context you are using the heading in.
 * You do this with the `as` prop. The options are h1, h2, h3, h4, h5 and h6.
 *
 * ```tsx
 * <Heading as="h1">Page heading</Heading>
 * ```
 *
 * You can specify the variant, which is one of "xs", "sm", "md", "lg", "xl-sans", "xs-serif" and "2xl". The default is "xl-sans".
 *
 * ```tsx
 * <Heading as="h1" variant="2xl">Look at me!</Heading>
 * ```
 */
export const Heading = ({ as, variant = "xl-display", ...props }: any) => {
  return <Text as={as} textStyle={variant} {...props} />;
};
