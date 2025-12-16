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

import { createTexts, useTranslation } from "../i18n";
import { AlertProps } from "./Alert";

type AlertIconProps = {
  variant: ChakraAlert.RootProps["variant"];
  customIcon?: IconComponent;
};

/**
 * Internal component that shows the correct icon for the alert
 */
export const AlertIcon = ({
  ref,
  variant,
  customIcon: CustomAlertIcon,
}: AlertIconProps & {
  ref?: React.RefObject<SVGSVGElement>;
}) => {
  const { t } = useTranslation();

  return (
    <Box ref={ref} aria-label={t(texts[variant as keyof typeof texts])}>
      {CustomAlertIcon ? (
        <CustomAlertIcon color={`alert.${variant}.icon`} />
      ) : (
        <BaseAlertIcon variant={variant} />
      )}
    </Box>
  );
};

AlertIcon.displayName = "AlertIcon";

export const BaseAlertIcon = ({
  variant,
}: {
  variant: AlertProps["variant"];
}) => {
  const css = {
    "& path:first-of-type": {
      fill: `alert.${variant}.icon`,
    },
    "& path:not(:first-of-type)": {
      fill: `alert.${variant}.surface`,
    },
  };

  switch (variant) {
    case "info": {
      return <InformationFill24Icon css={css} />;
    }
    case "success": {
      return <SuccessFill24Icon css={css} />;
    }
    case "important": {
      return <WarningFill24Icon />;
    }
    case "alt": {
      return <AltTransportFill24Icon css={css} />;
    }
    case "error": {
      return <ErrorFill24Icon css={css} />;
    }
    case "error-secondary": {
      return <ErrorOutline24Icon css={css} />;
    }
    case "neutral": {
      return <QuestionFill24Icon css={css} />;
    }
    case "service": {
      return <ServiceFill24Icon />;
    }
    default: {
      return <InformationFill24Icon css={css} />;
    }
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
