import { Box } from "@vygruppen/spor-layout-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { Alert } from "./Alert";
import React from "react";

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
};

export const SimpleAlert = (props: AlertProps) => {
  const { children, color, icon, ...rest } = props;

  return (
    <Alert colorScheme={color}>
      <Box flexDirection="row">
        {icon}
        <Text ml={1.5} style={{ flex: 1 }} variant="xs">
          {children}
        </Text>
      </Box>
    </Alert>
  );
};
