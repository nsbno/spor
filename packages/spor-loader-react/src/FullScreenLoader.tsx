import { Box, BoxProps, Center } from "@chakra-ui/react";
import { fullScreenLoaderData } from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

type FullScreenLoaderProps = {
  background: "alias.darkTeal" | "alias.white";
} & Exclude<BoxProps, "background">;

/**
 * FullScreenLoader is a component that renders a loading animation on the entire screen.
 * 
 * ```tsx
 * <FullScreenLoader background="alias.darkTeal" />
 * ```
 */
export const FullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: FullScreenLoaderProps) => {
  return (
    <Center height="100%" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={fullScreenLoaderData} />}
        </ClientOnly>
      </Box>
    </Center>
  );
};
