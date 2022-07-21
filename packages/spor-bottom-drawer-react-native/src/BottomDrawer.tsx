import React, { createContext, useContext, useState } from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { DrawerHandle } from "./DrawerHandle";
import Modal from "react-native-modal";
import { DrawerProvider } from "./DrawerContext";
import { StyleProp } from "react-native";

type BottomDrawerProps = {
  children: React.ReactNode;
  onClose: () => void;
  isVisible: boolean;
  textAlign: "left" | "center";
};

export const BottomDrawer = ({
  children,
  onClose,
  isVisible,
  textAlign = "center",
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
          <DrawerHandle onClose={onClose} />
          {children}
        </Box>
      </Modal>
    </DrawerProvider>
  );
};
