import { Box, BoxProps, Center } from "@chakra-ui/react";
import {
  spinnerColorData,
  spinnerColorPrideData,
} from "@vygruppen/spor-loader";
import React from "react";
import { ClientOnly } from "./ClientOnly";
import Lottie from "./Lottie";
import { usePride } from "../pride/PrideProvider";

export type SpinnerProps = BoxProps;
export type ColorSpinnerProps = SpinnerProps;
/** A circular spinner
 *
 * Can be used in place of a loading animation, or for reloading app state, for instance.
 *
 * ```tsx
 * <ColorSpinner width="64px" height="64px" />
 * ```
 *
 * You can also pass an explanatory text as `children`:
 *
 * ```tsx
 * <ColorSpinner>
 *   Hold your horses
 * </ColorSpinner>
 */
export const ColorSpinner = ({
  children,
  width,
  maxWidth,

  ...props
}: SpinnerProps) => {
  const { isPride } = usePride();
  return (
    <Center flexDirection="column" {...props}>
      <Box width={width} maxWidth={maxWidth}>
        <ClientOnly>
          {() => (
            <Lottie
              animationData={isPride ? spinnerColorPrideData : spinnerColorData}
            />
          )}
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
