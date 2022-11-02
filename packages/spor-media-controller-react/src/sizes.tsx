import { ButtonProps } from "@vygruppen/spor-button-react";

export const mapSizeToIconSize = (size: ButtonProps["size"]) => {
  switch (size) {
    case "xl":
      return 60;
    case "lg":
      return 48;
    case "md":
      return 36;
    case "sm":
      return 24;
    case "xs":
      return 18;
    default:
      return 18;
  }
};
