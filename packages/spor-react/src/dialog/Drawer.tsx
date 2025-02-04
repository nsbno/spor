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

type DrawerVariantProps = RecipeVariantProps<typeof drawerSlotRecipe>;

type DrawerContentProps = ChakraDrawer.ContentProps &
  PropsWithChildren<DrawerVariantProps> & {
    children: React.ReactNode;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    offset?: number;
    placement?: "bottom" | "top" | "end" | "start";
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
    customVariant?: "default" | "full"; // default is the default variant, full is the full screen variant
  };

type DrawerRootProps = ChakraDrawer.RootProps &
  PropsWithChildren<DrawerVariantProps> & {
    children: React.ReactNode;
  };

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  function DrawerContent(props, ref) {
    const {
      children,
      portalled = true,
      portalRef,
      offset,
      rounded = "md",
      customVariant = "default",
      ...rest
    } = props;
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraDrawer.Positioner padding={offset}>
          <ChakraDrawer.Content
            ref={ref}
            {...rest}
            asChild={false}
            rounded={customVariant === "default" ? rounded : "none"}
            marginX={customVariant === "default" ? "auto" : "0"}
            maxWidth={customVariant === "default" ? "40rem" : "100%"}
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
      <CloseButton
        size="sm"
        backgroundColor={{ _light: "transparent", _dark: "mint" }}
      />
    </ChakraDrawer.CloseTrigger>
  );
});

export const CloseDrawerLine = forwardRef<HTMLDivElement, {}>(
  function CloseDrawerLine() {
    return (
      <ChakraDrawer.CloseTrigger>
        <Box
          as="button"
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

export const DrawerRoot = forwardRef<HTMLDivElement, DrawerRootProps>(
  function DrawerRoot(props) {
    const { children, placement = "bottom", ...rest } = props;
    return (
      <ChakraDrawer.Root {...rest} placement={placement}>
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
export const DrawerDescription = ChakraDrawer.Description;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;

const texts = createTexts({
  back: {
    en: "Go back",
    nb: "Tilbake",
    nn: "Tilbake",
    sv: "Tilbaka",
  },
});
