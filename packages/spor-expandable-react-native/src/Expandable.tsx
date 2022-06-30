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
} from "@shopify/restyle";
import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from '@vygruppen/spor-typography-react-native';
import { Pressable } from 'react-native';
import { ExpandableItem } from './ExpandableItem';
import { DropdownDownFill30Icon } from '@vygruppen/spor-icon-react-native';


type Variant = VariantProps<Theme, "expandableVariant", "variant">;
const variant = createVariant({ themeKey: "expandableVariant" });
type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant & VariantProps<Theme, "expandableVariantPressed", "pressed">;
const variantPressed = createVariant({ themeKey: "expandableVariantPressed", property: "pressed" });

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

  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...props,
  });
  console.log(style)
  const theme = useTheme<Theme>();

  const [isPressed, setIsPressed] = useState(false);

  const [isExpanded, toggleExpanded] = useState(isInitiallyExpanded)
  function handleToggleIsExpanded() {
    toggleExpanded(!isExpanded)
  }

  const { pressedStyle } = getPressedStyle({ variant: variant, pressedStyle: theme })
  return (

    < Pressable style={isPressed ? pressedStyle : style as any}
      {...props}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}>
      {leftIcon && leftIcon}
      <Box mr={2} >
        <Text variant="md"> {label}</Text>
      </Box>
      {isPressed && <ExpandableItem>{children}</ExpandableItem>}
    </Pressable >

  )
}



type GetPressedStyleArgs = {
  variant: ExpandableVariant;
  pressedStyle: Theme;
};
const getPressedStyle = ({ variant, pressedStyle }: GetPressedStyleArgs) => {

  switch (variant) {
    case "outline":
      console.log(pressedStyle.expandableVariantPressed.outline)
      return pressedStyle.expandableVariantPressed.outline
    case "card":
      console.log([pressedStyle.expandableVariantPressed.card])
      return pressedStyle.expandableVariantPressed.card
    default:
      return pressedStyle.expandableVariantPressed.default
  }
};




