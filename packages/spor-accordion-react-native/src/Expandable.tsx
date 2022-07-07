import { useState } from "react";
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
import { Text } from "@vygruppen/spor-typography-react-native";
import { Pressable } from "react-native";
import {
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
  DropdownUpFill24Icon,
  DropdownDownFill24Icon,
  DropdownDownFill30Icon,
  DropdownUpFill30Icon,
} from "@vygruppen/spor-icon-react-native";
import { ExpandableItem } from "./ExpandableItem";
type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  VariantProps<Theme, "expandableVariant", "variant">;
const variant = createVariant({ themeKey: "expandableVariant" });

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  variant,
]);

type ExpandableVariant = "card" | "outline" | "list";
type ExpandableSize = "sm" | "md" | "lg";

type ExpandableProps = Exclude<RestyleProps, "variant"> & {
  title: string;
  children: React.ReactNode;
  leftIcon?: JSX.Element;
  variant: ExpandableVariant;
  defaultExpanded?: boolean;
  size?: ExpandableSize;
};

export const Expandable = ({
  title,
  leftIcon,
  variant,
  children,
  size = "sm",
  defaultExpanded = false,
  ...props
}: ExpandableProps) => {
  const theme = useTheme<Theme>();
  const restyleProps: Record<string, any> = { ...props, variant };
  const { style } = useRestyle(restyleFunctions, restyleProps);
  const [isPressed, setPressed] = useState(false);
  const pressedStyle = theme.getExpandableVariantPressedState(variant);
  const [isExpanded, toggleExpanded] = useState(defaultExpanded);

  return (
    <Box style={style as any} m={2}>
      <Pressable
        style={isPressed ? pressedStyle : { padding: 12 }}
        onPress={() => toggleExpanded(!isExpanded)}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <Box flexDirection="row" justifyContent="space-between">
          {leftIcon}
          <Text variant={size} fontWeight="bold">
            {title}
          </Text>
          {getDropdownIcon(isExpanded, size)}
        </Box>
      </Pressable>
      {isExpanded && <ExpandableItem>{children}</ExpandableItem>}
    </Box>
  );
};

function getDropDownUpIcon(size: string) {
  switch (size) {
    case "sm":
      return <DropdownUpFill18Icon />;
    case "md":
      return <DropdownUpFill24Icon />;
    case "lg":
      return <DropdownUpFill30Icon />;
    default:
      return null;
  }
}

function getDropDownDownIcon(size: string) {
  switch (size) {
    case "sm":
      return <DropdownDownFill18Icon />;
    case "md":
      return <DropdownDownFill24Icon />;
    case "lg":
      return <DropdownDownFill30Icon />;
    default:
      return null;
  }
}

function getDropdownIcon(isExpanded: boolean, size: string) {
  if (isExpanded) {
    return getDropDownUpIcon(size);
  } else {
    return getDropDownDownIcon(size);
  }
}
