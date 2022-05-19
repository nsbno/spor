import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { ClientOnly } from "remix-utils";
import { animationData } from "./animation-data/content-loader";
import { Lottie } from "./Lottie";

export type ContentLoaderProps = BoxProps;
export const ContentLoader = ({ children, ...props }: ContentLoaderProps) => {
  return (
    <Box {...props}>
      <Box maxWidth="140px" mx="auto">
        <ClientOnly>
          {() => <Lottie animationData={animationData} />}
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
