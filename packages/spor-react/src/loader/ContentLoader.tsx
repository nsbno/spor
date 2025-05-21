"use client";
import { Box, BoxProps, VisuallyHidden } from "@chakra-ui/react";

import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type ContentLoaderProps = BoxProps;
/**
 * ContentLoader is a component that renders a loading animation.
 * It should mostly be used for loading content that is not yet available.
 */
export const ContentLoader = ({ children, ...props }: ContentLoaderProps) => {
  return (
    <Box role="status" aria-live="polite" {...props}>
      <Box maxWidth="140px" marginX="auto">
        <ClientOnly>
          <Lottie animationKey='contentLoader' />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
      {children && (
        <Box textAlign="center" fontWeight="bold">
          {children}
        </Box>
      )}
    </Box>
  );
};
