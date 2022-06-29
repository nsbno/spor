import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  useTheme,
  VariantProps,
} from "@shopify/restyle";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import {
  InformationOutline24Icon,
  DeleteCircleOutline24Icon,
  SuccessOutline24Icon,
} from "@vygruppen/spor-icon-react-native";
import React from "react";

type Variant = VariantProps<Theme, "messageBoxVariants", "variant">;
const variant = createVariant({
  themeKey: "messageBoxVariants",
});

type RestyleProps = SpacingProps<Theme> & Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  variant,
]);

type MessageBoxVariant = "success" | "info" | "error";
type MessageBoxProps = {
  variant: MessageBoxVariant;
  children: string;
  close_button?: false | "true" | string;
  onPress?: () => void;
};

const getIconVariant = (variant: MessageBoxVariant) => {
  switch (variant) {
    case "success":
      return <SuccessOutline24Icon />;
    case "info":
      return <InformationOutline24Icon />;
    case "error":
      return <DeleteCircleOutline24Icon />;
    default:
      return null;
  }
};

export const MessageBox = ({
  variant,
  children,
  close_button = false,
  onPress,
  ...rest
}: MessageBoxProps) => {
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

  const theme = useTheme<Theme>();
  const icon = getIconVariant(variant);
  return (
    <Box style={style as any} {...rest}>
      <Box flexDirection="row">
        <Box mr={1}>{icon}</Box>
        <Text variant="md">{children}</Text>
      </Box>
    </Box>
  );
};
