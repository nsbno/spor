"use client";
import {
  Box,
  BoxProps,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import {
  ErrorFill18Icon,
  ErrorFill24Icon,
  InformationFill18Icon,
  InformationFill24Icon,
  WarningFill18Icon,
  WarningFill24Icon,
} from "@vygruppen/spor-icon-react";
import React, { forwardRef, PropsWithChildren } from "react";
import { LineIcon } from "./LineIcon";
import type { TagProps } from "./types";
import { travelTagSlotRecipe } from "../theme/slot-recipes/travel-tag";

type TravelTagVariantProps = RecipeVariantProps<typeof travelTagSlotRecipe>;

type DeviationLevels = "critical" | "major" | "minor" | "info" | "none";

export type TravelTagProps = TagProps &
  BoxProps &
  PropsWithChildren<TravelTagVariantProps> & {
    deviationLevel?: DeviationLevels;
    disabled?: boolean;
    foregroundColor?: string;
    backgroundColor?: string;
    customIconVariant?: string;
  };

/**
 * A travel tag component.
 *
 * Shows a line icon, a title and an optional description.
 *
 * ```tsx
 * <TravelTag variant="subway" title="3" description="Ringen" />
 * ```
 *
 * They support three different sizes – `sm`, `md` and `lg`.
 *
 * You can also render them with a deviation level to indicate an extra focus:
 *
 * ```tsx
 * <TravelTag
 *   variant="subway"
 *   title="3"
 *   description="Ringen"
 *   size="lg"
 *   deviationLevel="critical"
 * />
 * ```
 *
 * Travel tags can be clickable by passing an `as="button"` prop. They can also be disabled.
 *
 * ```tsx
 * <TravelTag
 *  as="button"
 *  onClick={handleClick}
 *  variant="subway"
 *  title="3"
 *  description="Ringen"
 * />
 * ```
 *
 * If required, you can also override the colors and icons in these travel tags:
 *
 * ```tsx
 * <TravelTag
 *   variant="custom"
 *   customIconVariant="ferry"
 *   foregroundColor="#b4da55"
 *   backgroundColor="#c0ffee"
 *   title="3"
 *   description="Ringen"
 * />
 * ```
 *
 * @see https://spor.vy.no/components/line-tags
 */

export const TravelTag = forwardRef<HTMLDivElement, TravelTagProps>(
  function TravelTag(
    {
      variant,
      size = "md",
      deviationLevel = "none",
      title,
      description,
      disabled,
      foregroundColor,
      backgroundColor,
      customIconVariant,
      ...rest
    },
    ref,
  ) {
    const recipie = useSlotRecipe({ key: "travel-tag" });
    const styles = recipie({
      variant,
      size,
      deviationLevel,
      foregroundColor: variant === "custom" ? foregroundColor : undefined,
      backgroundColor: variant === "custom" ? backgroundColor : undefined,
    });

    const DeviationLevelIcon = getDeviationLevelIcon({ deviationLevel, size });
    return (
      <Box css={styles.container} aria-disabled={disabled} ref={ref} {...rest}>
        <LineIcon
          variant={variant}
          size={size}
          sx={styles.iconContainer}
          foregroundColor={foregroundColor}
          backgroundColor={backgroundColor}
          customIconVariant={customIconVariant}
          {...(rest as any)}
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
        {DeviationLevelIcon && (
          <DeviationLevelIcon css={styles.deviationIcon} />
        )}
      </Box>
    );
  },
);

const getDeviationLevelIcon = ({
  deviationLevel,
  size,
}: Pick<TravelTagProps, "deviationLevel" | "size">) => {
  switch (deviationLevel) {
    case "critical":
      return size === "lg" ? ErrorFill24Icon : ErrorFill18Icon;
    case "major":
    case "minor":
      return size === "lg" ? WarningFill24Icon : WarningFill18Icon;
    case "info":
      return size === "lg" ? InformationFill24Icon : InformationFill18Icon;
    case "none":
    default:
      return null;
  }
};
