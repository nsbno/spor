import { BoxProps, Center, useMultiStyleConfig } from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import React from "react";
import { SkipNextIcon, SkipPreviousIcon } from "./icons";

type SkipButtonProps = BoxProps & {
  onClick: () => void;
  "aria-label"?: string;
  isDisabled?: boolean;
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
export const SkipButton = ({
  direction,
  isDisabled,
  size = "sm",
  ...props
}: SkipButtonProps) => {
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("MediaControllerButton", {
    variant: "jumpSkip",
    size,
  });

  return (
    <Center
      as="button"
      sx={styles.container}
      aria-label={direction === "forward" ? t(texts.next) : t(texts.previous)}
      disabled={isDisabled}
      {...props}
    >
      {direction === "forward" ? (
        <SkipNextIcon sx={styles.icon} />
      ) : (
        <SkipPreviousIcon sx={styles.icon} />
      )}
    </Center>
  );
};

const texts = {
  next: {
    nb: "Neste",
    sv: "Nästa",
    en: "Next",
  },
  previous: {
    nb: "Forrige",
    sv: "Föregående",
    en: "Previous",
  },
};
