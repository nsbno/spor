import { BoxProps, Center, useMultiStyleConfig } from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import React from "react";
import { PauseIcon, PlayIcon } from "./icons";

type SkipButtonProps = BoxProps & {
  onClick: () => void;
  "aria-label"?: string;
  isDisabled?: boolean;
  isPlaying: boolean;
  size: "sm" | "lg";
};

export const PlayPauseButton = ({
  size = "lg",
  isPlaying,
  ...props
}: SkipButtonProps) => {
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
      {...props}
    >
      {isPlaying ? (
        <PauseIcon sx={styles.icon} />
      ) : (
        <PlayIcon sx={styles.icon} />
      )}
    </Center>
  );
};

const texts = {
  pause: {
    nb: "Pause",
    sv: "Paus",
    en: "Pause",
  },
  play: {
    nb: "Spill av",
    sv: "Spel av",
    en: "Play",
  },
};
