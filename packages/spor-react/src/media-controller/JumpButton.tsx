"use client";
import {
  BoxProps,
  Center,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { createTexts, useTranslation } from "..";
import {
  Backward15MediaControllerFill30Icon,
  Forward15MediaControllerFill30Icon,
} from "@vygruppen/spor-icon-react";
import { mediaControllerSlotRecipe } from "../theme/components/media-controller-button";

export type MediaControllerVariantProps = RecipeVariantProps<
  typeof mediaControllerSlotRecipe
>;

type JumpButtonProps = BoxProps &
  PropsWithChildren<MediaControllerVariantProps> & {
    onClick: () => void;
    "aria-label"?: string;
    disabled?: boolean;
    direction: "backward" | "forward";
    size: "sm" | "lg";
  };

/**
 * A jump button.
 *
 * Intended to jump 15 seconds forward or backward in a video, podcast, audiobook or similar.
 *
 * Specify what direction you want to skip with the `direction` prop.
 *
 * ```tsx
 * <JumpButton direction="forward" onClick={onGoForward} />
 * ```
 */
export const JumpButton = forwardRef<HTMLButtonElement, JumpButtonProps>(
  (props, ref) => {
    const { direction, disabled, size = "sm" } = props;
    const { t } = useTranslation();

    const recipe = useSlotRecipe({ key: "mediaControllerButton" });
    const styles = recipe({ variant: "jumpSkip", size });

    return (
      <Center
        as="button"
        ref={ref}
        css={styles.root}
        aria-label={
          direction === "forward" ? t(texts.forward) : t(texts.backward)
        }
        disabled={disabled}
        {...props}
      >
        {direction === "forward" ? (
          <Forward15MediaControllerFill30Icon css={styles.icon} />
        ) : (
          <Backward15MediaControllerFill30Icon css={styles.icon} />
        )}
      </Center>
    );
  },
);

const texts = createTexts({
  forward: {
    nb: "15 sekunder frem",
    nn: "15 sekunder fram",
    sv: "15 sekunder framåt",
    en: "15 seconds forward",
  },
  backward: {
    nb: "15 sekunder tilbake",
    nn: "15 sekunder tilbake",
    sv: "15 sekunder tillbaka",
    en: "15 seconds backward",
  },
});
