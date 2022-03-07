import { Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import { Box } from "@vygruppen/spor-layout-react";
import React from "react";
import invariant from "tiny-invariant";
import { useProgressBar } from "./ProgressBarContext";

type ProgressBarStepProps = {
  children: React.ReactNode;
  stepNumber?: number;
};
export const ProgressBarStep = ({
  children,
  stepNumber,
}: ProgressBarStepProps) => {
  invariant(
    stepNumber !== undefined,
    "stepNumber is required to use the ProgressBarStep component"
  );
  const { activeStep, onClick, colorScheme } = useProgressBar();
  const variant = getVariant(stepNumber!, activeStep);
  const styles = useMultiStyleConfig("ProgressBar", {
    variant,
    colorScheme,
  });

  const isFirstStep = stepNumber === 1;

  return (
    <Box __css={styles.stepContainer}>
      {!isFirstStep && <DropdownRightFill18Icon mx={5} />}
      <Flex
        __css={styles.stepButton}
        alignItems="center"
        as="button"
        type="button"
        disabled={variant === "disabled" || variant === "active"}
        onClick={() => onClick(stepNumber)}
      >
        <Box __css={styles.stepNumber}>{stepNumber}</Box>
        <Box __css={styles.stepTitle}>{children}</Box>
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
