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
  ref?: React.Ref<SVGSVGElement>;
}) => {
  return (
    <Box ref={ref}>
      {CustomAlertIcon ? (
        <CustomAlertIcon color={`alert.${variant}.icon`} />
      ) : (
        <BaseAlertIcon variant={variant} />
      )}
    </Box>
  );
};

export const BaseAlertIcon = ({
  variant,
}: {
  variant: AlertProps["variant"];
}) => {
  switch (variant) {
    case "info": {
      return <InformationFill24Icon />;
    }
    case "success": {
      return <SuccessFill24Icon />;
    }
    case "important": {
      return <WarningFill24Icon />;
    }
    case "alt": {
      return <AltTransportFill24Icon />;
    }
    case "error": {
      return <ErrorFill24Icon />;
    }
    case "error-secondary": {
      return <ErrorOutline24Icon />;
    }
    case "neutral": {
      return <QuestionFill24Icon />;
    }
    case "service": {
      return <ServiceFill24Icon />;
    }
    default: {
      return <InformationFill24Icon />;
    }
  }
};
