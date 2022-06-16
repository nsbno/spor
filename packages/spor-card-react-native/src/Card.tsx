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
import { Box } from "@vygruppen/spor-layout-react-native";
import type { Theme } from "@vygruppen/spor-theme-react-native";
import React from "react";
import { Pressable } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  VariantProps<Theme, "cardSizes", "size"> &
  VariantProps<Theme, "cardColorSchemes", "colorScheme"> &
  VariantProps<Theme, "cardElevations", "elevationLevel">;

const sizes = createVariant({ themeKey: "cardSizes", property: "size" });

const colorSchemes = createVariant({
  themeKey: "cardColorSchemes",
  property: "colorScheme",
});
const elevations = createVariant({
  themeKey: "cardElevations",
  property: "elevationLevel",
});

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  elevations,
  sizes,
  colorSchemes,
]);

type CardProps = Exclude<RestyleProps, "elevationLevel"> & {
  children: React.ReactNode;
  onPress?: () => void;
};
export const Card = ({
  children,
  onPress,
  size = "lg",
  ...props
}: CardProps) => {
  const restyleProps: Record<string, any> = { ...props, size };
  const [isPressed, setPressed] = React.useState(false);
  const isPressable = onPress !== undefined;

  if (props.p === undefined && props.padding === undefined) {
    restyleProps.p = 3;
  }

  if (isPressable) {
    if (isPressed) {
      restyleProps.elevationLevel = size === "lg" ? "sm" : "none";
    } else {
      restyleProps.elevationLevel = size === "lg" ? "md" : "sm";
    }
  }

  const { style } = useRestyle(restyleFunctions, restyleProps);

  if (isPressable) {
    const handlePressIn = () => {
      setPressed(true);
    };
    const handlePressOut = () => {
      setPressed(false);
      onPress();
    };

    return (
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Box style={style as any}>{children}</Box>
      </Pressable>
    );
  }

  return <Box style={style as any}>{children}</Box>;
};
