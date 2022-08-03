import { Text } from "@vygruppen/spor-typography-react-native";
import React from "react";
import { Drawer } from "./Drawer";
import { DrawerHeader } from "./DrawerHeader";

type SimpleDrawerProps = {
  title?: string;
  textAlign?: "left" | "center";
  isOpen: boolean;
  onClose: () => void;
};

export const SimpleDrawer = ({
  textAlign = "center",
  children,
  title,
  isOpen,
  onClose,
  ...props
}: React.PropsWithChildren<SimpleDrawerProps>) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} {...props}>
      {!!title && (
        <DrawerHeader
          textAlign={textAlign}
          size={title.length > 30 ? "sm" : "lg"}
        >
          {title}
        </DrawerHeader>
      )}
      <Text textAlign={textAlign} marginBottom="lg">
        {children}
      </Text>
    </Drawer>
  );
};
