"use client";

import {
  AltTransportFill24Icon,
  ErrorFill24Icon,
  InformationFill24Icon,
  ServiceFill24Icon,
  SuccessFill24Icon,
  WarningFill24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { createTexts, useTranslation } from "../i18n";
import { AlertProps, AlertVariantProps } from "./Alert";
import { Box, useSlotRecipe } from "@chakra-ui/react";

type AlertIconProps = AlertVariantProps & {
  variant: AlertProps["variant"];
};

/**
 * Internal component that shows the correct icon for the alert
 */
export const AlertIcon = ({ variant }: AlertIconProps) => {
  const { t } = useTranslation();

  const recipe = useSlotRecipe({ key: "alert" });
  const styles = recipe({ variant });

  return (
    <Box
      as={getIcon(variant)}
      css={styles.indicator}
      aria-label={t(texts[variant as keyof typeof texts])}
    />
  );
};

const getIcon = (variant: AlertProps["variant"]) => {
  switch (variant) {
    case "info":
      return InformationFill24Icon;
    case "success":
      return SuccessFill24Icon;
    case "important":
      return WarningFill24Icon;
    case "alt-transport":
      return AltTransportFill24Icon;
    case "error":
      return ErrorFill24Icon;
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
  important: {
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
