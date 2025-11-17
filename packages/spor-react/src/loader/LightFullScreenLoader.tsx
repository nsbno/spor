"use client";
import {
  Box,
  BoxProps,
  Center,
  ClientOnly,
  VisuallyHidden,
} from "@chakra-ui/react";
import { fullScreenLoaderBlackData } from "@vygruppen/spor-loader";

import Lottie from "./Lottie";

type LightFullScreenLoaderProps = BoxProps;

export const LightFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: LightFullScreenLoaderProps) => {
  return (
    <Center height="100%" role="status" aria-live="polite" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          <Lottie animationData={fullScreenLoaderBlackData} />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Center>
  );
};
