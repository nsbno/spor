import React from "react";
import {
  VariantProps,
  createVariant,
  SpacingShorthandProps,
  SpacingProps,
  composeRestyleFunctions,
  spacingShorthand,
  spacing,
  useRestyle,
} from "@shopify/restyle";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";

type Variant = VariantProps<Theme, "badgeColorSchemes", "variant">;
const variant = createVariant({ themeKey: "badgeColorSchemes" });

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  variant,
]);

type BadgeColors =
  | "yellow"
  | "light_yellow"
  | "grey"
  | "white"
  | "orange"
  | "red"
  | "green"
  | "blue";

type BadgeProps = Exclude<RestyleProps, "variant"> & {
  variant: BadgeColors;
  children: string;
};

export const Badge = ({ children, variant, ...props }: BadgeProps) => {
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...props,
  });
  return (
    <Box style={style as any} {...props}>
      <Text>Hei</Text>
    </Box>
  );
};
