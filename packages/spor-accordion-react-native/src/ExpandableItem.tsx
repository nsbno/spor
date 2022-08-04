import React from "react";
import { useExpandAnimation } from "./utils";
import { Animated, View } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "@vygruppen/spor-theme-react-native";

type Props = {
  children: React.ReactNode;
  isExpanded: boolean;
  defaultExpanded?: boolean;
};
export function ExpandableItem({
  children,
  isExpanded,
  defaultExpanded,
}: Props) {
  const theme = useTheme<Theme>();
  const { heightAnim, opacityAnim, handleLayoutChanges } = useExpandAnimation(
    isExpanded,
    defaultExpanded
  );

  return (
    <View>
      <Animated.View style={{ height: heightAnim }} />
      <Animated.View
        style={{
          position: "absolute",
          opacity: opacityAnim,
          flex: 1,
          flexGrow: 1,
          paddingBottom: theme.spacing.sm,
          paddingHorizontal: theme.spacing.sm,
        }}
        onLayout={handleLayoutChanges}
      >
        {children}
      </Animated.View>
    </View>
  );
}
