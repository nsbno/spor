import { useTheme } from "@shopify/restyle";
import { Box } from "@vygruppen/spor-layout-react-native";
import { Theme } from "@vygruppen/spor-theme-react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  children: JSX.Element;
};

export function DrawerFooter({ children }: Props) {
  const insets = useSafeAreaInsets();
  const theme = useTheme<Theme>();
  const styles = {
    marginBottom: insets.bottom > 0 ? insets.bottom : theme.spacing[2],
  };

  return (
    <Box marginTop={4} style={styles}>
      {children}
    </Box>
  );
}
