import React from "react";
import { Box } from "@vygruppen/spor-layout-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@vygruppen/spor-theme-react-native";

type Props = {
  children: JSX.Element;
};

export function DrawerFooter({ children }: Props) {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();
  const styles = {
    marginBottom: insets.bottom > 0 ? insets.bottom : "sm",
  };

  return (
    <Box marginTop="lg" style={styles}>
      {children}
    </Box>
  );
}
