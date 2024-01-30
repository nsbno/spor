import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { LineIcon } from "./LineIcon";
import type { TagProps } from "./types";

export type InfoTagProps = TagProps;

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
 * If required, you can also override the colors and icons in these line tags:
 *
 * ```tsx
 * <InfoTag
 *  variant="custom"
 *  customIconVariant="ferry"
 *  foregroundColor="#b4da55"
 *  backgroundColor="#c0ffee"
 * />
 * ```
 *
 * @see https://spor.vy.no/components/line-tags
 */
export const InfoTag = ({
  variant,
  size = "md",
  title,
  description,
  ...customProps
}: InfoTagProps) => {
  const styles = useMultiStyleConfig("InfoTag", {
    variant,
    size,
    ...customProps,
  });
  return (
    <Box sx={styles.container}>
      <LineIcon
        variant={variant}
        size={size}
        sx={styles.iconContainer}
        {...(customProps as any)} // TODO: Fix this
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
