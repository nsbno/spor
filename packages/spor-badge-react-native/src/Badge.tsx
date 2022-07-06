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
  variant: ColorVariants;
  borderOutline: boolean;
  icon?: JSX.Element;
};

export const Badge = ({
  children,
  variant,
  borderOutline = false,
  icon,
  ...props
}: BadgeProps) => {
  const { style } = useRestyle(restyleFunctions, { variant, ...props });
  const borderWidth = borderOutline ? 1 : 0;
  return (
    <Box
      borderWidth={borderWidth}
      justifyContent="center"
      style={style as any}
      {...props}
    >
      {icon && <Box paddingRight={0.5}>{icon}</Box>}
      <Text variant="xs" fontWeight="bold">
        {children}
      </Text>
    </Box>
  );
};
