import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { inlineLoaderLightData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

type Props = {
  height: number | string;
};
/**
 * Loading component that works well in bounded contexts, like inside a button.
 *
 * This component should only be used on dark backgrounds with high saturation (e.g. dark teal etc.). For light backgrounds, please use the DarkInlineLoader or ColorInlineLoader components.
 */
export function LightInlineLoader({ height }: Props) {
  return (
    <Box alignItems="center" justifyContent="center" style={{ height }}>
      <Lottie
        source={inlineLoaderLightData}
        autoPlay
        loop
        resizeMode="cover"
        style={{ height: "100%" }}
      />
    </Box>
  );
}
