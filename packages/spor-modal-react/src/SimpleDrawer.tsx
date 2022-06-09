import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "./Drawer";

export type SimpleDrawerProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
  placement: "top" | "right" | "bottom" | "left";
  isOpen: boolean;
  onClose: () => void;
};
/** A very basic drawer component that's easy to use 
 * 
 * ```tsx
 * <SimpleDrawer placement="bottom" isOpen={isOpen} onClose={handleClose}>
 *   This is the drawer content
 * </SimpleDrawer>
 * ```
 * 
 * For more advanced use cases, see the [Drawer](./Drawer.tsx) component.
*/
export const SimpleDrawer = ({
  placement,
  children,
  title,
  ...props
}: SimpleDrawerProps) => {
  return (
    <Drawer placement={placement} {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {title && <DrawerHeader>{title}</DrawerHeader>}
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
