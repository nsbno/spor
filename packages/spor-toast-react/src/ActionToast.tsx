import { Box } from "@chakra-ui/react";
import { Button } from "@vygruppen/spor-button-react";
import React from "react";
import { BaseToast, BaseToastProps } from "./BaseToast";

type ActionToastProps = BaseToastProps & {
  onClick: () => void;
  buttonText: string;
};
/** A toast message with a button */
export const ActionToast = ({
  children,
  onClick,
  variant,
  buttonText,
  id,
}: ActionToastProps) => {
  return (
    <BaseToast variant={variant} id={id}>
      <Box marginRight={2} flexGrow="1">
        {children}
      </Box>
      <Button variant="additional" size="sm" onClick={onClick}>
        {buttonText}
      </Button>
    </BaseToast>
  );
};
