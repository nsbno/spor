import { Box, BoxProps } from "@chakra-ui/react";
import { contentLoaderData } from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type ContentLoaderProps = BoxProps;
/**
 * ContentLoader is a component that renders a loading animation.
 * It should mostly be used for
 */
export const ContentLoader = ({ children, ...props }: ContentLoaderProps) => {
  return (
    <Box {...props}>
      <Box maxWidth="140px" mx="auto">
        <ClientOnly>
          {() => <Lottie animationData={contentLoaderData} />}
        </ClientOnly>
      </Box>
      {children && (
        <Box textAlign="center" fontWeight="bold">
          {children}
        </Box>
      )}
    </Box>
  );
};
