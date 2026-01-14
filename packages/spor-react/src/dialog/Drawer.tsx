"use client";

import {
  Box,
  createContext,
  Drawer as ChakraDrawer,
  Portal,
  useDialogContext,
} from "@chakra-ui/react";
import {
  ArrowLeftFill24Icon,
  CloseFill24Icon,
} from "@vygruppen/spor-icon-react";
import { useSwipeable } from "react-swipeable";

import { ResponsiveButton } from "@/button/ResponsiveButton";

import { CloseButton } from "../button";
import { createTexts, useTranslation } from "../i18n";
import {
  DrawerCloseTriggerProps,
  DrawerContentProps,
  DrawerFullScreenHeaderProps,
  DrawerProps,
} from "./types";

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

export const DrawerContent = ({
  ref,
  ...props
}: DrawerContentProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const {
    children,
    portalled = true,
    portalRef,
    hideHandle = false,
    ...rest
  } = props;
  const { size, placement } = useRootDrawerProps();
  const { setOpen } = useDialogContext();
  const handlers = useSwipeable({
    onSwiped: ({ dir }) => {
      const shouldClose =
        (placement === "bottom" && dir === "Down") ||
        (placement === "top" && dir === "Up") ||
        (placement === "end" && dir === "Right") ||
        (placement === "start" && dir === "Left");
      if (shouldClose) {
        setOpen(false);
      }
    },
    swipeDuration: 250,
  });
  const sizeNotFull = size !== "full";
  const showHandle = !hideHandle;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraDrawer.Positioner asChild>
        <Box {...handlers} width="100%">
          <ChakraDrawer.Content ref={ref} {...rest}>
            {showHandle && sizeNotFull && placement === "bottom" && (
              <CloseDrawerLine />
            )}
            {children}
            {showHandle && sizeNotFull && placement === "top" && (
              <CloseDrawerLine />
            )}
          </ChakraDrawer.Content>
        </Box>
      </ChakraDrawer.Positioner>
    </Portal>
  );
};
DrawerContent.displayName = "DrawerContent";

export const CloseDrawerLine = ({
  ref,
  ...props
}: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      width={7}
      minHeight={1}
      top={0}
      marginY={2}
      marginX="auto"
      backgroundColor="floating.outline.active"
      borderRadius="xs"
      {...props}
      ref={ref}
    />
  );
};
CloseDrawerLine.displayName = "CloseDrawerLine";

export const DrawerCloseTrigger = function DrawerCloseTrigger({
  ref,
  ...props
}: DrawerCloseTriggerProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) {
  const { showText = false, ...rest } = props;
  const { size } = useRootDrawerProps();
  const { t } = useTranslation();
  return (
    <ChakraDrawer.CloseTrigger ref={ref} {...rest} asChild>
      {showText || size === "full" ? (
        <ResponsiveButton
          variant="ghost"
          icon={<CloseFill24Icon />}
          label={t(texts.close)}
        />
      ) : (
        <CloseButton size="md" />
      )}
    </ChakraDrawer.CloseTrigger>
  );
};

export const DrawerBackTrigger = ({
  ref,
  ...props
}: ChakraDrawer.CloseTriggerProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) => {
  const { t } = useTranslation();
  return (
    <ChakraDrawer.CloseTrigger asChild {...props} ref={ref}>
      <ResponsiveButton
        variant="ghost"
        icon={<ArrowLeftFill24Icon />}
        label={t(texts.back)}
      />
    </ChakraDrawer.CloseTrigger>
  );
};
DrawerBackTrigger.displayName = "DrawerBackTrigger";

export const DrawerFullScreenHeader = ({
  ref,
  ...props
}: DrawerFullScreenHeaderProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const { backTrigger = true, closeTrigger = true, children } = props;
  return (
    <ChakraDrawer.Header {...props} ref={ref}>
      <Box>{backTrigger && <DrawerBackTrigger />}</Box>
      <DrawerTitle>{children}</DrawerTitle>
      <Box> {closeTrigger && <DrawerCloseTrigger />}</Box>
    </ChakraDrawer.Header>
  );
};
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
