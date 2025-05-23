"use client";
import { Box, BoxProps, Center, VisuallyHidden } from "@chakra-ui/react";

import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type LightInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 */
export const LightInlineLoader = ({
  width,
  maxWidth,
  ...props
}: LightInlineLoaderProps) => {
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
          <Lottie animationKey='inlineLoaderLight' />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Center>
  );
};
