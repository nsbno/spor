"use client";
import { Box, BoxProps, Center, VisuallyHidden } from "@chakra-ui/react";
import { fullScreenLoaderWhiteData } from "@vygruppen/spor-loader";

import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

type DarkFullScreenLoaderProps = BoxProps;

export const DarkFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: DarkFullScreenLoaderProps) => {
  return (
    <Center
      height="100%"
      background="bg"
      className="dark"
      role="status"
      aria-live="polite"
      {...props}
    >
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          <Lottie animationData={fullScreenLoaderWhiteData} />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Center>
  );
};
