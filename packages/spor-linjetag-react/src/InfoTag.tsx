import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { LineIcon } from "./LineIcon";
import type { TagProps } from "./types";

/**
 * An info tag component.
 *
 * Shows a line icon, a title and an optional description.
 *
 * ```tsx
 * <InfoTag variant="subway" title="3" description="Ringen" />
 * ```
 * They support three different sizes – `sm`, `md` and `lg`.
 *
 * ```tsx
 * <InfoTag
 *   variant="subway"
 *   size="lg"
 *   title="3"
 *   description="Ringen"
 * />
 * ```
 *
 * @see https://spor.cloud.vy.no/komponenter/linjetags
 */
export const InfoTag = ({
  variant,
  size = "md",
  title,
  description,
}: TagProps) => {
  const styles = useMultiStyleConfig("InfoTag", { variant, size });
  return (
    <Box sx={styles.container}>
      <LineIcon
        variant={variant}
        size={size}
        sx={styles.iconContainer}
      />
      <Box sx={styles.textContainer}>
        {title && (
          <Box as="span" sx={styles.title}>
            {title}
          </Box>
        )}
        {title && description && " "}
        {description && (
          <Box as="span" sx={styles.description}>
            {description}
          </Box>
        )}
      </Box>
    </Box>
  );
};
