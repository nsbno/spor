"use client";

import { Box } from "@chakra-ui/react";
import {
  AltTransportFill24Icon,
  CautionFill24Icon,
  ErrorFill24Icon,
  IconComponent,
  InformationFill24Icon,
  QuestionFill24Icon,
  ServiceFill24Icon,
  SuccessFill24Icon,
  WarningFill24Icon,
} from "@vygruppen/spor-icon-react";

import { SporStatusToken } from "@/theme/tokens/global-css";

type AlertIconProps = {
  variant: SporStatusToken;
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

export const BaseAlertIcon = ({ variant }: { variant: SporStatusToken }) => {
  switch (variant) {
    case "info": {
      return <InformationFill24Icon color="icon" />;
    }
    case "success": {
      return <SuccessFill24Icon color="icon" />;
    }
    case "warning": {
      return <WarningFill24Icon color="icon" />;
    }
    case "notice": {
      return <AltTransportFill24Icon color="icon" />;
    }
    case "critical": {
      return <ErrorFill24Icon color="icon" />;
    }
    case "caution": {
      return <CautionFill24Icon color="icon" />;
    }
    case "neutral": {
      return <QuestionFill24Icon color="icon" />;
    }
    case "service": {
      return <ServiceFill24Icon color="icon" />;
    }
    default: {
      return <InformationFill24Icon color="icon" />;
    }
  }
};
