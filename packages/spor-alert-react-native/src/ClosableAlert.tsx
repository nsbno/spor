import { CloseOutline18Icon } from "@vygruppen/spor-icon-react-native";
import React, { useEffect, useState } from "react";
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
  onClose: () => void;
  onToggle?: (isExpanded: boolean) => void;
};

export const ClosableAlert = (props: AlertProps) => {
  const { children, color, onToggle, onClose, title, icon, ...rest } = props;

  return (
    <Alert colorScheme={color}>
      <Box flexDirection="row">
        {icon && icon}

        <Text
          fontWeight="bold"
          ml={1.5}
          style={{ flex: 1 }}
          variant="xs"
          numberOfLines={1}
        >
          {title}
        </Text>

        <Pressable onPress={props.onClose} style={{ alignSelf: "center" }}>
          <CloseOutline18Icon />
        </Pressable>
      </Box>

      <Text ml={5} mt={1} pr={3} variant="xs">
        {children}
      </Text>
    </Alert>
  );
};
