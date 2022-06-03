import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { inlineLoaderLightData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

export type DarkInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 *
 * This component should only be used on light backgrounds with low saturation (e.g. white, light grey etc.). For colored backgrounds, please use the LightInlineLoader or DarkInlineLoader component.
 */
export const DarkInlineLoader = ({
  width,
  maxWidth,
  ...props
}: DarkInlineLoaderProps) => {
  return (
    <Box alignItems="center" justifyContent="center" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <Lottie source={inlineLoaderLightData} loop autoPlay />
      </Box>
    </Box>
  );
};
