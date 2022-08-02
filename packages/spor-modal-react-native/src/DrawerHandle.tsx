import * as React from "react";
import { Pressable } from "react-native";
import { Box } from "@vygruppen/spor-layout-react-native";

type Props = {
  onClose: () => void;
};

export const DrawerHandle = ({ onClose }: Props) => {
  return (
    <Box alignItems="center" paddingVertical="sm" flex={1}>
      <Box backgroundColor="steel" borderRadius="xs" height={6} width={42}>
        <Pressable onPress={onClose} accessibilityLabel={"close"}></Pressable>
      </Box>
    </Box>
  );
};
