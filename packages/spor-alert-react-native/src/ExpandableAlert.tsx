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

type ExpandableAlertProps = {
  children: React.ReactNode;
  color: ColorVariants;
  icon: JSX.Element;
  title: string;
  onToggle?: (isExpanded: boolean) => void;
};

export const ExpandableAlert = (props: ExpandableAlertProps) => {
  const { children, color, onToggle, title, icon, ...rest } = props;
  const [isExpanded, setExpanded] = useState(false);

  function handlePress() {
    setExpanded(!isExpanded);
    if (onToggle) {
      onToggle(!isExpanded);
    }
  }

  return (
    <Pressable onPress={handlePress}>
      <Box flexDirection={"row"}>
        <Alert
          colorScheme={color}
          icon={icon}
          text={title}
          weight={isExpanded ? "bold" : undefined}
          expandableItem={
            isExpanded && (
              <Text ml={5} mt={1} pr={3} variant="xs">
                {children}
              </Text>
            )
          }
        >
          {getDropDownIcon(isExpanded)}
        </Alert>
      </Box>
    </Pressable>
  );
};

function getDropDownIcon(isExpanded: boolean) {
  if (isExpanded) {
    return <DropdownUpFill18Icon />;
  } else {
    return <DropdownDownFill18Icon />;
  }
}
