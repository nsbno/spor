import React from "react";
import { useExpandAnimation } from "./utils";
import { Animated, View } from "react-native";

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
          paddingBottom: 12,
          paddingHorizontal: 12,
        }}
        onLayout={handleLayoutChanges}
      >
        {children}
      </Animated.View>
    </View>
  );
}
