import { useMultiStyleConfig } from "@chakra-ui/react";
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
  const { activeStep, onClick } = useStepper();
  const state = getState(stepNumber!, activeStep);
  const style = useMultiStyleConfig("Stepper", {
    state,
    variant,
  });

  const adjustedProps = getButtonStylesForState(state);

  return (
    <Box __css={style.stepContainer}>
      {stepNumber > 1 && (
        <DropdownRightFill18Icon marginX={5} display={["none", "block"]} />
      )}

      <Button
        size="xs"
        variant={
          state === "active"
            ? "primary"
            : state === "completed"
              ? "tertiary"
              : "ghost"
        }
        {...adjustedProps}
        onClick={() => onClick(stepNumber)}
      >
        {children}
      </Button>
    </Box>
  );
};

const getButtonStylesForState = (
  state: "completed" | "active" | "disabled",
): Record<string, any> => {
  switch (state) {
    case "active":
      return {
        _hover: {},
        boxShadow: "none",
        _focus: {},
        _active: {},
        cursor: "auto",
      };
    case "completed":
      return {
        boxShadow: "none",
      };
    case "disabled":
      return {
        _disabled: {},
        _hover: {},
        _focus: {},
        _active: {},
        color: "dimGrey",
        cursor: "auto",
      };
    default:
      return {};
  }
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
