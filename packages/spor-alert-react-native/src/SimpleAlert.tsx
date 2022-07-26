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

type SimpleAlertProps = {
  children: string;
  color: ColorVariants;
  icon: JSX.Element;
};

export const SimpleAlert = (props: SimpleAlertProps) => {
  const { children, color, icon, ...rest } = props;

  return <Alert colorScheme={color} text={children} icon={icon}></Alert>;
};
