import { BoxProps, Skeleton as ChakraSkeleton } from "@chakra-ui/react";
import React from "react";

export type SkeletonProps = BoxProps & {
  isLoaded?: boolean;
};
export const Skeleton = (props: SkeletonProps) => <ChakraSkeleton {...props} />;
