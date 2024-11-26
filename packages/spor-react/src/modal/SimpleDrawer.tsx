import React, { forwardRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "./Drawer";
import {
  type RecipeVariantProps,
  Drawer as ChakraDrawer,
} from "@chakra-ui/react";
import { drawerRecipe } from "../theme/components/drawer";

type DrawerVariantProps = RecipeVariantProps<typeof drawerRecipe>;

export type DrawerBodyProps = {
  id?: string;
};

export type SimpleDrawerProps = ChakraDrawer.ContentProps &
  DrawerVariantProps & {
    children: React.ReactNode;
    title?: React.ReactNode;
    /** Props for drawer body */
    body?: DrawerBodyProps;
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

export const SimpleDrawer = forwardRef<HTMLDialogElement, SimpleDrawerProps>(
  ({ children, title, body, ...props }, ref) => {
    return (
      <Drawer {...props} ref={ref}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {title && <DrawerHeader>{title}</DrawerHeader>}
          <DrawerBody {...body}>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  },
);
