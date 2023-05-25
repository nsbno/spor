import { spinnerDarkData } from "@vygruppen/spor-loader";
import React from "react";
import { Box, BoxProps, Center } from "..";
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
  return (
    <Center flexDirection="column" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => <Lottie animationData={spinnerDarkData} />}
        </ClientOnly>
      </Box>
      {children && (
        <Box marginTop={3} fontWeight="bold">
          {children}
        </Box>
      )}
    </Center>
  );
};
