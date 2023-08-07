import { SkeletonText as ChakraSkeletonText, SkeletonTextProps as ChakraSkeletonTextProps } from "@chakra-ui/react";
import React from "react";

export type SkeletonTextProps = ChakraSkeletonTextProps
  
/**
 * SkeletonText renders a loading animation for a given text. It works great as a placeholder to avoid layout shifts.
 */
export const SkeletonText = (props: SkeletonTextProps) => (
  <ChakraSkeletonText boxSize={6} {...props} />
);
