import { Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { Box } from "..";
import { useStepper } from "./StepperContext";

type StepperStepProps = {
  children: React.ReactNode;
  stepNumber: number;
};
export const StepperStep = ({ children, stepNumber }: StepperStepProps) => {
  const { activeStep, onClick, colorScheme } = useStepper();
  const variant = getVariant(stepNumber!, activeStep);
  const style = useMultiStyleConfig("Stepper", {
    variant,
    colorScheme,
  });

  return (
    <Box __css={style.stepContainer}>
      {stepNumber > 1 && (
        <DropdownRightFill18Icon mx={5} display={["none", "block"]} />
      )}

      <Flex
        __css={style.stepButton}
        alignItems="center"
        as="button"
        type="button"
        disabled={variant === "disabled" || variant === "active"}
        onClick={() => onClick(stepNumber)}
      >
        <Box __css={style.stepNumber}>{stepNumber}</Box>
        <Box __css={style.stepTitle}>{children}</Box>
      </Flex>
    </Box>
  );
};

const getVariant = (stepNumber: number, activeStep: number) => {
  if (stepNumber < activeStep) {
    return "completed";
  }
  if (stepNumber === activeStep) {
    return "active";
  }
  return "disabled";
};
