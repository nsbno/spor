import React from "react";
import { Text, TextProps } from "./Text";

export type HeadingProps = TextProps;
/**
 * Create your own fancy headings with this component.
 *
 * You can specify the textStyle, which is one of "xs", "sm", "md", "lg", "xl-sans", "xs-serif" and "2xl". The default is "xl-sans".
 *
 * ```tsx
 * <Heading size="2xl">Look at me!</Heading>
 * ```
 */
export const Heading = (props: HeadingProps) => {
  return <Text accessibilityRole="header" {...props} />;
};
