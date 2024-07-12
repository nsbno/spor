import {
  AltTransportOutline18Icon,
  AltTransportOutline24Icon,
  ErrorOutline18Icon,
  ErrorOutline24Icon,
  InformationOutline18Icon,
  InformationOutline24Icon,
  SuccessOutline18Icon,
  SuccessOutline24Icon,
  WarningOutline18Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { createTexts, useTranslation } from "../i18n";
import { BaseAlertProps } from "./BaseAlert";

type AlertIconProps = { variant: BaseAlertProps["variant"] };
/**
 * Internal component that shows the correct icon for the alert
 */
export const AlertIcon = ({ variant }: AlertIconProps) => {
  const Icon = getIcon(variant);
  const { t } = useTranslation();
  return (
    <Icon
      flexShrink={0}
      aria-label={t(texts[variant])}
      marginRight={1}
      color="darkGrey"
    />
  );
};

const getIcon = (variant: BaseAlertProps["variant"]) => {
  switch (variant) {
    case "info":
      return InformationOutline18Icon;
    case "success":
      return SuccessOutline18Icon;
    case "warning":
      return WarningOutline18Icon;
    case "alt-transport":
      return AltTransportOutline18Icon;
    case "error":
      return ErrorOutline18Icon;
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
