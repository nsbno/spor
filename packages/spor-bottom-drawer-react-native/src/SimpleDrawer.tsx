import { Text } from "@vygruppen/spor-typography-react-native";
import React from "react";
import { BottomDrawer } from "./BottomDrawer";
import { useDrawer } from "./DrawerContext";
import { DrawerHeader } from "./DrawerHeader";

type SimpleDrawerProps = {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  titleSize?: "small" | "large";
  textAlign?: "left" | "center";
  isVisible: boolean;
  onClose: () => void;
};

export const SimpleDrawer = ({
  textAlign = "center",
  titleSize = "large",
  children,
  title,
  isVisible,
  onClose,
  ...props
}: SimpleDrawerProps) => {
  return (
    <BottomDrawer
      textAlign={textAlign}
      isVisible={isVisible}
      onClose={onClose}
      {...props}
    >
      {title && <DrawerHeader size={titleSize}>{title}</DrawerHeader>}
      <Text textAlign={textAlign}>{children}</Text>
    </BottomDrawer>
  );
};
