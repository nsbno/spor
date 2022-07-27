import { BaseAlert, ColorVariants } from "./BaseAlert";
import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";

type SimpleAlertProps = {
  children: React.ReactNode;
  colorScheme: ColorVariants;
  icon: JSX.Element;
};

export const SimpleAlert = ({
  children,
  colorScheme,
  icon,
  ...props
}: SimpleAlertProps) => {
  return (
    <BaseAlert
      colorScheme={colorScheme}
      heading={<Text>{children}</Text>}
      leftIcon={icon}
    ></BaseAlert>
  );
};
