import { Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { Box, Button } from "..";
import { useStepper } from "./StepperContext";

type StepperStepProps = {
  children: React.ReactNode;
  stepNumber: number;
  variant: "base" | "accent";
};
export const StepperStep = ({
  children,
  stepNumber,
  variant,
}: StepperStepProps) => {
  const { activeStep, onClick, colorScheme } = useStepper();
  const state = getVariant(stepNumber!, activeStep);
  const style = useMultiStyleConfig("Stepper", {
    state,
    variant,
    colorScheme,
  });

  return (
    <Box __css={style.stepContainer}>
      {stepNumber > 1 && (
        <DropdownRightFill18Icon marginX={5} display={["none", "block"]} />
      )}

      <Button
        size={"xs"}
        backgroundColor={state === "active" ? "primaryGreen" : undefined}
        variant={
          state === "active"
            ? "primary"
            : state === "completed"
            ? "secondary"
            : "additional"
        }
        isDisabled={state === "disabled"}
        {...(state === "active"
          ? {
              _hover: {},
              boxShadow: "none",
              cursor: "not-allowed",
              _focus: {},
              _active: {},
            }
          : undefined)}
        onClick={() => onClick(stepNumber)}
      >
        {children}
      </Button>
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
