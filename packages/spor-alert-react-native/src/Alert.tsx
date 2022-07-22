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
import {
  AltTransportOutline24Icon,
  CloseOutline18Icon,
  DeleteCircleOutline24Icon,
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react-native";
import React, { useEffect, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Button } from "@vygruppen/spor-button-react-native";
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
  | "important"
  | "short-transition"
  | "error"
  | "confirmation"
  | "info";

type BaseProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  variant: AlertVariant;
  onToggle?: (isExpanded: boolean) => void;
};

type WithExpandableProps = {
  actionType: "expandable";
  title: string;
};

type WithCloseButtonProps = {
  actionType: "closeable";
  title: string;
  onPress: () => void;
};

type WithoutActionProps = {
  actionType: "none";
};

type ActionProps =
  | WithExpandableProps
  | WithCloseButtonProps
  | WithoutActionProps;

type AlertProps = BaseProps & ActionProps;

export const Alert = (props: AlertProps) => {
  const { children, variant, onToggle, actionType, ...rest } = props;
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

  const theme = useTheme<Theme>();
  const icon = getVariantIcon(variant);

  const [isExpanded, setExpanded] = useState(false);

  function handlePress() {
    setExpanded(!isExpanded);
    if (onToggle) {
      onToggle(!isExpanded);
    }
  }

  useEffect(() => {
    if (isCloseButtonProps(props)) {
      setExpanded(true);
    }
  }, []);

  return (
    <Box style={style as any} {...props}>
      <Box flexDirection="row">
        {icon}

        <Text
          fontWeight={isExpanded ? "bold" : "normal"}
          ml={1.5}
          style={{ flex: 1 }}
          variant="sm"
        >
          {actionType == "closeable" || actionType == "expandable"
            ? props.title
            : children}
        </Text>

        {isExpandableProps(props) && (
          <Pressable onPress={handlePress} style={{ alignSelf: "center" }}>
            {getDropDownIcon(isExpanded)}
          </Pressable>
        )}
        {isCloseButtonProps(props) && (
          <Pressable onPress={props.onPress} style={{ alignSelf: "center" }}>
            <CloseOutline18Icon />
          </Pressable>
        )}
      </Box>

      {isExpanded && (
        <Text mt={1} variant="sm" ml={5} pr={3}>
          {children}
        </Text>
      )}
    </Box>
  );
};

const getVariantIcon = (variant: AlertVariant) => {
  switch (variant) {
    case "alternativ-transport":
      return <AltTransportOutline24Icon />;
    case "important":
      return <WarningOutline24Icon />;
    case "short-transition":
      return <InformationOutline24Icon />;
    case "error":
      return <DeleteCircleOutline24Icon />;
    case "confirmation":
      return <SuccessOutline24Icon />;
    case "info":
      return <InformationOutline24Icon />;
  }
};

function isExpandableProps(
  props: AlertProps
): props is BaseProps & WithExpandableProps {
  return props.actionType === "expandable";
}

function isCloseButtonProps(
  props: AlertProps
): props is BaseProps & WithCloseButtonProps {
  return props.actionType === "closeable";
}

function getDropDownIcon(isExpanded: boolean) {
  if (isExpanded) {
    return <DropdownUpFill18Icon />;
  } else {
    return <DropdownDownFill18Icon />;
  }
}
