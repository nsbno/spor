import { Box, BoxProps, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { getCorrectIcon } from "./icons";
import { TagProps } from "./types";

type LineIconProps = BoxProps & {
  variant: TagProps["variant"];
  size: TagProps["size"];
};

/**
 * A line icon component.
 *
 * Shows a line icon with the correct color scheme.
 *
 * ```tsx
 * <LineIcon variant="subway" />
 * ```
 *
 * They support three different sizes – `sm`, `md` and `lg`.
 *
 * ```tsx
 * <LineIcon variant="subway" size="lg" />
 * ```
 *
 * @see https://spor.vy.no/komponenter/linjetags
 */
export const LineIcon = ({
  variant,
  size = "md",
  sx,
  ...rest
}: LineIconProps) => {
  const styles = useMultiStyleConfig("LineIcon", { variant, size });
  const Icon: any = getCorrectIcon({ variant, size });
  if (!Icon) {
    return null;
  }
  return (
    <Box sx={{ ...styles.iconContainer, ...sx }} {...rest}>
      <Icon sx={styles.icon} />
    </Box>
  );
};
