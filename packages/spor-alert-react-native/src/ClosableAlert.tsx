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

type ClosableAlertProps = {
  children: React.ReactNode;
  color: ColorVariants;
  icon: JSX.Element;
  title: string;
  onClose: () => void;
  onToggle?: (isExpanded: boolean) => void;
};

export const ClosableAlert = (props: ClosableAlertProps) => {
  const { children, color, onToggle, onClose, title, icon, ...rest } = props;

  return (
    <Alert
      colorScheme={color}
      icon={icon}
      text={title}
      weight="bold"
      expandableItem={
        <Text ml={5} mt={1} pr={3} variant="xs">
          {children}
        </Text>
      }
    >
      <Pressable onPress={props.onClose} style={{ alignSelf: "center" }}>
        <CloseOutline18Icon />
      </Pressable>
    </Alert>
  );
};
