import { useMultiStyleConfig } from "@chakra-ui/react";
import React from "react";
import { Box, createTexts, useTranslation } from "..";
import { ProgressDot } from "./ProgressDot";

type ProgressIndicatorProps = {
  numberOfSteps: number;
  activeStep: number;
};

/**
 * A progress indicator is used to show which step of a process a user is currently in
 * to give them a sense of progress.
 *
 * You specify the active step, which starts at 1 (not 0)
 *
 * ```tsx
 * <ProgressIndicator
 *  numberOfSteps={3}
 *  activeStep={2}
 * />
 * ```
 */
export const ProgressIndicator = ({
  numberOfSteps,
  activeStep,
}: ProgressIndicatorProps) => {
  const { t } = useTranslation();
  const style = useMultiStyleConfig("ProgressIndicator");

  return (
    <Box
      __css={style.root}
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={numberOfSteps}
      aria-valuenow={activeStep}
      aria-valuetext={t(texts.stepsOf(activeStep, numberOfSteps))}
    >
      <Box __css={style.container}>
        {Array.from({ length: numberOfSteps }, (_, i) => (
          <ProgressDot aria-value={i + 1} isActive={activeStep === i + 1} />
        ))}
      </Box>
    </Box>
  );
};

const texts = createTexts({
  stepsOf: (activeStep, numberOfSteps) => ({
    nb: `Steg ${activeStep} av ${numberOfSteps}`,
    nn: `Steg ${activeStep} av ${numberOfSteps}`,
    sv: `Steg ${activeStep} av ${numberOfSteps}`,
    en: `Step ${activeStep} of ${numberOfSteps}`,
  }),
});
