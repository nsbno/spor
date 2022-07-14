import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { contentLoaderData } from "@vygruppen/spor-loader";
import { Text } from "@vygruppen/spor-typography-react-native";
import Lottie from "lottie-react-native";
import React from "react";

export type ContentLoaderProps = BoxProps & { children?: React.ReactNode };
/**
 * ContentLoader is a component that renders a loading animation.
 *
 * You can pass in an optional description to be rendered below the animation as `children`.
 *
 * ```tsx
 * <ContentLoader>Please wait</ContentLoader>
 * ```
 */
export const ContentLoader = ({ children, ...props }: ContentLoaderProps) => {
  return (
    <Box {...props}>
      <Box
        maxWidth={140}
        width={140}
        height={140}
        maxHeight={140}
        alignSelf="center"
      >
        <Lottie source={contentLoaderData} loop autoPlay />
      </Box>
      {children && (
        <Box maxWidth={200} width="100%" alignSelf="center">
          <Text variant="sm" textAlign="center" fontWeight="bold">
            {children}
          </Text>
        </Box>
      )}
    </Box>
  );
};
