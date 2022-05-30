import { Box, BoxProps, Center } from "@chakra-ui/react";
import React from "react";
import { animationData } from "./animation-data/spinner";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type SpinnerProps = BoxProps;
/** A circular spinner
 *
 * Can be used in place of a loading animation, or for reloading app state, for instance.
 *
 * ```tsx
 * <Spinner width="64px" height="64px" />
 * ```
 *
 * You can also pass an explanatory text as `children`:
 *
 * ```tsx
 * <Spinner>
 *   Hold your horses
 * </Spinner>
 */
export const Spinner = ({
  children,
  width,
  maxWidth,
  ...props
}: SpinnerProps) => {
  return (
    <Center flexDirection="column" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={animationData} />}
        </ClientOnly>
      </Box>
      {children && (
        <Box mt={3} fontWeight="bold">
          {children}
        </Box>
      )}
    </Center>
  );
};
