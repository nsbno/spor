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

export const JumpButton = ({
  direction,
  onClick,
  "aria-label": ariaLabel,
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
    sv: "15 sekunder bakåt",
    en: "15 seconds backward",
  },
};
