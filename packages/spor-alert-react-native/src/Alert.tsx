import {
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  useRestyle,
  useTheme,
  VariantProps,
} from "@shopify/restyle";
import React, { useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import {
  AltTransportOutline24Icon,
  DeleteCircleOutline24Icon,
  DropdownDownFill18Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react-native";
import { Pressable } from "react-native";

type Variant = VariantProps<Theme, "alertVariant", "variant">;
const variant = createVariant({ themeKey: "alertVariant" });

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  variant,
]);

type AlertVariant =
  | "alternativ-transport"
  | "important-message"
  | "transitiontime"
  | "error"
  | "confirmation"
  | "info";

type AlertProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  variant: AlertVariant;
  expandable: boolean;
  title: string;
  onToggle?: (isExpanded: boolean) => void;
};

export const Alert = ({
  children,
  variant,
  expandable = false,
  title,
  link,
  onToggle,
  ...props
}: AlertProps) => {
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...props,
  });

  const theme = useTheme<Theme>();
  const icon = getVariantIcon(variant);

  const [isPressed, setPressed] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  function handlePress() {
    setExpanded(!isExpanded);
    if (onToggle) {
      onToggle(!isExpanded);
    }
  }

  return (
    <Box style={style as any} {...props}>
      <Box flexDirection="row">
        {icon}
        <Text
          fontWeight={isExpanded ? "bold" : "normal"}
          ml={1}
          style={{ flex: 1 }}
          variant="sm"
        >
          {expandable ? title : children}
        </Text>

        {expandable && (
          <Pressable
            onPress={handlePress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
          >
            <DropdownDownFill18Icon />
          </Pressable>
        )}
      </Box>
      <Box ml={5} pr={3}>
        {isExpanded && (
          <Text mt={4} variant="sm">
            {children}
          </Text>
        )}
      </Box>
    </Box>
  );
};

const getVariantIcon = (variant: AlertVariant) => {
  switch (variant) {
    case "alternativ-transport":
      return <AltTransportOutline24Icon />;
    case "important-message":
      return <WarningOutline24Icon />;
    case "transitiontime":
      return <InformationOutline24Icon />;
    case "error":
      return <DeleteCircleOutline24Icon />;
    case "confirmation":
      return <SuccessOutline24Icon />;
    case "info":
      return <InformationOutline24Icon />;
  }
};
