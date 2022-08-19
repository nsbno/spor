import { Heading } from "@vygruppen/spor-typography-react-native";
import React from "react";

type DrawerHeaderProps = {
  children: string;
  size: "sm" | "lg";
  textAlign?: "left" | "center";
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
      paddingTop={2}
      paddingBottom={1.5}
      paddingHorizontal={textAlign === "center" ? 2 : 0}
      textAlign={textAlign}
    >
      {children}
    </Heading>
  );
};
