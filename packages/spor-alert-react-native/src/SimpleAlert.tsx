import { BaseAlert, ColorVariants } from "./BaseAlert";
import React from "react";

type SimpleAlertProps = {
  children: string;
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
      title={children}
      leftIcon={icon}
    ></BaseAlert>
  );
};
