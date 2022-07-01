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
import { DropdownDownFill30Icon, DropdownUpFill30Icon } from '@vygruppen/spor-icon-react-native';


type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  VariantProps<Theme, "expandableVariant", "variant">

const variant = createVariant({ themeKey: "expandableVariant" });
const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  variant
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

  const restyleProps: Record<string, any> = { ...props, variant };

  const { style } = useRestyle(restyleFunctions, restyleProps);

  const [isPressed, setIsPressed] = useState(false);
  const pressedStyle = theme.getExpandableVariantPressedState(variant)
  const [isExpanded, toggleExpanded] = useState(isInitiallyExpanded)
  function handleToggleIsExpanded() {
    toggleExpanded(!isExpanded)
  }
  function onPress(): void {
    setIsPressed(true)
    handleToggleIsExpanded()
  }
  return (

    < Pressable style={[style, isPressed ? pressedStyle : undefined]}

      onPressIn={() => { onPress() }
      }
      onPressOut={() => setIsPressed(false)}>
      <Box style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {leftIcon && leftIcon}
        <Text variant="md"> {label}</Text>
        <DropdownDownFill30Icon></DropdownDownFill30Icon>
      </Box>
      {isExpanded && <ExpandableItem>{children}</ExpandableItem>}
    </Pressable >

  )
}






