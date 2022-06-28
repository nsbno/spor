import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import type { Theme } from "@vygruppen/spor-theme-react-native";
import { LightInlineLoader } from "@vygruppen/spor-loader-react-native";
import React, { useState } from "react";
import {
  Platform,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import tokens from "@vygruppen/spor-design-tokens";
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

const ANDROID_VERSION_LOLLIPOP = 21;
const ANDROID_SUPPORTS_RIPPLE =
  Platform.OS === "android" && Platform.Version >= ANDROID_VERSION_LOLLIPOP;

type ButtonProps = Exclude<RestyleProps, "variant"> & {
  variant: ButtonVariant;
  onPress: () => void;
  children: string;
  disabled?: boolean;
  isLoading?: boolean;
  accessibilityLabel?: string;
};

/** A button. */
export const Button = ({
  variant,
  onPress,
  disabled = false,
  isLoading = false,
  accessibilityLabel,
  children,
  ...rest
}: ButtonProps) => {
  const [pressed, setPressed] = useState(false);

  const { style: restyleStyle } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });
  const activeStyle = pressed ? getActiveStyle(variant) : {};
  const disabledAndLoadingStyle =
    disabled || isLoading ? getDisabledAndLoadingStyle() : {};

  const style = [
    restyleStyle,
    activeStyle,
    disabledAndLoadingStyle,
  ] as StyleProp<TextStyle>;

  const flatStyles = StyleSheet.flatten(style);
  const fontSize = flatStyles.fontSize;
  const fontWeight = flatStyles.fontWeight;
  const color = flatStyles.color;
  const backgroundColor = flatStyles.backgroundColor;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      style={style}
      android_ripple={
        ANDROID_SUPPORTS_RIPPLE
          ? {
              color: backgroundColor,
            }
          : undefined
      }
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
          <LightInlineLoader height={"75%"} />
        </Box>
      )}
    </Pressable>
  );
};

function getDisabledAndLoadingStyle(): StyleProp<TextStyle> {
  return {
    color: tokens.color.alias.dimGrey.value,
    backgroundColor: tokens.color.alias.silver.value,
    borderWidth: 0,
  };
}

function getActiveStyle(variant: ButtonVariant): StyleProp<ViewStyle> {
  switch (variant) {
    case "primary":
      return {
        backgroundColor: tokens.color.alias.azure.value,
      };
    case "control":
      return {
        backgroundColor: tokens.color.alias.pine.value,
      };
    case "tertiary":
      return {
        backgroundColor: tokens.color.alias.lightGrey.value,
      };
    case "additional":
      return {
        backgroundColor: tokens.color.alias.mint.value,
        borderColor: tokens.color.alias.darkGrey.value,
      };
    default:
      return {
        backgroundColor: tokens.color.alias.mint.value,
      };
  }
}
