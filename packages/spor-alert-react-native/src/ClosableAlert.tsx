import { CloseOutline18Icon } from "@vygruppen/spor-icon-react-native";
import React, { useEffect, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Pressable } from "react-native";
import { BaseAlert, ColorVariants } from "./BaseAlert";
import { Text } from "@vygruppen/spor-typography-react-native";

type ClosableAlertProps = {
  children: React.ReactNode;
  colorScheme: ColorVariants;
  leftIcon: JSX.Element;
  title: string;
  onClose: () => void;
};

export const ClosableAlert = ({
  children,
  colorScheme,
  onClose,
  title,
  leftIcon,
  ...props
}: ClosableAlertProps) => {
  return (
    <BaseAlert
      colorScheme={colorScheme}
      leftIcon={leftIcon}
      heading={<Text fontWeight={"bold"}>{title}</Text>}
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
