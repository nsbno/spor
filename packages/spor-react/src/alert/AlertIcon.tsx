"use client";

import { Alert as ChakraAlert, Box } from "@chakra-ui/react";
import {
  AltTransportFill24Icon,
  ErrorFill24Icon,
  ErrorOutline24Icon,
  IconComponent,
  InformationFill24Icon,
  QuestionFill24Icon,
  ServiceFill24Icon,
  SuccessFill24Icon,
  WarningFill24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";

import { createTexts, useTranslation } from "../i18n";
import { AlertProps } from "./Alert";

type AlertIconProps = {
  variant: ChakraAlert.RootProps["variant"];
  customIcon?: IconComponent;
};

/**
 * Internal component that shows the correct icon for the alert
 */
export const AlertIcon = ({ variant, customIcon }: AlertIconProps) => {
  const { t } = useTranslation();

  const icon = customIcon ?? getIcon(variant);

  return (
    <Box
      as={icon}
      aria-label={t(texts[variant as keyof typeof texts])}
      color={customIcon ? `alert.${variant}.icon` : undefined}
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
    case "alt":
      return AltTransportFill24Icon;
    case "error":
      return ErrorFill24Icon;
    case "error-secondary":
      return ErrorOutline24Icon;
    case "neutral":
      return QuestionFill24Icon;
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
    nb: "Viktig",
    nn: "Viktig",
    sv: "Viktig",
    en: "Important",
  },
  alt: {
    nb: "Alternativ",
    nn: "Alternativ",
    sv: "Alternativ",
    en: "Alternative",
  },
  error: {
    nb: "Feil",
    nn: "Feil",
    sv: "Fel",
    en: "Error",
  },
  "error-secondary": {
    nb: "Feil",
    nn: "Feil",
    sv: "Fel",
    en: "Error",
  },
  neutral: {
    nb: "Nøytral",
    nn: "Nøytral",
    sv: "Neutral",
    en: "Neutral",
  },
  service: {
    nb: "Service",
    nn: "Service",
    sv: "Service",
    en: "Service",
  },
});
