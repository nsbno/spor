import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { spinnerData } from "@vygruppen/spor-loader";
import Lottie from "lottie-react-native";
import React from "react";

export type SpinnerProps = BoxProps;
export const Spinner = (props: SpinnerProps) => {
  console.log("spinner");
  return (
    <Box maxWidth={80} {...props}>
      <Lottie source={spinnerData} autoPlay loop />
    </Box>
  );
};
