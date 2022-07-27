import { BaseAlert, ColorVariants } from "./BaseAlert";
import React from "react";

type SimpleAlertProps = {
  children: string;
  color: ColorVariants;
  icon: JSX.Element;
};

export const SimpleAlert = ({
  children,
  color,
  icon,
  ...props
}: SimpleAlertProps) => {
  return (
    <BaseAlert colorScheme={color} text={children} icon={icon}></BaseAlert>
  );
};
