import { Box, BoxProps, Center } from "@chakra-ui/react";
import { fullScreenLoaderBlackData } from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

type LightFullScreenLoaderProps = BoxProps;

export const LightFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: LightFullScreenLoaderProps) => {
  return (
    <Center height="100%" background="white" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={fullScreenLoaderBlackData} />}
        </ClientOnly>
      </Box>
    </Center>
  );
};
