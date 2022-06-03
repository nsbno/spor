import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { inlineLoaderColorData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

export type ColorInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 *
 * This component should only be used on light backgrounds with low saturation (e.g. white, light grey etc.). For colored backgrounds, please use the LightInlineLoader or DarkInlineLoader component.
 */
export const ColorInlineLoader = ({
  width,
  maxWidth,
  ...props
}: ColorInlineLoaderProps) => {
  return (
    <Box alignItems="center" justifyContent="center" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <Lottie source={inlineLoaderColorData} />
      </Box>
    </Box>
  );
};
