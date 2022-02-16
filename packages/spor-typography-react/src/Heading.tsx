import { HeadingProps as ChakraHeadingProps, Text } from "@chakra-ui/react";
import type tokens from "@vygruppen/spor-design-tokens";
import React from "react";

type TextStyles = keyof typeof tokens.font.style;

export type HeadingProps = ChakraHeadingProps & {
  textStyle: TextStyles;
};
/**
 * Create your own fancy headings with this component.
 *
 * You can specify the textStyle, which is one of "xs", "sm", "md", "lg", "xl-sans", "xs-serif" and "2xl". The default is "xl-sans".
 *
 * ```tsx
 * <Heading textStyle="2xl">Look at me!</Heading>
 * ```
 *
 * You can also specify what level of heading you want. You do this with the `as` prop. The default is "h2".
 *
 * ```tsx
 * <Heading as="h1">Page heading</Heading>
 * ```
 */
export const Heading = ({
  textStyle = "xl-display",
  as = "h2",
  ...props
}: any) => {
  return <Text as={as} textStyle={textStyle} {...props} />;
};
