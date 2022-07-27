import React from "react";
import { Text } from "@vygruppen/spor-typography-react-native";

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
    <Text
      variant={textSize}
      fontWeight="bold"
      accessibilityRole={"header"}
      paddingTop="sm"
      paddingBottom="xs"
      style={{
        alignSelf: textAlign === "center" ? "center" : "flex-start",
        paddingHorizontal: textAlign === "center" ? 12 : 0,
      }}
    >
      {children}
    </Text>
  );
};
