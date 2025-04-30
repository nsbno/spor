"use client";
import { Box, RecipeVariantProps, useSlotRecipe } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

import { infoTagSlotRecipe } from "../theme/slot-recipes/info-tag";
import { LineIcon } from "./LineIcon";
import type { TagProps } from "./types";

type InfoTagVariantProps = RecipeVariantProps<typeof infoTagSlotRecipe>;

export type InfoTagProps = TagProps & PropsWithChildren<InfoTagVariantProps>;

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
  const recipe = useSlotRecipe({ key: "infoTag" });

  const styles = recipe({
    variant,
    size,
    ...customProps,
  });

  return (
    <Box css={styles.container}>
      <LineIcon
        variant={variant}
        size={size}
        aria-label={title}
        {...(customProps as any)} // TODO: Fix this
      />
      <Box css={styles.textContainer}>
        {title && (
          <Box as="span" css={styles.title}>
            {title}
          </Box>
        )}
        {title && description && " "}
        {description && (
          <Box as="span" css={styles.description}>
            {description}
          </Box>
        )}
      </Box>
    </Box>
  );
};
