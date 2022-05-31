import { Box, BoxProps, Center } from "@chakra-ui/react";
import {
  fullScreenLoaderBlackData,
  fullScreenLoaderWhiteData,
} from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

type FullScreenLoaderProps = {
  colorScheme: "alias.darkTeal" | "alias.white";
} & Exclude<BoxProps, "colorScheme">;

/**
 * FullScreenLoader is a component that renders a loading animation on the entire screen.
 *
 * ```tsx
 * <FullScreenLoader colorScheme="alias.white" />
 * ```
 */
export const FullScreenLoader = ({
  width,
  maxWidth,
  colorScheme,
  ...props
}: FullScreenLoaderProps) => {
  return (
    <Center height="100%" {...props} background={colorScheme}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => (
            <Lottie
              animationData={
                colorScheme === "alias.white"
                  ? fullScreenLoaderBlackData
                  : fullScreenLoaderWhiteData
              }
            />
          )}
        </ClientOnly>
      </Box>
    </Center>
  );
};
