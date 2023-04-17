import { Box, BoxProps, Center } from "@chakra-ui/react";
import { spinnerLightData } from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type LightSpinnerProps = BoxProps;
/** A circular spinner
 *
 * Can be used in place of a loading animation, or for reloading app state, for instance.
 *
 * ```tsx
 * <LightSpinner width="64px" height="64px" />
 * ```
 *
 * You can also pass an explanatory text as `children`:
 *
 * ```tsx
 * <LightSpinner>
 *   Hold your horses
 * </LightSpinner>
 */
export const LightSpinner = ({
  children,
  width,
  maxWidth,
  ...props
}: LightSpinnerProps) => {
  return (
    <Center flexDirection="column" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>{() => <Lottie animationData={spinnerLightData} />}</ClientOnly>
      </Box>
      {children && (
        <Box mt={3} fontWeight="bold">
          {children}
        </Box>
      )}
    </Center>
  );
};
