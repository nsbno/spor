import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { spinnerDarkData } from "@vygruppen/spor-loader";
import { Text } from "@vygruppen/spor-typography-react-native";
import Lottie from "lottie-react-native";
import React from "react";

export type DarkSpinnerProps = BoxProps & { children?: React.ReactNode };
export const DarkSpinner = ({
  children,
  height,
  width,
  ...props
}: DarkSpinnerProps) => {
  return (
    <Box width={width ?? "100%"} height={height ?? width ?? "100%"} {...props}>
      <Lottie source={spinnerDarkData} autoPlay loop />
      {children && (
        <Text mt={3} fontWeight="bold">
          {children}
        </Text>
      )}
    </Box>
  );
};
