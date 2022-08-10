import { Box, BoxProps } from "@vygruppen/spor-layout-react-native";
import React from "react";
import { variantStyling } from "./styling";
import type { Size, Variant } from "./types";

type LineIconProps = BoxProps & {
  variant: Variant;
  size: Size;
};
/**
 * The line tag icon component
 */
export const LineTagIcon = ({ variant, size, ...rest }: LineIconProps) => {
  const styles = variantStyling[variant];
  const Icon = styles.icons[size];
  return (
    <Box
      backgroundColor={styles.mainBackgroundColor}
      borderWidth={1}
      borderStyle="solid"
      borderColor={styles.borderColor ?? "transparent"}
      p={1}
      {...rest}
    >
      <Icon color={styles.iconColor} />
    </Box>
  );
};
