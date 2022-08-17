import {
  Box,
  BoxProps,
  Center,
  Drawer as ChakraDrawer,
  DrawerContent as ChakraDrawerContent,
  DrawerContentProps as ChakraDrawerContentProps,
  DrawerProps as ChakraDrawerProps,
  forwardRef,
  useModalContext,
} from "@chakra-ui/react";
import React from "react";
import { useSwipeable } from "react-swipeable";
export {
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/react";
export type { DrawerProps } from "@chakra-ui/react";
export { ModalHeader as DrawerHeader } from "./ModalHeader";

type DrawerProps = ChakraDrawerProps;
export const Drawer = (props: DrawerProps) => {
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
            {isTopOrBottom && (
              <Notch
                top={placement === "bottom" ? 2 : undefined}
                bottom={placement === "top" ? 2 : undefined}
              />
            )}
            <Box>{children}</Box>
          </Box>
        </ChakraDrawerContent>
      </Box>
    );
  }
);

const Notch = forwardRef<BoxProps, any>((props, ref) => (
  <Center
    position="absolute"
    left={0}
    right={0}
    zIndex="modal"
    {...props}
    ref={ref}
  >
    <Box
      width="2.265rem"
      height={1}
      backgroundColor="alias.steel"
      borderRadius="xs"
    />
  </Center>
));

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
