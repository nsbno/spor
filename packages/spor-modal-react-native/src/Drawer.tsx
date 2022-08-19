import { Box } from "@vygruppen/spor-layout-react-native";
import React from "react";
import { Dimensions } from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DrawerHandle } from "./DrawerHandle";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

/** Renders a drawer.
 *
 * Can be used when you want to render a customizable drawer with different kinds of content.
 *
 * A drawer can look like this:
 *
 * ```tsx
 * <Drawer isOpen={} onClose={} title="Title">
 *  <DrawerHeader size="lg">Small drawer</DrawerHeader>
 *  <Text variant="md">Content</Text>
 *  <Text variant="md">Content 2</Text>
 *  <DrawerFooter>
 *    <Button variant="primary">Close</Button>
 *  </DrawerFooter>
 * </Drawer>
 * ```
 */
export function Drawer({ onClose, children, isOpen }: Props) {
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
        paddingHorizontal={5}
        justifyContent="center"
        backgroundColor="white"
        maxHeight={Dimensions.get("window").height - insets.top}
      >
        <DrawerHandle onClose={onClose} />
        {children}
      </Box>
    </Modal>
  );
}
