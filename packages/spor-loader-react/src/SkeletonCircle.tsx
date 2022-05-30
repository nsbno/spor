import {
  BoxProps,
  SkeletonCircle as ChakraSkeletonCircle,
} from "@chakra-ui/react";
import React from "react";

export type SkeletonCircleProps = BoxProps;
/**
 * SkeletonCircle renders a loading animation for a given circle. It works great as a placeholder to avoid layout shifts.
 */
export const SkeletonCircle = (props: SkeletonCircleProps) => (
  <ChakraSkeletonCircle boxSize={6} borderRadius="50%" {...props} />
);
