import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { inlineLoaderLightData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

export type LightInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 *
 * This component should only be used on dark backgrounds with high saturation (e.g. dark teal etc.). For light backgrounds, please use the DarkInlineLoader or ColorInlineLoader components.
 */
export const LightInlineLoader = ({
  width,
  maxWidth,
  ...props
}: LightInlineLoaderProps) => {
  return (
    <Box alignItems="center" justifyContent="center" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <Lottie source={inlineLoaderLightData} loop autoPlay />
      </Box>
    </Box>
  );
};
