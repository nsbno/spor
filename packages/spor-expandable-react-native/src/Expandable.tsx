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
import { DropdownDownFill24Icon } from '@vygruppen/spor-icon-react-native';


type Variant = VariantProps<Theme, "expandableVariant", "variant">;
const variant = createVariant({ themeKey: "expandableVariant" });
type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  variant,
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
  const theme = useTheme<Theme>();

  const [isExpanded, toggleExpanded] = useState(isInitiallyExpanded)
  function handleToggleIsExpanded() {
    toggleExpanded(!isExpanded)
  }


  return (
    < Box style={style as any} {...props}>
      {leftIcon && leftIcon
      }
      <Box mr={2}>
        <Text variant="md" fontWeight="bold" > {label}</Text>
        <Pressable onPress={handleToggleIsExpanded}>
        </Pressable>
      </Box>
    </Box >

  )
}



