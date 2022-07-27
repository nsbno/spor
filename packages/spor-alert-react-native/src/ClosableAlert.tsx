import { CloseOutline18Icon } from "@vygruppen/spor-icon-react-native";
import React, { useEffect, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
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
      leftIcon={icon}
      title={title}
      weight="bold"
      rightIcon={
        <Pressable onPress={onClose} style={{ alignSelf: "center" }}>
          <CloseOutline18Icon />
        </Pressable>
      }
    >
      <Box ml={5} mt={1} pr={3}>
        {children}
      </Box>
    </BaseAlert>
  );
};
