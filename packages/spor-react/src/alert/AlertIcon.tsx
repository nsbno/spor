import {
  AltTransportOutline24Icon,
  ErrorOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
  WarningOutline24Icon,
  WarningFill24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { createTexts, useTranslation } from "../i18n";
import { BaseAlertProps } from "./BaseAlert";
import { ServiceFill24Icon } from "@vygruppen/spor-icon-react/tmp";

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
      return InformationOutline24Icon;
    case "success":
      return SuccessOutline24Icon;
    case "warning":
      return WarningOutline24Icon;
    case "alt-transport":
      return AltTransportOutline24Icon;
    case "error":
      return ErrorOutline24Icon;
    case "global-deviation":
      return WarningFill24Icon;
    case "service":
      return ServiceFill24Icon;
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
  service: {
    nb: "Driftsmelding",
    nn: "Driftsmelding",
    sv: "Servicemeddelande",
    en: "Service message",
  },
  "global-deviation": {
    nb: "Trafikkmelding",
    nn: "Trafikkmelding",
    sv: "Trafikmeddelande",
    en: "Traffic announcement",
  },
});
