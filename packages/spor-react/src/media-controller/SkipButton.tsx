"use client";
import { BoxProps, Center, useSlotRecipe } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { createTexts, MediaControllerVariantProps, useTranslation } from "..";
import {
  NextMediaControllerFill30Icon,
  PreviousMediaControllerFill30Icon,
} from "@vygruppen/spor-icon-react";

type SkipButtonProps = BoxProps &
  PropsWithChildren<MediaControllerVariantProps> & {
    onClick: () => void;
    "aria-label"?: string;
    disabled?: boolean;
    direction: "backward" | "forward";
    size: "sm" | "lg";
  };
/**
 * A skip button.
 *
 * Intended to skip to the next section, chapter og similar.
 *
 * Specify what direction you want to skip with the `direction` prop.
 *
 * ```tsx
 * <SkipButton direction="forward" onClick={onNextChapter} />
 * ```
 */
export const SkipButton = forwardRef<HTMLButtonElement, SkipButtonProps>(
  (props, ref) => {
    const { direction, disabled, size = "sm" } = props;

    const { t } = useTranslation();

    const recipe = useSlotRecipe({ key: "mediaControllerButton" });
    const styles = recipe({ variant: "jumpSkip", size });

    return (
      <Center
        ref={ref}
        as="button"
        css={styles.container}
        aria-label={direction === "forward" ? t(texts.next) : t(texts.previous)}
        disabled={disabled}
        {...props}
      >
        {direction === "forward" ? (
          <NextMediaControllerFill30Icon css={styles.icon} />
        ) : (
          <PreviousMediaControllerFill30Icon css={styles.icon} />
        )}
      </Center>
    );
  },
);

const texts = createTexts({
  next: {
    nb: "Neste",
    nn: "Neste",
    sv: "Nästa",
    en: "Next",
  },
  previous: {
    nb: "Forrige",
    nn: "Forrige",
    sv: "Föregående",
    en: "Previous",
  },
});
