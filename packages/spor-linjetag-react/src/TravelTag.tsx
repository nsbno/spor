import {
  As,
  Box,
  BoxProps,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  ErrorFill18Icon,
  InformationFill18Icon,
  WarningFill18Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { LineIcon } from "./LineIcon";
import type { TagProps } from "./types";

type TravelTagProps = TagProps &
  BoxProps & {
    deviationLevel?: "critical" | "major" | "minor" | "info" | "none";
    isDisabled?: boolean;
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
 * @see https://spor.cloud.vy.no/komponenter/linjetags
 */
export const TravelTag = forwardRef<TravelTagProps, As<any>>(
  (
    {
      variant,
      size = "md",
      deviationLevel = "none",
      title,
      description,
      isDisabled,
      ...rest
    },
    ref
  ) => {
    const styles = useMultiStyleConfig("TravelTag", {
      variant,
      size,
      deviationLevel,
    });

    const DeviationLevelIcon = getDeviationLevelIcon(deviationLevel);

    return (
      <Box sx={styles.container} aria-disabled={isDisabled} ref={ref} {...rest}>
        <LineIcon variant={variant} size={size} sx={styles.iconContainer} />
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
        {DeviationLevelIcon && <DeviationLevelIcon sx={styles.deviationIcon} />}
      </Box>
    );
  }
);

const getDeviationLevelIcon = (
  deviationLevel: TravelTagProps["deviationLevel"]
) => {
  switch (deviationLevel) {
    case "critical":
      return ErrorFill18Icon;
    case "major":
    case "minor":
      return WarningFill18Icon;
    case "info":
      return InformationFill18Icon;
    default:
      return null;
  }
};
