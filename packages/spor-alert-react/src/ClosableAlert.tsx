import { useDisclosure, useMultiStyleConfig } from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import { CloseFill18Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { AlertIcon } from "./AlertIcon";
import { BaseAlert, BaseAlertProps } from "./BaseAlert";

type ClosableAlertProps = BaseAlertProps & {
  /** Callback for when the close button is clicked */
  onClose?: () => void;
};
/**
 * A closable alert component.
 *
 * A regular alert with a close button that can be used to dismiss the alert.
 *
 * ```tsx
 * <ClosableAlert variant="info" title="Nice to know">
 *   <Text>Some info here</Text>
 * </ClosableAlert>
 * ```
 *
 * You can also pass in an optional `onClose` callback, for things like analytics.
 *
 * ```tsx
 * <ClosableAlert
 *   variant="info"
 *   title="Nice to know"
 *   onClose={() => analytics.track('alert-closed')}
 * >
 *   <Text>Some info here</Text>
 * </ClosableAlert>
 */
export const ClosableAlert = ({
  variant,
  children,
  onClose: externalOnClose = () => {},
}: ClosableAlertProps) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const styles = useMultiStyleConfig("Alert", { variant });
  const { t } = useTranslation();
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    externalOnClose();
    onClose();
  };

  return (
    <BaseAlert variant={variant}>
      <IconButton
        variant="ghost"
        size="sm"
        onClick={handleClose}
        icon={<CloseFill18Icon />}
        aria-label={t(texts.close)}
        sx={styles.closeButton}
      />
      <AlertIcon variant={variant} />
      {children}
    </BaseAlert>
  );
};

const texts = createTexts({
  close: {
    nb: "Lukk",
    nn: "Lukk",
    sv: "Stäng",
    en: "Close",
  },
});
