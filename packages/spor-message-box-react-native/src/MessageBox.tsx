import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import { Button } from "@vygruppen/spor-button-react-native";
import {
  CloseOutline18Icon,
  DeleteCircleOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
} from "@vygruppen/spor-icon-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
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
  actionType?: "none";
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
/**
 * A message box component.
 *
 * Message boxes can have a close button, a text button or neither. For the button variants, you need to pass an `onPress` function, and specify the action type and optional text:
 *
 * ```tsx
 * <MessageBox variant="success">
 *   Great job!
 * </MessageBox>
 * <MessageBox variant="info" actionType="close" onPress={handleClose}>
 *   The train leaves from platform 2.
 * </MessageBox>
 * <MessageBox
 *  variant="error"
 *  actionType="button"
 *  buttonText="Lukk"
 *  onPress={handleClose}
 * >
 *   Something went wrong
 * </MessageBox>
 * ```
 *
 * Message boxes comes in three different variants, with different icons and colors – success, info and error.
 *
 * ```tsx
 * <MessageBox variant="success">
 *  That went well
 * </MessageBox>
 * <MessageBox variant="info">
 *  Just FYI
 * </MessageBox>
 * <MessageBox variant="error">
 *  Insufficient funds
 * </MessageBox>
 * ```
 */
export const MessageBox = (props: MessageBoxProps) => {
  const { variant, children, actionType, ...rest } = props;
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

  const icon = getIconVariant(variant);

  return (
    <Box flexDirection="row" style={style as any} {...rest}>
      <Box flex={1} flexDirection="row">
        <Box marginRight={1}>{icon}</Box>
        <Box flex={1} alignSelf="center">
          <Text variant="md">{children}</Text>
        </Box>
      </Box>

      {isCloseButtonProps(props) && (
        <Button
          size="xs"
          variant="ghost"
          onPress={props.onPress}
          leftIcon={<CloseOutline18Icon />}
        />
      )}
      {isButtonProps(props) && (
        <Button
          size="xs"
          variant="additional"
          onPress={props.onPress}
          marginLeft={1}
        >
          {props.buttonText}
        </Button>
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
