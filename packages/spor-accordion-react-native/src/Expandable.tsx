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
} from "@vygruppen/spor-icon-react-native";
import { ExpandableItem } from "./ExpandableItem";
type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  VariantProps<Theme, "expandableVariant", "variant"> &
  VariantProps<Theme, "expandableSizes", "size">;

const variant = createVariant({ themeKey: "expandableVariant" });
const sizes = createVariant({ themeKey: "expandableSizes", property: "size" });

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacingShorthand,
  sizes,
  variant,
]);

type ExpandableVariant = "card" | "outline" | "list";

type ExpandableProps = Exclude<RestyleProps, "variant"> & {
  title: string;
  children: React.ReactNode;
  leftIcon?: JSX.Element;
  variant: ExpandableVariant;
  defaultExpanded?: boolean;
  onToggle?: (isExpanded: boolean) => void;
};

export const Expandable = ({
  title,
  leftIcon,
  variant,
  children,
  defaultExpanded = false,
  size,
  onToggle,
  ...props
}: ExpandableProps) => {
  const theme = useTheme<Theme>();
  const restyleProps: Record<string, any> = { ...props, variant };
  const { style } = useRestyle(restyleFunctions, restyleProps);
  const [isPressed, setPressed] = useState(false);
  const pressedStyle = theme.getExpandableVariantPressedState(variant);
  const [isExpanded, setExpanded] = useState(defaultExpanded);

  function handlePress() {
    setExpanded(!isExpanded);
    if (onToggle) {
      onToggle(!isExpanded);
    }
  }

  return (
    <Box style={style as any} ml="sm" mb="sm">
      <Pressable
        style={isPressed ? pressedStyle : { padding: 12 }}
        onPress={handlePress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <Box flexDirection="row" justifyContent="space-between">
          <Box flexDirection="row" flex={1}>
            {leftIcon}
            <Text
              variant={size}
              fontWeight="bold"
              style={
                leftIcon
                  ? {
                      marginRight: theme.spacing.lg,
                      marginLeft: theme.spacing.sm,
                    }
                  : {}
              }
            >
              {title}
            </Text>
          </Box>
          {getDropdownIcon(isExpanded, size as string)}
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
    default:
      return <DropdownUpFill18Icon />;
  }
}

function getDropDownDownIcon(size: string) {
  switch (size) {
    case "sm":
      return <DropdownDownFill18Icon />;
    case "md":
      return <DropdownDownFill24Icon />;
    default:
      return <DropdownDownFill18Icon />;
  }
}

function getDropdownIcon(isExpanded: boolean, size: string) {
  if (isExpanded) {
    return getDropDownUpIcon(size);
  } else {
    return getDropDownDownIcon(size);
  }
}
