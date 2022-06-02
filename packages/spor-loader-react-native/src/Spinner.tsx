import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { spinnerData } from "@vygruppen/spor-loader";
import { Text } from "@vygruppen/spor-typography-react-native";
import Lottie from "lottie-react-native";
import React from "react";

export type SpinnerProps = BoxProps & { children: React.ReactNode };
export const Spinner = ({
  children,
  height,
  width,
  ...props
}: SpinnerProps) => {
  return (
    <Box width={width ?? "100%"} height={height ?? width ?? "100%"} {...props}>
      <Lottie source={spinnerData} autoPlay loop />
      {children && (
        <Text mt={3} fontWeight="bold">
          {children}
        </Text>
      )}
    </Box>
  );
};
