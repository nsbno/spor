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
import { Linking, Pressable, TouchableOpacity } from "react-native";

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
  | "yellow"
  | "light-yellow"
  | "orange"
  | "red"
  | "green"
  | "blue";

type ActionType = "expandable" | "closeable" | "none";

type BaseProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  variant: AlertVariant;
  url?: string;
  icon: JSX.Element;
  onToggle?: (isExpanded: boolean) => void;
};

type WithExpandableProps = {
  actionType: ActionType;
  title: string;
};

type WithCloseButtonProps = {
  actionType: ActionType;
  title: string;
  onPress: () => void;
};

type WithoutActionProps = {
  actionType: ActionType;
  title?: string;
};

type ActionProps =
  | WithExpandableProps
  | WithCloseButtonProps
  | WithoutActionProps;

type AlertProps = BaseProps & ActionProps;

export const Alert = (props: AlertProps) => {
  const { children, variant, onToggle, actionType, title, url, icon, ...rest } =
    props;
  const { style } = useRestyle(restyleFunctions, {
    variant,
    ...rest,
  });

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
        {icon && icon}

        <Text
          fontWeight={isExpanded ? "bold" : "normal"}
          ml={1.5}
          style={{ flex: 1 }}
          variant="sm"
          numberOfLines={title ? 1 : undefined}
        >
          {title ?? children}
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
        <Box mt={1} ml={5} pr={3}>
          <Text variant="sm">{children}</Text>
          {url && (
            <TouchableOpacity
              style={{ marginTop: 12 }}
              accessibilityRole="link"
              onPress={() => Linking.openURL(url)}
            >
              <Text variant="xs" textDecorationLine={"underline"}>
                Link til mer informasjon
              </Text>
            </TouchableOpacity>
          )}
        </Box>
      )}
    </Box>
  );
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
