import { BoxProps, RecipeVariantProps, useSlotRecipe } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { Box, createTexts, useTranslation } from "..";
import { ProgressDot } from "./ProgressDot";
import { progressIndicatorRecipe } from "../theme/components";

export type ProgressIndicatorVariantProps = RecipeVariantProps<
  typeof progressIndicatorRecipe
>;

export type ProgressIndicatorProps = BoxProps &
  PropsWithChildren<ProgressIndicatorVariantProps> & {
    children?: React.ReactNode;
    numberOfSteps: number;
    activeStep: number;
    colorPalette?: string;
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

export const ProgressIndicator = forwardRef<
  HTMLDivElement,
  ProgressIndicatorProps
>(({ numberOfSteps, activeStep, colorPalette = "brand" }) => {
  const { t } = useTranslation();
  const recipe = useSlotRecipe({ recipe: progressIndicatorRecipe });

  const styles = recipe({ colorPalette });

  return (
    <Box
      css={styles}
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={numberOfSteps}
      aria-valuenow={activeStep}
      aria-valuetext={t(texts.stepsOf(activeStep, numberOfSteps))}
    >
      <Box css={styles}>
        {Array.from({ length: numberOfSteps }, (_, i) => (
          <ProgressDot
            key={i}
            aria-value={i + 1}
            isActive={activeStep === i + 1}
          />
        ))}
      </Box>
    </Box>
  );
});
const texts = createTexts({
  stepsOf: (activeStep, numberOfSteps) => ({
    nb: `Steg ${activeStep} av ${numberOfSteps}`,
    nn: `Steg ${activeStep} av ${numberOfSteps}`,
    sv: `Steg ${activeStep} av ${numberOfSteps}`,
    en: `Step ${activeStep} of ${numberOfSteps}`,
  }),
});
