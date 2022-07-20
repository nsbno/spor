import * as React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Button } from "@vygruppen/spor-button-react-native";

type Props = {
  onClose: () => void;
};

export function DrawerHandle({ onClose }: Props) {
  return (
    <Box flex={1} paddingVertical="2xs" alignItems="center">
      <Box backgroundColor="steel" borderRadius="xs" height={6}>
        <Button variant="ghost" onPress={onClose}></Button>
      </Box>
    </Box>
  );
}
