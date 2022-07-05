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
import {
  DeleteCircleOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
} from "@vygruppen/spor-icon-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import React from "react";

type Variant = VariantProps<Theme, "messageBoxVariant", "variant">;
const variant = createVariant({ themeKey: "messageBoxVariant" });

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  variant,
]);
type MessageBoxVariant = "success" | "info" | "error";
type MessageBoxProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  variant: MessageBoxVariant;
  button?: false | "close-button" | string;
  onPress?: () => void;
};

export const MessageBox = ({
  button = false,
  children,
  variant,
  onPress,
  ...props
}: MessageBoxProps) => {
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...props,
  });
  const theme = useTheme<Theme>();
  const icon = getVariantIcon({
    variant: variant,
    color: theme.colors.darkGrey,
  });

  return (
    <Box style={style as any} {...props}>
      <Box flexDirection="row">
        <Box mr={1}>{icon}</Box>
        <Text variant="md">{children}</Text>
      </Box>
    </Box>
  );
};

type GetVariantIconArgs = {
  variant: MessageBoxVariant;
  color: string;
};
const getVariantIcon = ({ variant, color }: GetVariantIconArgs) => {
  switch (variant) {
    case "success":
      return <SuccessOutline24Icon color={color} />;
    case "info":
      return <InformationOutline24Icon color={color} />;
    case "error":
      return <DeleteCircleOutline24Icon color={color} />;
    default:
      return null;
  }
};
