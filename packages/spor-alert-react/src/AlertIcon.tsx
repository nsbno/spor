import {
  AltTransportOutline24Icon,
  ErrorOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { BaseAlertProps } from "./BaseAlert";

type AlertIconProps = { variant: BaseAlertProps["variant"] };
/**
 * Internal component that shows the correct icon for the alert.
 */
export const AlertIcon = ({ variant }: AlertIconProps) => {
  const Icon = getIcon(variant);
  return <Icon aria-hidden="true" marginRight={1} color="darkGrey" />;
};

const getIcon = (variant: BaseAlertProps["variant"]) => {
  switch (variant) {
    case "info":
      return InformationOutline24Icon;
    case "success":
      return SuccessOutline24Icon;
    case "warning":
      return WarningOutline24Icon;
    case "alt-transport":
      return AltTransportOutline24Icon;
    case "error":
      return ErrorOutline24Icon;
  }
};
