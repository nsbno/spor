import { BoxProps, Center, useMultiStyleConfig } from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import React from "react";
import { JumpBackwardIcon, JumpForwardIcon } from "./icons";

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
        <JumpForwardIcon sx={styles.icon} />
      ) : (
        <JumpBackwardIcon sx={styles.icon} />
      )}
    </Center>
  );
};

const texts = {
  forward: {
    nb: "15 sekunder frem",
    sv: "15 sekunder framåt",
    en: "15 seconds forward",
  },
  backward: {
    nb: "15 sekunder tilbake",
    sv: "15 sekunder tillbaka",
    en: "15 seconds backward",
  },
};
