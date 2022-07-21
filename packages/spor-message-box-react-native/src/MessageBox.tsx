import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import {
  InformationOutline24Icon,
  DeleteCircleOutline24Icon,
  SuccessOutline24Icon,
  CloseOutline18Icon,
} from "@vygruppen/spor-icon-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Button } from "@vygruppen/spor-button-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
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
type MessageBoxProps = BaseProps & ActionProps;

type BaseProps = Exclude<RestyleProps, "variant"> & {
  variant: MessageBoxVariant;
  children: string;
};

type WithCloseButtonProps = {
  actionType: "close";
  onPress: () => void;
};

type WithButtonProps = {
  actionType: "button";
  buttonText: string;
  onPress: () => void;
};

type WithoutButtonProps = {
  actionType: "none";
};

type ActionProps = WithCloseButtonProps | WithButtonProps | WithoutButtonProps;

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

export const MessageBox = (props: MessageBoxProps) => {
  const { variant, children, actionType, ...rest } = props;
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

  const icon = getIconVariant(variant);

  return (
    <Box flexDirection="row" style={style as any} {...rest}>
      <Box flex={1} flexDirection="row" alignItems="center">
        <Box mr={1} alignContent="center">
          {icon}
        </Box>
        <Box flex={1}>
          <Text variant="md">{children}</Text>
        </Box>
      </Box>

      {isCloseButtonProps(props) ? (
        <Button
          size="xs"
          variant="ghost"
          onPress={props.onPress}
          leftIcon={<CloseOutline18Icon />}
        ></Button>
      ) : (
        isButtonProps(props) && (
          <Button size="xs" variant="additional" onPress={props.onPress}>
            {props.buttonText}
          </Button>
        )
      )}
    </Box>
  );
};

function isCloseButtonProps(
  props: MessageBoxProps
): props is BaseProps & WithCloseButtonProps {
  return props.actionType === "close";
}

function isButtonProps(
  props: MessageBoxProps
): props is BaseProps & WithButtonProps {
  return props.actionType === "button";
}
