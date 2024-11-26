import {
  Drawer as ChakraDrawer,
  RecipeVariantProps,
  Portal,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { drawerRecipe } from "../theme/components/drawer";
import { CloseButton } from "../button";

type DrawerVariantProps = RecipeVariantProps<typeof drawerRecipe>;

type DrawerContentProps = ChakraDrawer.ContentProps &
  DrawerVariantProps & {
    children: React.ReactNode;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    offset?: ChakraDrawer.ContentProps["padding"];
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

/* export const Drawer = (props: DrawerProps) => {
  return (
    <DrawerProvider placement={props.placement}>
      <ChakraDrawer {...props} />
    </DrawerProvider>
  );
};

type DrawerContentProps = ChakraDrawerContentProps;
export const DrawerContent = forwardRef<DrawerContentProps, any>(
  ({ children, ...props }, ref) => {
    const placement = useDrawerContext();
    const { onClose } = useModalContext();
    const handlers = useSwipeable({
      onSwiped: (e) => {
        const shouldClose =
          (placement === "bottom" && e.dir === "Down") ||
          (placement === "right" && e.dir === "Right") ||
          (placement === "left" && e.dir === "Left") ||
          (placement === "top" && e.dir === "Up") ||
          (placement === "end" && e.dir === "Right") ||
          (placement === "start" && e.dir === "Left");
        if (shouldClose) {
          onClose();
        }
      },
      swipeDuration: 500,
    });

    const isTopOrBottom = placement === "top" || placement === "bottom";
    const widthConstraits = isTopOrBottom
      ? { width: ["100%", "37.5rem"], mx: "auto" }
      : {};
    return (
      <Box {...handlers}>
        <ChakraDrawerContent
          {...widthConstraits}
          borderTopRadius={placement === "bottom" ? "md" : "none"}
          borderBottomRadius={placement === "top" ? "md" : "none"}
          {...props}
          ref={ref}
        >
          <Box position="relative">
            <Box maxHeight="100vh" maxWidth="100vw" overflow="auto">
              {isTopOrBottom && <Notch />}

              <Box>{children}</Box>
            </Box>
          </Box>
        </ChakraDrawerContent>
      </Box>
    );
  },
);

const Notch = forwardRef<BoxProps, any>((props, ref) => {
  const placement = useDrawerContext();
  return (
    <Box
      position="absolute"
      left={0}
      right={0}
      top={placement === "bottom" ? 0 : undefined}
      bottom={placement === "top" ? 0 : undefined}
      zIndex="modal"
      {...props}
      ref={ref}
    >
      <Center
        background={placement === "bottom" ? "bottom" : "top"}
        padding={2}
        borderRadius="md"
      >
        <Box
          width="2.265rem"
          height={1}
          backgroundColor="steel"
          borderRadius="xs"
        />
      </Center>
    </Box>
  );
});

const DrawerContext = React.createContext<DrawerProps["placement"]>(undefined);
type DrawerProviderProps = {
  children: React.ReactNode;
  placement: DrawerProps["placement"];
};
const DrawerProvider = (props: DrawerProviderProps) => (
  <DrawerContext.Provider value={props.placement}>
    {props.children}
  </DrawerContext.Provider>
);
const useDrawerContext = () => {
  return React.useContext(DrawerContext);
};
 */
