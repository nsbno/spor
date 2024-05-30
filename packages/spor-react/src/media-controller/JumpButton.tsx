import { BoxProps, Center, useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { createTexts, useTranslation } from "..";
import {
  Backward15MediaControllerFill30Icon,
  Forward15MediaControllerFill30Icon,
} from "@vygruppen/spor-icon-react";

type JumpButtonProps = BoxProps & {
  onClick: () => void;
  "aria-label"?: string;
  isDisabled?: boolean;
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
export const JumpButton = ({
  direction,
  isDisabled,
  size = "sm",
  ...props
}: JumpButtonProps) => {
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("MediaControllerButton", {
    variant: "jumpSkip",
    size,
  });

  return (
    <Center
      as="button"
      sx={styles.container}
      aria-label={
        direction === "forward" ? t(texts.forward) : t(texts.backward)
      }
      disabled={isDisabled}
      {...props}
    >
      {direction === "forward" ? (
        <Forward15MediaControllerFill30Icon sx={styles.icon} />
      ) : (
        <Backward15MediaControllerFill30Icon sx={styles.icon} />
      )}
    </Center>
  );
};

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
