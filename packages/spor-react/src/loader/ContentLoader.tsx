import { Box, BoxProps } from "@chakra-ui/react";
import {
  contentLoaderData,
  contentLoaderPrideData,
} from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";
import { usePride } from "../pride/PrideProvider";

export type ContentLoaderProps = BoxProps;
/**
 * ContentLoader is a component that renders a loading animation.
 * It should mostly be used for
 */
export const ContentLoader = ({ children, ...props }: ContentLoaderProps) => {
  const { isPride } = usePride();
  return (
    <Box {...props}>
      <Box maxWidth="140px" marginX="auto">
        <ClientOnly>
          {() => (
            <Lottie
              animationData={
                isPride ? contentLoaderPrideData : contentLoaderData
              }
            />
          )}
        </ClientOnly>
      </Box>
      {children && (
        <Box textAlign="center" fontWeight="bold">
          {children}
        </Box>
      )}
    </Box>
  );
};
