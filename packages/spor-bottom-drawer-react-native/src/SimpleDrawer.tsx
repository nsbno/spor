import { Text } from "@vygruppen/spor-typography-react-native";
import React from "react";
import { BottomDrawer } from "./BottomDrawer";
import { DrawerHeader } from "./DrawerHeader";

type SimpleDrawerProps = {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  titleSize?: "sm" | "lg";
  textAlign?: "left" | "center";
  isVisible: boolean;
  onClose: () => void;
};

export const SimpleDrawer = ({
  textAlign = "center",
  titleSize = "lg",
  children,
  title,
  isVisible,
  onClose,
  ...props
}: SimpleDrawerProps) => {
  if (title !== undefined) {
    return (
      <BottomDrawer isVisible={isVisible} onClose={onClose} {...props}>
        <DrawerHeader textAlign={textAlign} size={titleSize}>
          {title}
        </DrawerHeader>
        <Text textAlign={textAlign} marginBottom="lg">
          {children}
        </Text>
      </BottomDrawer>
    );
  }

  return (
    <BottomDrawer isVisible={isVisible} onClose={onClose} {...props}>
      <Text textAlign={textAlign} marginBottom="lg">
        {children}
      </Text>
    </BottomDrawer>
  );
};
