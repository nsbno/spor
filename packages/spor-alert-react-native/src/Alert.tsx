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
  CloseOutline18Icon,
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
} from "@vygruppen/spor-icon-react-native";
import React, { useEffect, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Linking, Pressable, TouchableOpacity } from "react-native";
import { UrlItem } from "./UrlItem";

type Variant = VariantProps<Theme, "alertColorScheme", "colorScheme">;
const colorScheme = createVariant({
  themeKey: "alertColorScheme",
  property: "colorScheme",
});

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  Variant;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  spacingShorthand,
  colorScheme,
]);

type ColorVariants =
  | "yellow"
  | "light-yellow"
  | "orange"
  | "red"
  | "green"
  | "blue";

type ActionType = "expandable" | "closeable" | "none";

type BaseProps = Exclude<RestyleProps, "variant"> & {
  children: string;
  colorScheme: ColorVariants;
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
  const {
    children,
    colorScheme,
    onToggle,
    actionType,
    title,
    url,
    icon,
    ...rest
  } = props;
  const { style } = useRestyle(restyleFunctions, {
    colorScheme,
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
      {isExpandableProps(props) ? (
        <Pressable onPress={handlePress}>
          <Box flexDirection="row">
            {icon && icon}
            <Text
              fontWeight={isExpanded ? "bold" : "normal"}
              ml={1.5}
              style={{ flex: 1 }}
              variant="sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            {getDropDownIcon(isExpanded)}
          </Box>
        </Pressable>
      ) : (
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

          {isCloseButtonProps(props) && (
            <Pressable onPress={props.onPress} style={{ alignSelf: "center" }}>
              <CloseOutline18Icon />
            </Pressable>
          )}
        </Box>
      )}

      {isExpanded && (
        <Box mt={1} pr={3}>
          <Text ml={5} variant="sm">
            {children}
          </Text>
          {url && <UrlItem url={url} />}
        </Box>
      )}
      {actionType == "none" && url && <UrlItem url={url} />}
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
