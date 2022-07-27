import {
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
} from "@vygruppen/spor-icon-react-native";
import React, { useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Pressable } from "react-native";
import { BaseAlert, ColorVariants } from "./BaseAlert";

type ExpandableAlertProps = {
  children: React.ReactNode;
  color: ColorVariants;
  icon: JSX.Element;
  title: string;
  onToggle?: (isExpanded: boolean) => void;
};

export const ExpandableAlert = ({
  children,
  color,
  onToggle,
  title,
  icon,
  ...props
}: ExpandableAlertProps) => {
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
        <BaseAlert
          colorScheme={color}
          leftIcon={icon}
          title={title}
          weight={isExpanded ? "bold" : undefined}
          rightIcon={getDropDownIcon(isExpanded)}
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

function getDropDownIcon(isExpanded: boolean) {
  if (isExpanded) {
    return <DropdownUpFill18Icon />;
  } else {
    return <DropdownDownFill18Icon />;
  }
}
