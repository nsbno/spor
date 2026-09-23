"use client";

import { Box } from "@chakra-ui/react";
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

import { SporSemantic } from "@/theme/tokens/global-css";

type AlertIconProps = {
  variant: SporSemantic;
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

export const BaseAlertIcon = ({ variant }: { variant: SporSemantic }) => {
  switch (variant) {
    case "info": {
      return <InformationFill24Icon />;
    }
    case "success": {
      return <SuccessFill24Icon />;
    }
    case "warning": {
      return <WarningFill24Icon />;
    }
    case "notice": {
      return <AltTransportFill24Icon />;
    }
    case "critical": {
      return <ErrorFill24Icon />;
    }
    case "caution": {
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
