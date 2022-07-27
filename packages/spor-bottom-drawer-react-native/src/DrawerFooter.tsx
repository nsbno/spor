import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { StyleProp, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  children: JSX.Element;
};

export function DrawerFooter({ children }: Props) {
  const insets = useSafeAreaInsets();
  const styles = { marginBottom: insets.bottom > 0 ? insets.bottom : 12 };

  return (
    <Box marginTop="lg" style={styles}>
      {children}
    </Box>
  );
}
