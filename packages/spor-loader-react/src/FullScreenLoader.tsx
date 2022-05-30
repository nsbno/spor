import { Box, BoxProps, Center } from "@chakra-ui/react";
import React from "react";
import { animationData } from "./animation-data/full-screen-loader";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

type FullScreenLoaderProps = {
  background: "alias.darkTeal" | "alias.white";
} & Exclude<BoxProps, "background">;

export const FullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: FullScreenLoaderProps) => {
  return (
    <Center height="100%" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={animationData} />}
        </ClientOnly>
      </Box>
    </Center>
  );
};
