import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { useDrawer } from "./DrawerContext";
import { Text } from "@vygruppen/spor-typography-react-native";

type DrawerHeaderProps = {
  children: string;
  size: "small" | "large";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};
export const DrawerHeader = ({
  children,
  size,
  leftIcon,
  rightIcon,
}: DrawerHeaderProps) => {
  const textSize = size === "small" ? "md" : "lg";
  const { textAlign } = useDrawer();

  return (
    <Box>
      <Text
        variant={textSize}
        textAlign={textAlign}
        fontWeight="bold"
        accessibilityRole={"header"}
        paddingTop="sm"
        paddingBottom="xs"
        style={{
          justifyContent: textAlign === "center" ? "center" : "flex-start",
          paddingHorizontal: textAlign === "center" ? 9 : 0,
        }}
      >
        {children}
      </Text>
    </Box>
  );
};
