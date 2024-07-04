import { Box, BoxProps, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { getCorrectIcon } from "./icons";
import { CustomVariantProps, TagProps } from "./types";

type DefaultVariants = Exclude<TagProps["variant"], "custom">;

type DefaultVariantProps = {
  variant: DefaultVariants;
};

type VariantProps = DefaultVariantProps | CustomVariantProps;

export type LineIconProps = Exclude<BoxProps, "variant"> &
  VariantProps & {
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
 * If you require some one-off colors, but still want to use the line tag component,
 * you can do so like this:
 *
 * ```tsx
 * <LineIcon
 *  variant="custom"
 *  customIconVariant="ferry"
 *  foregroundColor="#b4da55"
 *  backgroundColor="#c0ffee"
 * />
 * ```
 *
 * @see https://spor.vy.no/components/line-tags
 */
export const LineIcon = ({
  variant,
  size = "md",
  sx,
  ...rest
}: LineIconProps) => {
  const styles = useMultiStyleConfig("LineIcon", { variant, size, ...rest });
  const Icon: any = getCorrectIcon({
    variant:
      variant === "custom" && "customIconVariant" in rest
        ? rest.customIconVariant
        : variant === "custom"
          ? "local-train"
          : variant,
    size,
  });
  if (!Icon) {
    return null;
  }
  return (
    <Box sx={{ ...styles.iconContainer, ...sx }}>
      <Icon sx={styles.icon} />
    </Box>
  );
};
