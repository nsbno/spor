import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import React, { useEffect, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";

type Variant = VariantProps<Theme, "alertColorScheme", "colorScheme">;
const colorScheme = createVariant({
  themeKey: "alertColorScheme",
  property: "colorScheme",
});

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  colorScheme,
]);

export type ColorVariants =
  | "yellow"
  | "light-yellow"
  | "orange"
  | "red"
  | "green"
  | "blue";

type AlertProps = Exclude<RestyleProps, "variant"> & {
  children?: React.ReactNode;
  colorScheme: ColorVariants;
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  title: React.ReactNode;
  weight?: "bold";
};

export const BaseAlert = ({
  children,
  colorScheme,
  leftIcon,
  rightIcon,
  title,
  weight,
  ...props
}: AlertProps) => {
  const { style } = useRestyle(restyleFunctions, {
    colorScheme,
    ...props,
  });

  return (
    <Box style={style as any} {...props}>
      <Box flexDirection="row">
        {leftIcon}
        <Text marginLeft={2} style={{ flex: 1 }} fontWeight={weight}>
          {title}
        </Text>
        {rightIcon}
      </Box>
      {children}
    </Box>
  );
};
