import {
  Box,
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
  (props, ref) => {
    const placement = useDrawerContext();
    const { onClose } = useModalContext();
    const handlers = useSwipeable({
      onSwiped: (e) => {
        console.log(e);
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

    return (
      <Box {...handlers}>
        <ChakraDrawerContent {...props} ref={ref} />
      </Box>
    );
  }
);

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
