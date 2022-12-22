import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import {
  AltTransportOutline24Icon,
  ErrorOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { BaseAlertProps } from "./BaseAlert";

type AlertIconProps = { variant: BaseAlertProps["variant"] };
/**
 * Internal component that shows the correct icon for the alert.
 */
export const AlertIcon = ({ variant }: AlertIconProps) => {
  const Icon = getIcon(variant);
  const { t } = useTranslation();
  return (
    <Icon aria-label={t(texts[variant])} marginRight={1} color="darkGrey" />
  );
};

const getIcon = (variant: BaseAlertProps["variant"]) => {
  switch (variant) {
    case "info":
      return InformationOutline24Icon;
    case "success":
      return SuccessOutline24Icon;
    case "warning":
      return WarningOutline24Icon;
    case "alt-transport":
      return AltTransportOutline24Icon;
    case "error":
      return ErrorOutline24Icon;
  }
};

const texts = createTexts({
  info: {
    nb: "Informasjon",
    nn: "Informasjon",
    sv: "Information",
    en: "Information",
  },
  success: {
    nb: "Suksess",
    nn: "Suksess",
    sv: "Succé",
    en: "Success",
  },
  warning: {
    nb: "Advarsel",
    nn: "Advarsel",
    sv: "Varning",
    en: "Warning",
  },
  error: {
    nb: "Feil",
    nn: "Feil",
    sv: "Error",
    en: "Error",
  },
  "alt-transport": {
    nb: "Alternativ transport",
    nn: "Alternativ transport",
    sv: "Alternativ transport",
    en: "Alternative transport",
  },
});
