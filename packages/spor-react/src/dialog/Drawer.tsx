"use client";
import {
  Drawer as ChakraDrawer,
  RecipeVariantProps,
  Portal,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { drawerSlotRecipe } from "../theme/slot-recipes/drawer";
import { CloseButton } from "../button";

type DrawerVariantProps = RecipeVariantProps<typeof drawerSlotRecipe>;

type DrawerContentProps = ChakraDrawer.ContentProps &
  DrawerVariantProps & {
    children: React.ReactNode;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    offset?: number;
  };

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent(props, ref) {
    const { children, portalled = true, portalRef, offset, ...rest } = props;
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraDrawer.Positioner padding={offset}>
          <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
            {children}
          </ChakraDrawer.Content>
        </ChakraDrawer.Positioner>
      </Portal>
    );
  },
);

export const DrawerCloseTrigger = forwardRef<
  HTMLButtonElement,
  ChakraDrawer.CloseTriggerProps
>(function DrawerCloseTrigger(props, ref) {
  return (
    <ChakraDrawer.CloseTrigger
      ref={ref}
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <CloseButton size="sm" />
    </ChakraDrawer.CloseTrigger>
  );
});

export const DrawerTrigger = ChakraDrawer.Trigger;
export const DrawerRoot = ChakraDrawer.Root;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerHeader = ChakraDrawer.Header;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerBackdrop = ChakraDrawer.Backdrop;
export const DrawerDescription = ChakraDrawer.Description;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;
