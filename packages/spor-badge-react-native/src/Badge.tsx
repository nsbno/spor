import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import {
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
  createVariant,
} from "@shopify/restyle";
import { Theme } from "@vygruppen/spor-theme-react-native";

type Variant = VariantProps<Theme, "badgeColorSchemes", "colorScheme">;
const colorScheme = createVariant({ themeKey: "badgeColorSchemes" });

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

type BadgeProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  colorScheme?:
    | "yellow"
    | "light-yellow"
    | "red"
    | "green"
    | "orange"
    | "blue"
    | "grey"
    | "white";
  variant?: "soild" | "outline";
  icon?: React.ReactElement;
};

export const Badge = ({ variant, colorScheme, ...props }: BadgeProps) => {
  return (
    <Box>
      <Text>Hi there</Text>
    </Box>
  );
};
