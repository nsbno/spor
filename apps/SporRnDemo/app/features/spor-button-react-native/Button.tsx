import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../spor-theme-react-native";

type RestyleProps = SpacingProps<Theme> &
  VariantProps<Theme, "buttonVariants", "variant"> &
  VariantProps<Theme, "buttonSizes", "size">;

const sizes = createVariant({ themeKey: "buttonSizes", property: "size" });
const variants = createVariant({
  themeKey: "buttonVariants",
  property: "variant",
});

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  sizes,
  variants,
]);

type Props = RestyleProps & {
  onPress: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

/** A button. */
export const Button = ({
  onPress,
  children,
  isDisabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  if (isDisabled) {
    rest.variant = "disabled";
  }
  const { style, ...viewProps } = useRestyle(restyleFunctions, rest);

  const fontSize = findProperty("fontSize", style as any[]);
  const fontWeight = findProperty("fontWeight", style as any[]);
  const color = findProperty("color", style as any[]);

  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <View style={style as any} {...viewProps}>
        {isLoading ? (
          <ActivityIndicator color={color} />
        ) : (
          <Text style={{ color, fontSize, fontWeight }}>{children}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

// TODO: Make this more pretty
const findProperty = (propertyName: string, styles: any[]) => {
  return styles
    .map((style) => style[propertyName])
    .reduce((prev, next) => (next ? next : prev)) as any;
};
