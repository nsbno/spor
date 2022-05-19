import { BoxProps, SkeletonText as ChakraSkeletonText } from "@chakra-ui/react";
import React from "react";

export type SkeletonTextProps = BoxProps;
export const SkeletonText = (props: SkeletonTextProps) => (
  <ChakraSkeletonText boxSize={6} {...props} />
);
