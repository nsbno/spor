"use client";
import {
  Box,
  BoxProps,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { getCorrectIcon } from "./icons";
import { CustomVariantProps, TagProps } from "./types";
import { lineIconSlotRecipe } from "../theme/slot-recipes/line-icon";

type LineIconVariantProps = RecipeVariantProps<typeof lineIconSlotRecipe>;

type DefaultVariants = Exclude<TagProps["variant"], "custom">;

type DefaultVariantProps = {
  variant: DefaultVariants;
};

type VariantProps = DefaultVariantProps | CustomVariantProps;

export type LineIconProps = Exclude<BoxProps, "variant"> &
  VariantProps &
  PropsWithChildren<LineIconVariantProps> & {
    size: TagProps["size"];
    foregroundColor?: string;
    backgroundColor?: string;
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

export const LineIcon = forwardRef<HTMLDivElement, LineIconProps>(
  function LineIcon({
    variant,
    size = "md",
    foregroundColor,
    backgroundColor,
    style,
    ...rest
  }) {
    const recipe = useSlotRecipe({ key: "lineIcon" });
    const styles = recipe({ variant, size, ...rest });

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
      <Box css={styles.iconContainer} backgroundColor={foregroundColor}>
        <Icon css={styles.icon} />
      </Box>
    );
  },
);
