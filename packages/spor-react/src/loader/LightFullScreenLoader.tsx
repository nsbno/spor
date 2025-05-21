"use client";
import { Box, BoxProps, Center, VisuallyHidden } from "@chakra-ui/react";

import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

type LightFullScreenLoaderProps = BoxProps;

export const LightFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: LightFullScreenLoaderProps) => {
  return (
    <Center
      height="100%"
      background="white"
      role="status"
      aria-live="polite"
      {...props}
    >
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          <Lottie animationKey='fullScreenLoaderBlack' />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Center>
  );
};
