"use client";

import {
  Box,
  createContext,
  Drawer as ChakraDrawer,
  Grid,
  GridItem,
  Portal,
  useDialogContext,
} from "@chakra-ui/react";
import {
  ArrowLeftFill24Icon,
  CloseFill24Icon,
} from "@vygruppen/spor-icon-react";
import { forwardRef } from "react";

import { Button, CloseButton } from "../button";
import { createTexts, useTranslation } from "../i18n";
import {
  DrawerContentProps,
  DrawerFullScreenHeaderProps,
  DrawerProps,
} from "./types";
import { useSwipeable } from "react-swipeable";

/**
 * A drawer is a panel that slides in from the side of the screen. It is used to display additional content without taking up too much space.
 *
 * Basic example:
 *
 * ```tsx
 * <Drawer placement="bottom" size="md">
 *  <DrawerTrigger asChild>
 *    <Button variant="primary">Open drawer</Button>
 *  </DrawerTrigger>
 *  <DrawerContent>
 *    <DrawerHeader>
 *      <DrawerCloseTrigger />
 *      <DrawerTitle>Drawer title</DrawerTitle>
 *    </DrawerHeader>
 *    <DrawerBody>
 *      Drawer content
 *    </DrawerBody>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */

type DrawerContextProps = ChakraDrawer.RootProps;

const [RootDrawerProvider, useRootDrawerProps] =
  createContext<DrawerContextProps>({
    name: "RootDrawerProvider",
  });

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  (props, ref) => {
    const { children, portalled = true, portalRef, ...rest } = props;
    const { size, placement } = useRootDrawerProps();
    const { setOpen } = useDialogContext();
    const handlers = useSwipeable({
      onSwiped: (e) => {
        const shouldClose =
          (placement === "bottom" && e.dir === "Down") ||
          (placement === "top" && e.dir === "Up") ||
          (placement === "end" && e.dir === "Right") ||
          (placement === "start" && e.dir === "Left");
        if (shouldClose) {
          setOpen(false);
        }
      },
      swipeDuration: 250,
    });
    const sizeNotFull = size !== "full";
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraDrawer.Positioner>
          <Box {...handlers} width="100%">
            <ChakraDrawer.Content ref={ref} {...rest}>
              {sizeNotFull && placement === "bottom" && <CloseDrawerLine />}
              {children}
              {sizeNotFull && placement === "top" && <CloseDrawerLine />}
            </ChakraDrawer.Content>
          </Box>
        </ChakraDrawer.Positioner>
      </Portal>
    );
  },
);
DrawerContent.displayName = "DrawerContent";

export const CloseDrawerLine = forwardRef<HTMLButtonElement>((props, ref) => {
  return (
    <Box
      width={7}
      minHeight={1}
      top={0}
      marginY={2}
      marginX="auto"
      backgroundColor="silver"
      borderRadius="xs"
      {...props}
      ref={ref}
    />
  );
});
CloseDrawerLine.displayName = "CloseDrawerLine";

export const DrawerCloseTrigger = forwardRef<
  HTMLButtonElement,
  ChakraDrawer.CloseTriggerProps
>(function DrawerCloseTrigger(props, ref) {
  const { size } = useRootDrawerProps();
  const { t } = useTranslation();
  return (
    <ChakraDrawer.CloseTrigger ref={ref} {...props} asChild>
      {size === "full" ? (
        <Button variant="ghost" leftIcon={<CloseFill24Icon />}>
          {t(texts.close)}
        </Button>
      ) : (
        <CloseButton size="md" />
      )}
    </ChakraDrawer.CloseTrigger>
  );
});

export const DrawerBackTrigger = forwardRef<
  HTMLButtonElement,
  ChakraDrawer.CloseTriggerProps
>((props, ref) => {
  const { t } = useTranslation();
  return (
    <ChakraDrawer.CloseTrigger asChild {...props} ref={ref} top="0">
      <Button variant="ghost" leftIcon={<ArrowLeftFill24Icon />}>
        {t(texts.back)}
      </Button>
    </ChakraDrawer.CloseTrigger>
  );
});
DrawerBackTrigger.displayName = "DrawerBackTrigger";

export const DrawerFullScreenHeader = forwardRef<
  HTMLDivElement,
  DrawerFullScreenHeaderProps
>((props, ref) => {
  const { backTrigger = true, title } = props;
  return (
    <ChakraDrawer.Header {...props} ref={ref} asChild>
      <Grid templateColumns="1fr auto 1fr" height="auto" paddingX="8">
        <GridItem width="full" alignSelf="center">
          {backTrigger && <DrawerBackTrigger />}
        </GridItem>
        <GridItem width="full" alignSelf="end" asChild>
          {title && <DrawerTitle>{title}</DrawerTitle>}
        </GridItem>
        <GridItem width="full" alignSelf="end">
          <DrawerCloseTrigger justifySelf="end" top="0" />
        </GridItem>
      </Grid>
    </ChakraDrawer.Header>
  );
});
DrawerFullScreenHeader.displayName = "DrawerFullScreenHeader";

export const Drawer = (props: DrawerProps) => {
  const { children, placement, size = "md", ...rest } = props;
  return (
    <RootDrawerProvider value={props}>
      <ChakraDrawer.Root {...rest} placement={placement} size={size}>
        <DrawerBackdrop />
        {children}
      </ChakraDrawer.Root>
    </RootDrawerProvider>
  );
};

export const DrawerTrigger = ChakraDrawer.Trigger;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerBackdrop = ChakraDrawer.Backdrop;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;
export const DrawerHeader = ChakraDrawer.Header;

const texts = createTexts({
  back: {
    en: "Back",
    nb: "Tilbake",
    nn: "Tilbake",
    sv: "Tillbaka",
  },
  close: {
    en: "Close",
    nb: "Lukk",
    nn: "Lukk",
    sv: "Stäng",
  },
});
