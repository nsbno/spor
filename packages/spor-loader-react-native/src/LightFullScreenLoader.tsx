import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { fullScreenLoaderBlackData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

type LightFullScreenLoaderProps = BoxProps;

/**
 * Full screen loader with white background and a black and green animated Vy logo.
 */
export const LightFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: LightFullScreenLoaderProps) => {
  return (
    <Box height="100%" backgroundColor="white" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <Lottie source={fullScreenLoaderBlackData} />
      </Box>
    </Box>
  );
};
