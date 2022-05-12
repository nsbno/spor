import {
  color,
  ColorProps,
  composeRestyleFunctions,
  createVariant,
  opacity,
  OpacityProps,
  spacing,
  SpacingProps,
  textShadow,
  TextShadowProps,
  typography,
  TypographyProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import React from "react";
import { Text } from "react-native";
import { Theme } from "../spor-theme-react-native";

type RestyleProps = SpacingProps<Theme> &
  ColorProps<Theme> &
  OpacityProps<Theme> &
  TypographyProps<Theme> &
  TextShadowProps<Theme> &
  VariantProps<Theme, "textVariants", "variant">;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  color,
  opacity,
  typography,
  textShadow,
  spacing,
  createVariant({
    themeKey: "textVariants",
    property: "variant",
  }),
]);

export type HeadingProps = RestyleProps & { children: React.ReactNode };
/**
 * Create your own fancy headings with this component.
 *
 * You can specify the textStyle, which is one of "xs", "sm", "md", "lg", "xl-sans", "xs-serif" and "2xl". The default is "xl-sans".
 *
 * ```tsx
 * <Heading size="2xl">Look at me!</Heading>
 * ```
 */
export const Heading = ({ children, ...props }: HeadingProps) => {
  const restyleProps: any = useRestyle(restyleFunctions, props);
  return (
    <Text accessibilityRole="header" {...restyleProps}>
      {children}
    </Text>
  );
};
