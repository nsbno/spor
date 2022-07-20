import React from "react";
import { BottomDrawer } from "./BottomDrawer";
import { DrawerHandle } from "./DrawerHandle";
import { DrawerHeader } from "./DrawerHeader";

type SimpleDrawerProps = {
  children?: React.ReactNode;
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
      {children}
    </BottomDrawer>
  );
};
