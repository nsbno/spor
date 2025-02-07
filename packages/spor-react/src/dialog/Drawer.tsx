"use client";
import {
  Drawer as ChakraDrawer,
  RecipeVariantProps,
  Portal,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { drawerSlotRecipe } from "../theme/slot-recipes/drawer";
import { CloseButton } from "../button";
import { createTexts, useTranslation } from "../i18n";
import { ArrowLeftFill24Icon } from "@vygruppen/spor-icon-react";

/**
 * 
 * <Drawer>
    <DrawerTrigger onClick={() => setOpen(true)}>
      <Button variant="primary" size="sm">
        Open a simple drawer
      </Button>
    </DrawerTrigger>
    <DrawerContent> // this accept a customVariant prop default is default, full is full screen
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </DrawerBody>
      <DrawerCloseTrigger />
    </DrawerContent>
  </Drawer>
 */

type DrawerVariantProps = RecipeVariantProps<typeof drawerSlotRecipe>;

type DrawerContentProps = ChakraDrawer.ContentProps &
  PropsWithChildren<DrawerVariantProps> & {
    children: React.ReactNode;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
    customVariant?: "default" | "full"; // default is the default variant, full is the full screen variant
  };

type DraweProps = Exclude<
  ChakraDrawer.RootProps,
  | "colorPalette"
  | "placement" // TODO: extend in the future the placement on top left and right
  | "contained"
  | "size"
  | "variant"
  | "as"
  | "asChild"
  | "unstyled"
> &
  ChakraDrawer.RootProps &
  PropsWithChildren<DrawerVariantProps> & {
    children: React.ReactNode;
  };

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent(props, ref) {
    const {
      children,
      portalled = true,
      portalRef,
      rounded = "md",
      customVariant = "default",
      ...rest
    } = props;
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraDrawer.Positioner>
          <ChakraDrawer.Content
            ref={ref}
            {...rest}
            asChild={false}
            rounded={customVariant === "default" ? rounded : "none"}
            marginX={customVariant === "default" ? "auto" : "0"}
            maxWidth={
              customVariant === "default" ? ["100%", null, "40rem"] : "100%"
            }
            borderBottomRadius={0}
            height={customVariant === "default" ? "auto" : "100vh"}
          >
            {customVariant === "default" && <CloseDrawerLine />}
            {customVariant === "full" && <BackHistoryDrawer />}
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
      <CloseButton size="md" />
    </ChakraDrawer.CloseTrigger>
  );
});

export const CloseDrawerLine = forwardRef<HTMLDivElement, {}>(
  function CloseDrawerLine() {
    return (
      <ChakraDrawer.CloseTrigger>
        <Box
          maxWidth={6}
          width={6}
          maxHeight={1}
          height={1}
          backgroundColor={"silver"}
          borderRadius={"xs"}
          marginX="auto"
          marginY={1}
        />
      </ChakraDrawer.CloseTrigger>
    );
  },
);

export const BackHistoryDrawer = forwardRef<HTMLDivElement, {}>(
  function BackHistoryDrawer() {
    const { t } = useTranslation();
    return (
      <ChakraDrawer.CloseTrigger>
        <Button marginX={3} marginY={2}>
          <ArrowLeftFill24Icon marginRight="1" />
          {t(texts.back)}
        </Button>
      </ChakraDrawer.CloseTrigger>
    );
  },
);

export const Drawer = forwardRef<HTMLDivElement, DraweProps>(
  function Drawer(props) {
    const { children, placement = "bottom", ...rest } = props;
    return (
      <ChakraDrawer.Root {...rest} placement={placement}>
        <DrawerBackdrop />
        {children}
      </ChakraDrawer.Root>
    );
  },
);

export const DrawerTrigger = ChakraDrawer.Trigger;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerHeader = ChakraDrawer.Header;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerBackdrop = ChakraDrawer.Backdrop;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;

const texts = createTexts({
  back: {
    en: "Back",
    nb: "Tilbake",
    nn: "Tilbake",
    sv: "Tillbaka",
  },
});
