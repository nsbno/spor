import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import {
  SpacingProps,
  SpacingShorthandProps,
  VariantProps,
  createVariant,
  useRestyle,
  composeRestyleFunctions,
  spacing,
  spacingShorthand,
} from "@shopify/restyle";

type Variant = VariantProps<Theme, "badgeColorSchemes", "colorScheme">;
const colorScheme = createVariant({
  themeKey: "badgeColorSchemes",
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

type ColorVariants =
  | "yellow"
  | "light-yellow"
  | "red"
  | "green"
  | "orange"
  | "blue"
  | "grey"
  | "white";

type BadgeProps = Exclude<RestyleProps, "variant"> & {
  children?: string;
  colorScheme: ColorVariants;
  variant?: "solid" | "outline";
  icon?: JSX.Element;
};

export const Badge = ({
  children,
  colorScheme,
  variant = "solid",
  icon,
  ...props
}: BadgeProps) => {
  const { style } = useRestyle(restyleFunctions, { colorScheme, ...props });
  const borderWidth = variant === "outline" ? 1 : 0;
  return (
    <Box borderWidth={borderWidth} style={style as any} {...props}>
      {icon && <Box paddingRight={0.5}>{icon}</Box>}
      <Text variant="xs" fontWeight="bold">
        {children}
      </Text>
    </Box>
  );
};
