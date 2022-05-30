import { BoxProps, Skeleton as ChakraSkeleton } from "@chakra-ui/react";
import React from "react";

export type SkeletonProps = BoxProps & {
  isLoaded?: boolean;
};
/**
 * Skeleton renders a loading animation for a given box. It works great as a placeholder to avoid layout shifts.
 */
export const Skeleton = (props: SkeletonProps) => <ChakraSkeleton {...props} />;
