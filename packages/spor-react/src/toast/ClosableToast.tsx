import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import { CloseFill18Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { IconButton, createTexts, useTranslation } from "..";
import { BaseToast, BaseToastProps } from "./BaseToast";

type ClosableToastProps = BaseToastProps & {
  onClose: () => void;
};
/** A closable toast */
export const ClosableToast = ({
  children,
  onClose,
  variant,
  id,
}: ClosableToastProps) => {
  const styles = useMultiStyleConfig("Toast", { variant });
  const { t } = useTranslation();
  return (
    <BaseToast variant={variant} id={id}>
      <Box flexGrow="1">{children}</Box>
      <IconButton
        sx={styles.dismissButton}
        variant="ghost"
        aria-label={t(texts.dismiss)}
        icon={<CloseFill18Icon />}
        onClick={onClose}
      />
    </BaseToast>
  );
};

const texts = createTexts({
  dismiss: {
    nb: "Lukk",
    nn: "Lukk",
    sv: "Dölj",
    en: "Dismiss",
  },
});
