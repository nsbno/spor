"use client";
import {
  Box,
  BoxProps,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";

import { lineIconSlotRecipe } from "../theme/slot-recipes/line-icon";
import { getCorrectIcon } from "./icons";
import { CustomVariantProps, TagProps } from "./types";

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
    disabled?: boolean;
    target?: string;
    label: string;
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
    disabled,
    style,
    target = "lineIcon",
    label,
    ...rest
  }) {
    const recipe = useSlotRecipe({ key: "lineIcon" });
    const styles = recipe({ variant, size, ...rest });

    const targetPadding = () => {
      return target === "travelTag" ? 0.5 : 1;
    };

    const borderContainer = () => {
      return variant === "walk" && target === "travelTag" ? 0 : 0.5;
    };

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

    if (foregroundColor) {
      styles.iconContainer.backgroundColor = disabled
        ? "surface.disabled"
        : foregroundColor;
    }

    return (
      <Box
        css={{ ...styles.iconContainer, ...style }}
        padding={targetPadding()}
        borderWidth={borderContainer()}
        borderColor={variant === "walk" ? "core.outline" : "transparent"}
        aria-label={label}
      >
        <Icon css={styles.icon} />
      </Box>
    );
  },
);
