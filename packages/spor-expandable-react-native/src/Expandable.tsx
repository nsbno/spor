import { useState } from 'react';
import {
  composeRestyleFunctions,
  createVariant,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  useTheme,
  VariantProps,
  RestyleFunctionContainer
} from "@shopify/restyle";
import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from '@vygruppen/spor-typography-react-native';
import { Pressable, ViewStyle } from 'react-native';
import { ExpandableItem } from './ExpandableItem';
import { DropdownDownFill30Icon } from '@vygruppen/spor-icon-react-native';




type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  VariantProps<Theme, "expandableVariant", "variant"> &
  VariantProps<Theme, "expandableVariantPressed", "pressed">;

const variant = createVariant({ themeKey: "expandableVariant" });
const variantPressed = createVariant({ themeKey: "expandableVariantPressed" });
const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  variant,
  variantPressed
]);

type ExpandableVariant = "card" | "outline" | "text";

type ExpandableProps = Exclude<RestyleProps, "variant"> & {
  label: string,
  children?: React.ReactNode,
  leftIcon?: JSX.Element,
  variant: ExpandableVariant,
  isInitiallyExpanded?: Boolean
  onToggleIsExpanded?: (isExpanding: boolean) => void
};

export const Expandable = ({
  label,
  leftIcon,
  onToggleIsExpanded,
  variant,
  children,
  isInitiallyExpanded = false,
  ...props
}: ExpandableProps) => {
  const theme = useTheme<Theme>();

  const restyleProps: Record<string, any> = { ...props, variant, variantPressed };

  const { style } = useRestyle(restyleFunctions, restyleProps);

  const [isPressed, setIsPressed] = useState(false);
  const pressedStyle = getPressedStyle({ variant: variant, pressedStyle: theme })
  console.log(pressedStyle)
  const [isExpanded, toggleExpanded] = useState(isInitiallyExpanded)
  function handleToggleIsExpanded() {
    toggleExpanded(!isExpanded)
  }
  function onPress(): void {
    setIsPressed(true)
    handleToggleIsExpanded()
  }
  return (

    < Pressable style={isPressed ? pressedStyle as any : style as any}
      {...props}
      onPressIn={() => { onPress() }
      }
      onPressOut={() => setIsPressed(false)}>
      {leftIcon && leftIcon}
      <Box mr={2} >
        <Text variant="md"> {label}</Text>
      </Box>
      {isExpanded && <ExpandableItem>{children}</ExpandableItem>}
    </Pressable >

  )
}

type GetPressedStyleArgs = {
  variant: ExpandableVariant;
  pressedStyle: Theme;
};
function getPressedStyle({ variant, pressedStyle }: GetPressedStyleArgs): any {
  switch (variant) {
    case "outline":
      return pressedStyle.expandableVariantPressed.outline
    case "card":
      return pressedStyle.expandableVariantPressed.card
    default:
      return pressedStyle.expandableVariantPressed.defaults
  }
};




