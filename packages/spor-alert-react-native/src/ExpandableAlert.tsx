import {
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
} from "@vygruppen/spor-icon-react-native";
import React, { useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Pressable } from "react-native";
import { Alert } from "./Alert";

type ColorVariants =
  | "yellow"
  | "light-yellow"
  | "orange"
  | "red"
  | "green"
  | "blue";

type AlertProps = {
  children: string;
  color: ColorVariants;
  icon: JSX.Element;
  title: string;
  onToggle?: (isExpanded: boolean) => void;
};

export const ExpandableAlert = (props: AlertProps) => {
  const { children, color, onToggle, title, icon, ...rest } = props;
  const [isExpanded, setExpanded] = useState(false);

  function handlePress() {
    setExpanded(!isExpanded);
    if (onToggle) {
      onToggle(!isExpanded);
    }
  }

  return (
    <Alert colorScheme={color}>
      <Pressable onPress={handlePress}>
        <Box flexDirection="row">
          {icon}
          <Text
            fontWeight={isExpanded ? "bold" : "normal"}
            ml={1.5}
            style={{ flex: 1 }}
            variant="xs"
            numberOfLines={1}
          >
            {title}
          </Text>
          {getDropDownIcon(isExpanded)}
        </Box>
      </Pressable>
      {isExpanded && (
        <Text ml={5} mt={1} pr={3} variant="xs">
          {children}
        </Text>
      )}
    </Alert>
  );
};

function getDropDownIcon(isExpanded: boolean) {
  if (isExpanded) {
    return <DropdownUpFill18Icon />;
  } else {
    return <DropdownDownFill18Icon />;
  }
}
