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
import { DropdownDownFill18Icon, DropdownUpFill18Icon, DropdownUpFill24Icon, DropdownDownFill24Icon, DropdownDownFill30Icon, DropdownUpFill30Icon } from '@vygruppen/spor-icon-react-native';


type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  VariantProps<Theme, "expandableVariant", "variant">
const variant = createVariant({ themeKey: "expandableVariant" });

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  variant
]);

type ExpandableVariant = "card" | "outline" | "list";
type ExpandableSize = "sm" | "md" | "lg";

type ExpandableProps = Exclude<RestyleProps, "variant"> & {
  label: string,
  children?: React.ReactNode,
  leftIcon?: JSX.Element,
  variant: ExpandableVariant,
  isInitiallyExpanded?: Boolean
  size?: ExpandableSize,
  onToggleIsExpanded?: (isExpanding: boolean) => void
};

export const Expandable = ({
  label,
  leftIcon,
  onToggleIsExpanded,
  variant,
  children,
  size = "sm",
  isInitiallyExpanded = false,
  ...props
}: ExpandableProps) => {
  const theme = useTheme<Theme>();
  const restyleProps: Record<string, any> = { ...props, variant };
  const { style } = useRestyle(restyleFunctions, restyleProps);
  const [isPressed, setPressed] = useState(false);
  const pressedStyle = theme.getExpandableVariantPressedState(variant)
  const [isExpanded, toggleExpanded] = useState(isInitiallyExpanded)
  function handleToggleIsExpanded() {
    toggleExpanded(!isExpanded)
  }
  function onPress(): void {
    setPressed(true)
    handleToggleIsExpanded()
  }

  return (
    <Box style={style as any} mb={2}>
      < Pressable style={isPressed ? pressedStyle : { padding: 12 }}
        onPressIn={() => { onPress() }}
        onPressOut={() => setPressed(false)}>
        <Box style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {leftIcon}
          <Text variant={size} fontWeight="bold"> {label}</Text>
          {getDropdownUpIcon(isExpanded, size)}
        </Box  >
      </Pressable >
      {isExpanded && <ExpandableItem>{children}</ExpandableItem>}
    </Box >

  )
}

function getSizeOfDrowDownUpIcon(size: string) {
  switch (size) {
    case "sm":
      return <DropdownUpFill18Icon></DropdownUpFill18Icon>
    case "md":
      return <DropdownUpFill24Icon></DropdownUpFill24Icon>
    case "lg":
      return <DropdownUpFill30Icon></DropdownUpFill30Icon>
    default:
      null
  }
}

function getSizeOfDrowDownDownIcon(size: string) {
  switch (size) {
    case "sm":
      return <DropdownDownFill18Icon></DropdownDownFill18Icon>
    case "md":
      return <DropdownDownFill24Icon></DropdownDownFill24Icon>
    case "lg":
      return <DropdownDownFill30Icon></DropdownDownFill30Icon>
    default:
      null
  }
}

function getDropdownUpIcon(isExpanded: Boolean, size: string) {
  if (isExpanded) {
    return getSizeOfDrowDownUpIcon(size)
  } else {
    return getSizeOfDrowDownDownIcon(size)
  }
}
