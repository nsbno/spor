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
};

export const BottomDrawer = ({
  children,
  onClose,
  isVisible,
  textAlign,
}: BottomDrawerProps) => {
  return (
    <DrawerProvider onClose={onClose} textAlign={textAlign}>
      <Box>
        <Modal
          isVisible={isVisible}
          backdropOpacity={0.6}
          swipeDirection="down"
          onBackdropPress={onClose}
          animationInTiming={450}
          animationOutTiming={450}
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
            marginHorizontal: 0,
            marginBottom: 0,
          }}
        >
          <Box
            justifyContent="center"
            borderBottomLeftRadius="none"
            borderBottomRightRadius="none"
            borderTopRightRadius="lg"
            borderTopLeftRadius="lg"
            paddingHorizontal="md"
            backgroundColor="lightGrey"
          >
            <DrawerHandle onClose={onClose} />
            {children}
          </Box>
        </Modal>
      </Box>
    </DrawerProvider>
  );
};
