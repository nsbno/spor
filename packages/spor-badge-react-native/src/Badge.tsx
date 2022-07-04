import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { AltTransportOutline18Icon } from "@vygruppen/spor-icon-react-native";
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

type BadgeProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  variant?:
    | "yellow"
    | "light-yellow"
    | "red"
    | "green"
    | "orange"
    | "blue"
    | "grey"
    | "white";
  borderStyle: boolean;
  icon?: React.ReactNode;
};

export const Badge = ({
  children,
  borderStyle = false,
  variant,
  icon,
  ...props
}: BadgeProps) => {
  const { style } = useRestyle(restyleFunctions, { variant, ...props });
  let width = 0;
  borderStyle ? (width = 1) : (width = 0);
  return (
    <Box borderWidth={width} style={style as any} {...props}>
      <Box paddingRight={0.5}>{icon}</Box>
      <Text variant="xs" fontWeight="bold">
        {children}
      </Text>
    </Box>
  );
};
