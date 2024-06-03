import { Box, BoxProps, Center } from "@chakra-ui/react";
import { fullScreenLoaderBlackData } from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";
import { usePride } from "../pride";
import { vyLogoPrideData } from "@vygruppen/spor-loader";

type LightFullScreenLoaderProps = BoxProps;

export const LightFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: LightFullScreenLoaderProps) => {
  const { isPride } = usePride();
  return (
    <Center height="100%" background="white" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => (
            <Lottie
              animationData={
                isPride ? vyLogoPrideData : fullScreenLoaderBlackData
              }
            />
          )}
        </ClientOnly>
      </Box>
    </Center>
  );
};
