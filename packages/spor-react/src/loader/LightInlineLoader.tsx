import { Box, BoxProps, Center } from "@chakra-ui/react";
import {
  inlineLoaderColorPrideData,
  inlineLoaderLightData,
} from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";
import { usePride } from "../pride/PrideProvider";

export type LightInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 */
export const LightInlineLoader = ({
  width,
  maxWidth,
  ...props
}: LightInlineLoaderProps) => {
  const { isPride } = usePride();
  return (
    <Center {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => (
            <Lottie
              animationData={
                isPride ? inlineLoaderColorPrideData : inlineLoaderLightData
              }
            />
          )}
        </ClientOnly>
      </Box>
    </Center>
  );
};
