import {
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
} from "@vygruppen/spor-icon-react-native";
import React, { useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Pressable } from "react-native";
import { BaseAlert, ColorVariants } from "./BaseAlert";
import { Text } from "@vygruppen/spor-typography-react-native";

type ExpandableAlertProps = {
  children: React.ReactNode;
  colorScheme: ColorVariants;
  icon: JSX.Element;
  title: string;
  defaultExpanded?: boolean;
  onToggle?: (isExpanded: boolean) => void;
};

export const ExpandableAlert = ({
  children,
  colorScheme,
  onToggle,
  title,
  icon,
  defaultExpanded = false,
  ...props
}: ExpandableAlertProps) => {
  const [isExpanded, setExpanded] = useState(defaultExpanded);

  function handlePress() {
    setExpanded(!isExpanded);
    if (onToggle) {
      onToggle(!isExpanded);
    }
  }

  return (
    <Pressable onPress={handlePress}>
      <Box flexDirection={"row"}>
        <BaseAlert
          colorScheme={colorScheme}
          leftIcon={icon}
          heading={
            <Text fontWeight={isExpanded ? "bold" : undefined}>{title}</Text>
          }
          rightIcon={
            isExpanded ? <DropdownUpFill18Icon /> : <DropdownDownFill18Icon />
          }
        >
          {isExpanded && (
            <Box ml={5} mt={1} pr={3}>
              {children}
            </Box>
          )}
        </BaseAlert>
      </Box>
    </Pressable>
  );
};
