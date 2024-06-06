import { Box, BoxProps, Center } from "@chakra-ui/react";
import { inlineLoaderColorData } from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";
import { inlineLoaderColorPrideData } from "@vygruppen/spor-loader";
import { usePride } from "../pride";

export type ColorInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 *
 * This component should only be used on light backgrounds with low saturation (e.g. white, light grey etc.). For colored backgrounds, please use the LightInlineLoader component.
 */
export const ColorInlineLoader = ({
  width,
  maxWidth,
  ...props
}: ColorInlineLoaderProps) => {
  const { isPride } = usePride();
  return (
    <Center {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => (
            <Lottie
              animationData={
                isPride ? inlineLoaderColorPrideData : inlineLoaderColorData
              }
            />
          )}
        </ClientOnly>
      </Box>
    </Center>
  );
};
