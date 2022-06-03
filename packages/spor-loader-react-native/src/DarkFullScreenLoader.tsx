import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { fullScreenLoaderWhiteData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

type DarkFullScreenLoaderProps = BoxProps;

/**
 * Full screen loader with dark teal background and a white animated Vy logo.
 */
export const DarkFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: DarkFullScreenLoaderProps) => {
  return (
    <Box height="100%" backgroundColor="darkTeal" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <Lottie source={fullScreenLoaderWhiteData} />
      </Box>
    </Box>
  );
};
