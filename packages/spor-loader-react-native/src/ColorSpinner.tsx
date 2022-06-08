import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import { spinnerColorData } from "@vygruppen/spor-loader";
import { Text } from "@vygruppen/spor-typography-react-native";
import Lottie from "lottie-react-native";
import React from "react";

export type ColorSpinnerProps = BoxProps & { children?: React.ReactNode };
/** A circular spinner
 *
 * Can be used in place of a loading animation, or for reloading app state, for instance.
 *
 * ```tsx
 * <ColorSpinner width={64} height={64} />
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
  height,
  width,
  ...props
}: ColorSpinnerProps) => {
  return (
    <Box width={width ?? "100%"} height={height ?? width ?? "100%"} {...props}>
      <Lottie source={spinnerColorData} autoPlay loop />
      {children && (
        <Text mt={3} fontWeight="bold">
          {children}
        </Text>
      )}
    </Box>
  );
};
