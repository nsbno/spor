"use client";
import { BoxProps, Center, useSlotRecipe } from "@chakra-ui/react";
import {
  PauseMediaControllerFill24Icon,
  PlayMediaControllerFill24Icon,
} from "@vygruppen/spor-icon-react";
import React, { forwardRef, PropsWithChildren } from "react";

import { createTexts, MediaControllerVariantProps, useTranslation } from "..";

type PlayPauseButtonProps = BoxProps &
  PropsWithChildren<MediaControllerVariantProps> & {
    onClick: () => void;
    "aria-label"?: string;
    disabled?: boolean;
    playing: boolean;
    size: "sm" | "lg";
  };

/**
 * A playback button.
 *
 * Intended to start or pause playback of a video, podcast, audiobook or similar.
 *
 * Specify the current playing state with `playing`.
 *
 * ```tsx
 * <PlayPauseButton playing={playing} onClick={onPlaybackClick} />
 * ```
 */
export const PlayPauseButton = forwardRef<
  HTMLButtonElement,
  PlayPauseButtonProps
>((props, ref) => {
  PlayPauseButton.displayName = "PlayPauseButton";
  const { playing, disabled, size = "sm" } = props;

  const { t } = useTranslation();

  const recipe = useSlotRecipe({ key: "mediaControllerButton" });
  const styles = recipe({ variant: "play", size });

  return (
    <Center
      ref={ref}
      as="button"
      css={styles.root}
      aria-label={playing ? t(texts.pause) : t(texts.play)}
      disabled={disabled}
      {...props}
    >
      {playing ? (
        <PauseMediaControllerFill24Icon css={styles.icon} />
      ) : (
        <PlayMediaControllerFill24Icon css={styles.icon} />
      )}
    </Center>
  );
});

const texts = createTexts({
  pause: {
    nb: "Pause",
    nn: "Pause",
    sv: "Paus",
    en: "Pause",
  },
  play: {
    nb: "Spill av",
    nn: "Spill av",
    sv: "Spel av",
    en: "Play",
  },
});
