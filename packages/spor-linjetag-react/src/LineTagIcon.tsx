import { Box, BoxProps } from "@vygruppen/spor-layout-react";
import React from "react";
import { variantStyling } from "./styling";
import type { Size, Variant } from "./types";

type LineIconProps = BoxProps & {
  variant: Variant;
  size: Size;
};
export const LineTagIcon = ({ variant, size, ...rest }: LineIconProps) => {
  const styles = variantStyling[variant];
  const Icon = styles.icons[size];
  return (
    <Box
      backgroundColor={styles.mainBackgroundColor}
      borderWidth={styles.borderColor ? 1 : 0}
      borderStyle="solid"
      borderColor={styles.borderColor ?? "transparent"}
      {...rest}
    >
      <Icon color={styles.iconColor} />
    </Box>
  );
};
