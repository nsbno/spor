import { BoxProps, Center, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { createTexts, useTranslation } from "..";
import {
  NextMediaControllerFill30Icon,
  PreviousMediaControllerFill30Icon,
} from "@vygruppen/spor-icon-react";

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
        <NextMediaControllerFill30Icon sx={styles.icon} />
      ) : (
        <PreviousMediaControllerFill30Icon sx={styles.icon} />
      )}
    </Center>
  );
};

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
