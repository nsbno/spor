import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  useTheme,
  VariantProps,
} from "@shopify/restyle";
import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";

type Variant = VariantProps<Theme, "alertVariant", "variant">;
const variant = createVariant({ themeKey: "alertVariant" });

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  variant,
]);

type AlertVariant =
  | "alternativtransport"
  | "important-message"
  | "transitiontime"
  | "error"
  | "confirmation"
  | "info";

type AlertProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  variant: AlertVariant;
};

export const Alert = ({ children, variant, ...props }: AlertProps) => {
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...props,
  });
  const theme = useTheme<Theme>();

  return (
    <Box style={style as any} {...props}>
      <Text variant="md">{children}</Text>
    </Box>
  );
};
