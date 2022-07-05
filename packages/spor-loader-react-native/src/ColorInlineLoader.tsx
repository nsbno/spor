import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { inlineLoaderColorData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

export type ColorInlineLoaderProps = Exclude<BoxProps, "children">;

type Props = {
  height: number | string;
};

/**
 * Loading component that works well in bounded contexts, like inside a button.
 *
 * This component should only be used on light backgrounds with low saturation (e.g. white, light grey etc.). For colored backgrounds, please use the LightInlineLoader or DarkInlineLoader component.
 */
export function ColorInlineLoader({ height }: Props) {
  return (
    <Box alignItems="center" justifyContent="center" style={{ height }}>
      <Lottie
        source={inlineLoaderColorData}
        autoPlay
        loop
        resizeMode="cover"
        style={{ height: "100%" }}
      />
    </Box>
  );
}
