import {
  BoxProps,
  SkeletonCircle as ChakraSkeletonCircle,
} from "@chakra-ui/react";
import React from "react";

export type SkeletonCircleProps = BoxProps;
export const SkeletonCircle = (props: SkeletonCircleProps) => (
  <ChakraSkeletonCircle boxSize={6} borderRadius="50%" {...props} />
);
