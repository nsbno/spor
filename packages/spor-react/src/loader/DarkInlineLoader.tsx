"use client";
import { Box, BoxProps, Center, VisuallyHidden } from "@chakra-ui/react";
import { inlineLoaderDarkData } from "@vygruppen/spor-loader";

import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type DarkInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 */
export const DarkInlineLoader = ({
  width,
  maxWidth,
  ...props
}: DarkInlineLoaderProps) => {
  return (
    <Center role="status" aria-live="polite" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          <Lottie animationData={inlineLoaderDarkData} />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
    </Center>
  );
};
