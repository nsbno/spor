import { Box, BoxProps, Center } from "@chakra-ui/react";
import {
  inlineLoaderColorPrideData,
  inlineLoaderDarkData,
} from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";
import { usePride } from "../pride/PrideProvider";

export type DarkInlineLoaderProps = Exclude<BoxProps, "children">;
/**
 * Loading component that works well in bounded contexts, like inside a button.
 */
export const DarkInlineLoader = ({
  width,
  maxWidth,
  ...props
}: DarkInlineLoaderProps) => {
  const { isPride } = usePride();
  return (
    <Center {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => (
            <Lottie
              animationData={
                isPride ? inlineLoaderColorPrideData : inlineLoaderDarkData
              }
            />
          )}
        </ClientOnly>
      </Box>
    </Center>
  );
};
