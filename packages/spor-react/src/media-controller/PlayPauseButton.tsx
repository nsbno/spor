import { BoxProps, Center, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { IconButton, createTexts, useTranslation } from "..";
import {
  PauseMediaControllerFill24Icon,
  PauseMediaControllerFill30Icon,
  PlayMediaControllerFill24Icon,
  PlayMediaControllerFill30Icon,
} from "@vygruppen/spor-icon-react";

type PlayPauseButtonProps = BoxProps & {
  onClick: () => void;
  "aria-label"?: string;
  isDisabled?: boolean;
  isPlaying: boolean;
  size: "sm" | "lg";
};

/**
 * A playback button.
 *
 * Intended to start or pause playback of a video, podcast, audiobook or similar.
 *
 * Specify the current playing state with `isPlaying`.
 *
 * ```tsx
 * <PlayPauseButton isPlaying={isPlaying} onClick={onPlaybackClick} />
 * ```
 */
export const PlayPauseButton = ({
  size = "lg",
  isPlaying,
  isDisabled,
  ...props
}: PlayPauseButtonProps) => {
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("MediaControllerButton", {
    variant: "play",
    size,
  });

  return (
    <Center
      as="button"
      sx={styles.container}
      aria-label={isPlaying ? t(texts.pause) : t(texts.play)}
      disabled={isDisabled}
      {...props}
    >
      {isPlaying ? (
        <PauseMediaControllerFill24Icon sx={styles.icon} />
      ) : (
        <PlayMediaControllerFill24Icon sx={styles.icon} />
      )}
    </Center>
  );
};

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
