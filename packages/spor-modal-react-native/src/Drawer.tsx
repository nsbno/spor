import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { DrawerHandle } from "./DrawerHandle";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  icon?: JSX.Element;
};

export function Drawer({
  onClose,
  children,
  isOpen,
}: React.PropsWithChildren<Props>) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      isVisible={isOpen}
      backdropOpacity={0.6}
      onBackdropPress={onClose}
      animationInTiming={450}
      animationOutTiming={450}
      hideModalContentWhileAnimating
      useNativeDriverForBackdrop
      useNativeDriver
      propagateSwipe
      style={{
        justifyContent: "flex-end",
        marginHorizontal: 0,
        marginBottom: 0,
      }}
    >
      <Box
        borderTopRightRadius="lg"
        borderTopLeftRadius="lg"
        paddingHorizontal="xl"
        justifyContent="center"
        backgroundColor="lightGrey"
        maxHeight={Dimensions.get("window").height - insets.top}
      >
        <DrawerHandle onClose={onClose} />
        {children}
      </Box>
    </Modal>
  );
}
