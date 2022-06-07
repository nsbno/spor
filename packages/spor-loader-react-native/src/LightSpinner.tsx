import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { spinnerLightData } from "@vygruppen/spor-loader";
import { Text } from "@vygruppen/spor-typography-react-native";
import Lottie from "lottie-react-native";
import React from "react";

export type LightSpinnerProps = BoxProps & { children: React.ReactNode };
export const LightSpinner = ({
  children,
  height,
  width,
  ...props
}: LightSpinnerProps) => {
  return (
    <Box width={width ?? "100%"} height={height ?? width ?? "100%"} {...props}>
      <Lottie source={spinnerLightData} autoPlay loop />
      {children && (
        <Text mt={3} fontWeight="bold">
          {children}
        </Text>
      )}
    </Box>
  );
};
