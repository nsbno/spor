import { useColorModeValue, useMultiStyleConfig } from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { Box, Button, Text } from "..";
import { useStepper } from "./StepperContext";

type StepperStepProps = {
  children: React.ReactNode;
  stepNumber: number;
  variant: "base" | "accent";
  isDisabled?: boolean;
};
export const StepperStep = ({
  children,
  stepNumber,
  variant,
}: StepperStepProps) => {
  const { activeStep, onClick } = useStepper();
  const state = getState(stepNumber, activeStep);
  const style = useMultiStyleConfig("Stepper", {
    state,
    variant,
  });
  const disabledTextColor = useColorModeValue(
    "blackAlpha.400",
    "whiteAlpha.400",
  );
  const iconColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <Box sx={style.stepContainer}>
      {stepNumber > 1 && (
        <DropdownRightFill18Icon
          marginX={5}
          display={["none", null, "block"]}
          color={iconColor}
        />
      )}
      {state === "disabled" ? (
        <Text
          variant="xs"
          fontSize="16px"
          color={disabledTextColor}
          cursor="default"
          paddingX={2}
        >
          {children}
        </Text>
      ) : (
        <Button
          size="xs"
          variant={state === "active" ? "primary" : "ghost"}
          onClick={
            state === "completed" ? () => onClick(stepNumber) : undefined
          }
          pointerEvents={state === "active" ? "none" : "auto"}
          tabIndex={state === "active" ? -1 : undefined}
          sx={style.stepButton}
        >
          {children}
        </Button>
      )}
    </Box>
  );
};

const getState = (stepNumber: number, activeStep: number) => {
  if (stepNumber < activeStep) {
    return "completed";
  }
  if (stepNumber === activeStep) {
    return "active";
  }
  return "disabled";
};
