import {
  BorderProps,
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  VariantProps,
  border,
} from "@shopify/restyle";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Button } from "@vygruppen/spor-button-react-native";
import type { Theme } from "@vygruppen/spor-theme-react-native";
import {
  SuccessFill24Icon,
  SuccessFill30Icon,
  CloseOutline18Icon,
} from "@vygruppen/spor-icon-react-native";
import React from "react";
import { Pressable } from "react-native";

type RestyleProps = SpacingProps<Theme> &
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
  children: React.ReactNode;
  onPress?: () => void;
  onClose?: () => void;
  selected?: boolean;
};
/**
 * Renders a card.
 *
 * The most basic version looks like this:
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
  children,
  onPress,
  onClose,
  size = "lg",
  selected = false,
  ...props
}: CardProps) => {
  const restyleProps: Record<string, any> = { ...props, size };
  const [isPressed, setPressed] = React.useState(false);
  const isPressable =
    onPress !== undefined && restyleProps.colorScheme !== "disabled";

  if (props.p === undefined && props.padding === undefined) {
    restyleProps.p = 3;
  }

  if (selected) {
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
        <Box
          style={style as any}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {selected && (
            <Box alignSelf={"center"} marginRight="sm">
              {size === "lg" ? <SuccessFill30Icon /> : <SuccessFill24Icon />}
            </Box>
          )}
          <Box flex={1} justifyContent="center">
            {children}
          </Box>
          {onClose && (
            <Button
              marginLeft={"sm"}
              onPress={onClose}
              variant={"ghost"}
              leftIcon={<CloseOutline18Icon />}
            ></Button>
          )}
        </Box>
      </Pressable>
    );
  }

  return (
    <Box style={style as any} flexDirection="row">
      {selected && (
        <Box alignSelf={"center"} marginRight="sm">
          {size === "lg" ? <SuccessFill30Icon /> : <SuccessFill24Icon />}
        </Box>
      )}
      <Box flex={1} justifyContent="center">
        {children}
      </Box>
      {onClose && (
        <Button
          marginRight={"sm"}
          onPress={onClose}
          variant={"ghost"}
          leftIcon={<CloseOutline18Icon />}
        ></Button>
      )}
    </Box>
  );
};
