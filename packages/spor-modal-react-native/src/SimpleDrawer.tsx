import { Text } from "@vygruppen/spor-typography-react-native";
import React from "react";
import { Drawer } from "./Drawer";
import { DrawerHeader } from "./DrawerHeader";

type SimpleDrawerProps = {
  title?: string;
  textAlign?: "left" | "center";
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/** A very basic drawer component that's easy to use
 *
 * ```tsx
 * <SimpleDrawer isOpen={isOpen} onClose={handleClose} title="Small title">
 *   This is the drawer content
 * </SimpleDrawer>
 * ```
 *
 * For more advanced use cases, see the [Drawer](./Drawer.tsx) component.
 */
export const SimpleDrawer = ({
  textAlign = "center",
  children,
  title,
  isOpen,
  onClose,
  ...props
}: SimpleDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} {...props}>
      {title && (
        <DrawerHeader
          textAlign={textAlign}
          size={title.length > 30 ? "sm" : "lg"}
        >
          {title}
        </DrawerHeader>
      )}
      <Text textAlign={textAlign} marginBottom={4}>
        {children}
      </Text>
    </Drawer>
  );
};
