import React from "react";
import { Heading } from "@vygruppen/spor-typography-react-native";

type DrawerHeaderProps = {
  children: string;
  size: "sm" | "lg";
  textAlign?: "left" | "center";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};
export const DrawerHeader = ({
  children,
  size,
  textAlign,
}: DrawerHeaderProps) => {
  const textSize = size === "sm" ? "md" : "lg";

  return (
    <Heading
      variant={textSize}
      fontWeight="bold"
      paddingTop="sm"
      paddingBottom="xs"
      paddingHorizontal={textAlign === "center" ? "sm" : 0}
      textAlign={textAlign}
    >
      {children}
    </Heading>
  );
};
