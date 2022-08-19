import {
  border,
  BorderProps,
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import { Button } from "@vygruppen/spor-button-react-native";
import {
  CloseOutline18Icon,
  SuccessFill24Icon,
  SuccessFill30Icon,
} from "@vygruppen/spor-icon-react-native";
import type { BoxProps } from "@vygruppen/spor-layout-react-native";
import { Box } from "@vygruppen/spor-layout-react-native";
import type { Theme } from "@vygruppen/spor-theme-react-native";
import React from "react";
import { Pressable } from "react-native";

type RestyleProps = BoxProps &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  VariantProps<Theme, "cardSizes", "size"> &
  VariantProps<Theme, "cardColorSchemes", "colorScheme"> &
  VariantProps<Theme, "cardOnPressColorSchemes", "onPressColorScheme"> &
  VariantProps<Theme, "cardSelectedColorSchemes", "selectedColorScheme"> &
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

const onPressColorSchemes = createVariant({
  themeKey: "cardOnPressColorSchemes",
  property: "onPressColorScheme",
});

const selectedColorSchemes = createVariant({
  themeKey: "cardSelectedColorSchemes",
  property: "selectedColorScheme",
});

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  elevations,
  sizes,
  border,
  onPressColorSchemes,
  selectedColorSchemes,
  colorSchemes,
]);

type CardProps = Exclude<RestyleProps, "elevationLevel"> & {
  accessibilityLabel?: string;
  children: React.ReactNode;
  onPress?: () => void;
  onClose?: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
};

/**
 * Renders a card.
 *
 * Card takes the following props : children, onPress, onClose, isSelected, isDisabled and style.
 *
 * ```tsx
 * <Card colorScheme="white">
 *   <Text variant="md">Content</Text>
 * </Card>
 * ```
 *
 * There are lots of color schemes available including disabled. You can also set the size as either `sm` or `lg`. The default is `lg`.
 *
 * ```tsx
 * <Card colorScheme="orange" size="sm">
 *   <Text variant="md">A smaller card</Text>
 * </Card>
 * ```
 *
 * Cards are not interactive by default. You can set a `onPress` handler to make them interactive. This will also give it a drop shadow.
 *
 * ```tsx
 * <Card colorScheme="blue" onPress={handlePress}>
 *   <Text variant="md">Click for profit</Text>
 * </Card>
 * ```
 *
 * A close icon can be added to the card. By passing an `onClose` handler, the close icon will appear, and when clicked the onClose handler will be called.
 *
 * ```tsx
 * <Card colorScheme="blue" onClose={handleClose}>
 *  <Text variant="md">Click for profit</Text>
 * </Card>
 * ```
 *
 * You can also set the `selected` property to make the card appear selected.
 *
 * ```tsx
 * <Card colorScheme="white" selected={true}>
 *   <Text variant="md">Click for profit</Text>
 * </Card>
 * ```
 */
export const Card = ({
  accessibilityLabel,
  children,
  onPress,
  onClose,
  size = "lg",
  isSelected = false,
  isDisabled = false,
  ...props
}: CardProps) => {
  const restyleProps: Record<string, any> = { ...props, size };
  const [isPressed, setPressed] = React.useState(false);
  const isPressable =
    onPress !== undefined &&
    restyleProps.colorScheme !== "disabled" &&
    !isDisabled;

  if (props.p === undefined && props.padding === undefined) {
    restyleProps.p = 3;
  }
  if (isDisabled) {
    restyleProps.colorScheme = "disabled";
  }

  if (isSelected) {
    restyleProps.selectedColorScheme = restyleProps.colorScheme;
  }

  if (isPressable) {
    if (isPressed) {
      restyleProps.elevationLevel = size === "lg" ? "sm" : "none";
      restyleProps.onPressColorScheme = restyleProps.colorScheme;
    } else {
      restyleProps.elevationLevel = size === "lg" ? "md" : "sm";
    }
  }

  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
  };
  const { style } = useRestyle(restyleFunctions, restyleProps);
  const selectedIconIfEnabled = isSelected && (
    <Box
      marginRight={2}
      alignSelf="center"
      style={size == "sm" ? { marginVertical: -2 } : { marginVertical: -5 }}
    >
      {size === "lg" ? <SuccessFill30Icon /> : <SuccessFill24Icon />}
    </Box>
  );
  const childrenBox = <Box flex={1}>{children}</Box>;
  const closeButtonIfEnabled = onClose !== undefined && (
    <Box alignSelf="center">
      <Button
        marginLeft={2}
        onPress={onClose}
        variant={"ghost"}
        leftIcon={<CloseOutline18Icon />}
      />
    </Box>
  );

  if (isPressable) {
    return (
      <Pressable
        accessibilityLabel={accessibilityLabel}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={[
          {
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: "auto",
            flexDirection: "row",
          },
          style as any,
        ]}
      >
        <Box flexDirection="row" flex={1}>
          {selectedIconIfEnabled}
          {childrenBox}
          {closeButtonIfEnabled}
        </Box>
      </Pressable>
    );
  }

  return (
    <Box
      style={style as any}
      flexDirection="row"
      flexGrow={1}
      flexShrink={1}
      flexBasis="auto"
    >
      <Box flexDirection="row" flex={1}>
        {childrenBox}
        {closeButtonIfEnabled}
      </Box>
    </Box>
  );
};
