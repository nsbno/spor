import { Box, BoxProps, Center } from "@chakra-ui/react";
import { inlineLoaderLightData } from "@vygruppen/spor-loader";
import React from "react";
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
    <Center {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={inlineLoaderLightData} />}
        </ClientOnly>
      </Box>
    </Center>
  );
};
