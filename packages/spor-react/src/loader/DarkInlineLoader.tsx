import { Box, BoxProps, Center } from "@chakra-ui/react";
import { inlineLoaderDarkData } from "@vygruppen/spor-loader";
import React from "react";
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
    <Center {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={inlineLoaderDarkData} />}
        </ClientOnly>
      </Box>
    </Center>
  );
};
