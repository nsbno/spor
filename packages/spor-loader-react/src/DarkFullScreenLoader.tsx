import { Box, BoxProps, Center } from "@chakra-ui/react";
import { fullScreenLoaderWhiteData } from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

type DarkFullScreenLoaderProps = BoxProps;

export const DarkFullScreenLoader = ({
  width,
  maxWidth,
  ...props
}: DarkFullScreenLoaderProps) => {
  return (
    <Center height="100%" background="alias.darkTeal" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={fullScreenLoaderWhiteData} />}
        </ClientOnly>
      </Box>
    </Center>
  );
};
