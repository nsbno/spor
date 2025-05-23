"use client";
import { spinnerDarkData, spinnerLightData } from "@vygruppen/spor-loader";

import { Box, BoxProps, Center, useColorMode, VisuallyHidden } from "..";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";

export type DarkSpinnerProps = BoxProps;
/** A circular spinner
 *
 * Can be used in place of a loading animation, or for reloading app state, for instance.
 *
 * ```tsx
 * <DarkSpinner width="64px" height="64px" />
 * ```
 *
 * You can also pass an explanatory text as `children`:
 *
 * ```tsx
 * <DarkSpinner>
 *   Hold your horses
 * </DarkSpinner>
 */
export const DarkSpinner = ({
  children,
  width,
  maxWidth,
  ...props
}: DarkSpinnerProps) => {
  const { colorMode } = useColorMode();
  const spinnerData = colorMode === "dark" ? spinnerLightData : spinnerDarkData;
  return (
    <Center flexDirection="column" role="status" aria-live="polite" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          <Lottie animationData={spinnerData} />
        </ClientOnly>
      </Box>
      <VisuallyHidden>Loading...</VisuallyHidden>
      {children && (
        <Box marginTop={3} fontWeight="bold">
          {children}
        </Box>
      )}
    </Center>
  );
};
