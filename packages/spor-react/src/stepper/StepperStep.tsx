"use client";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React, { PropsWithChildren } from "react";
import { Box, Button, StepperVariantProps, Text, useColorModeValue } from "..";
import { useStepper } from "./StepperContext";
import { useSlotRecipe } from "@chakra-ui/react";

type StepperStepProps = PropsWithChildren<StepperVariantProps> & {
  children: React.ReactNode;
  stepNumber: number;
  variant: "core" | "accent";
  disabled?: boolean;
};
export const StepperStep = ({
  children,
  stepNumber,
  variant,
  disabled: disabledOverride,
}: StepperStepProps) => {
  const { activeStep, onClick } = useStepper();
  const state = getState(stepNumber, activeStep);
  const recipe = useSlotRecipe({ key: "stepper" });
  const style = recipe({ variant });
  const disabledTextColor = "text.disabled";
  const iconColor = {
    _light: "blackAlpha.200",
    _dark: "whiteAlpha.200",
  };

  const disabled =
    (state !== "active" && disabledOverride) || state === "disabled";

  return (
    <Box css={style.stepContainer}>
      {stepNumber > 1 && (
        <DropdownRightFill18Icon
          marginX={5}
          display={["none", null, "block"]}
          color={iconColor}
        />
      )}
      {disabled ? (
        <Text
          variant="xs"
          fontSize="1rem"
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
          disabled={disabled}
          css={
            state === "active"
              ? style.stepButton._currentStep
              : style.stepButton
          }
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
