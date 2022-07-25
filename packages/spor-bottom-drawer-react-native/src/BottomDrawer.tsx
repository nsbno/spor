import React, { createContext, useContext, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { DrawerHandle } from "./DrawerHandle";
import Modal from "react-native-modal";
import { DrawerProvider } from "./DrawerContext";

type BottomDrawerProps = {
  children: React.ReactNode;
  onClose: () => void;
  isVisible: boolean;
  textAlign: "left" | "center";
  icon?: JSX.Element;
};

export const BottomDrawer = ({
  children,
  onClose,
  isVisible,
  textAlign = "center",
  icon,
}: BottomDrawerProps) => {
  return (
    <DrawerProvider onClose={onClose} textAlign={textAlign}>
      <Modal
        isVisible={isVisible}
        backdropOpacity={0.6}
        swipeDirection="down"
        onBackdropPress={onClose}
        animationInTiming={450}
        animationOutTiming={450}
        hideModalContentWhileAnimating
        useNativeDriverForBackdrop
        propagateSwipe
        style={{
          justifyContent: "flex-end",
          marginHorizontal: 0,
          marginBottom: 0,
        }}
      >
        <Box
          borderBottomLeftRadius="none"
          borderBottomRightRadius="none"
          borderTopRightRadius="lg"
          borderTopLeftRadius="lg"
          paddingHorizontal="md"
          justifyContent="center"
          backgroundColor="lightGrey"
        >
          <Box>
            <DrawerHandle onClose={onClose} />
          </Box>
          {children}
        </Box>
      </Modal>
    </DrawerProvider>
  );
};
