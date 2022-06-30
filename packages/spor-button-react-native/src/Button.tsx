import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  useTheme,
  VariantProps,
} from "@shopify/restyle";
import type { Theme } from "@vygruppen/spor-theme-react-native";
import { LightInlineLoader } from "@vygruppen/spor-loader-react-native";
import React, { useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";
import { Box } from "@vygruppen/spor-layout-react-native";

const variants = createVariant({
  themeKey: "buttonVariants",
  property: "variant",
});

type ButtonVariant =
  | "primary"
  | "control"
  | "secondary"
  | "tertiary"
  | "additional";

type RestyleProps = SpacingProps<Theme> &
  VariantProps<Theme, "buttonVariants", "variant"> &
  VariantProps<Theme, "buttonSizes", "size">;

const sizes = createVariant({ themeKey: "buttonSizes", property: "size" });

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  sizes,
  variants,
]);

type ButtonProps = Exclude<RestyleProps, "variant"> & {
  variant: ButtonVariant;
  children: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  accessibilityLabel?: string;
};

/** A button. */
export const Button = ({
  variant,
  isDisabled = false,
  isLoading = false,
  accessibilityLabel,
  children,
  ...rest
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const { buttonVariantsActive, buttonVariantsDisabled } = useTheme();
  const { style: restyleStyle } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });
  const activeStyle = isPressed ? buttonVariantsActive[variant] : {};
  const disabledAndLoadingStyle =
    isDisabled || isLoading ? buttonVariantsDisabled : {};

  const style = [
    restyleStyle,
    activeStyle,
    disabledAndLoadingStyle,
  ] as StyleProp<TextStyle>;

  const flatStyles = StyleSheet.flatten(style);
  const { fontSize, fontWeight, color, backgroundColor } = flatStyles;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: isLoading }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={isDisabled || isLoading}
      accessibilityLabel={accessibilityLabel}
      style={style}
      android_ripple={{
        color: backgroundColor,
      }}
      {...rest}
    >
      <Text style={{ color, fontSize, fontWeight, opacity: isLoading ? 0 : 1 }}>
        {children}
      </Text>
      {isLoading && (
        <Box
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LightInlineLoader height="75%" />
        </Box>
      )}
    </Pressable>
  );
};
