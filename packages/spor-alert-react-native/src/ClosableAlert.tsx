import { CloseOutline18Icon } from "@vygruppen/spor-icon-react-native";
import React, { useEffect, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Pressable } from "react-native";
import { BaseAlert, ColorVariants } from "./BaseAlert";

type ClosableAlertProps = {
  children: React.ReactNode;
  color: ColorVariants;
  icon: JSX.Element;
  title: string;
  onClose: () => void;
  onToggle?: (isExpanded: boolean) => void;
};

export const ClosableAlert = ({
  children,
  color,
  onToggle,
  onClose,
  title,
  icon,
  ...props
}: ClosableAlertProps) => {
  return (
    <BaseAlert
      colorScheme={color}
      icon={icon}
      text={title}
      weight="bold"
      expandableItem={
        <Box ml={5} mt={1} pr={3}>
          {children}
        </Box>
      }
    >
      <Pressable onPress={onClose} style={{ alignSelf: "center" }}>
        <CloseOutline18Icon />
      </Pressable>
    </BaseAlert>
  );
};
