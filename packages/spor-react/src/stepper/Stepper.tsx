"use client";
import { Flex, RecipeVariantProps, useSlotRecipe } from "@chakra-ui/react";
import { ArrowLeftFill24Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef, PropsWithChildren } from "react";
import { StepperStep } from ".";
import { Box, createTexts, IconButton, Text, useTranslation } from "..";
import { stepperSlotRecipe } from "../theme/slot-recipes/stepper";
import { StepperProvider } from "./StepperContext";

export type StepperVariantProps = RecipeVariantProps<typeof stepperSlotRecipe>;

type StepperProps = PropsWithChildren<StepperVariantProps> & {
  /** Callback for when a step is clicked */
  onClick: (clickedStep: number) => void;
  /** Callback for when the back button is clicked (on smaller screens).
   *
   * If this is not provided, the back button will not be shown on smaller screens on the first step.
   */
  onBackButtonClick?: (stepNumberToGoTo: number) => void;
  /** Heading shown on smaller devices */
  heading?: string;
  /**
   * The heading level rendered for the heading shown on smaller devices.
   *
   * Defaults to h2
   * */
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  /** The currently active step */
  activeStep: number;
  /** The labels of each step */
  steps: string[];
  /** The variant.
   * "core" has a transparent background,
   * while "accent" has a slight accent color  */
  variant: "core" | "accent";
  /** Disables all clicks */
  disabled?: boolean;
};
/**
 * A stepper is used to show which step of a process a user is currently in.
 *
 * You specify the active step, which starts at 1 (not 0)
 *
 * ```tsx
 * <Stepper
 *   title="Example"
 *   onClick={handleStepClick}
 *   activeStep={2}
 *   steps={['Where', 'When', 'How']}
 * />
 * ```
 **/

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  function Stepper(props, ref) {
    const {
      onClick = () => {},
      onBackButtonClick,
      steps,
      activeStep: activeStepAsStringOrNumber,
      heading,
      headingLevel,
      variant,
      disabled,
    } = props;
    const recipe = useSlotRecipe({ key: "stepper" });
    const style = recipe({ variant });
    const numberOfSteps = steps.length;
    const activeStep = Number(activeStepAsStringOrNumber);
    const { t } = useTranslation();
    const hideBackButtonOnFirstStep = activeStep === 1 && !onBackButtonClick;

    return (
      <Box css={style.root} ref={ref}>
        <StepperProvider
          onClick={onClick}
          activeStep={activeStep}
          variant={variant}
          numberOfSteps={numberOfSteps}
        >
          <Box css={style.container}>
            <Box css={style.innerContainer}>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                gap={2}
                flex={1}
              >
                <IconButton
                  aria-label={t(texts.back)}
                  icon={<ArrowLeftFill24Icon />}
                  variant="ghost"
                  size="sm"
                  visibility={hideBackButtonOnFirstStep ? "hidden" : "visible"}
                  onClick={() => {
                    const stepToGoTo = activeStep - 1;
                    if (onBackButtonClick) {
                      onBackButtonClick(stepToGoTo);
                    }
                    onClick(stepToGoTo);
                  }}
                />
                {heading && (
                  <Text variant="sm" as={headingLevel} css={style.title}>
                    {heading}
                  </Text>
                )}
                <Box css={style.stepCounter}>
                  {t(texts.stepsOf(activeStep, numberOfSteps))}
                </Box>
              </Flex>
            </Box>
            <Flex justifyContent="center" display={["none", null, "flex"]}>
              {steps.map((step, index) => (
                <StepperStep
                  key={index}
                  stepNumber={index + 1}
                  variant={variant}
                  aria-current={index + 1 === activeStep ? "step" : undefined}
                  disabled={disabled}
                >
                  {step}
                </StepperStep>
              ))}
            </Flex>
          </Box>
        </StepperProvider>
      </Box>
    );
  },
);

const texts = createTexts({
  stepsOf: (activeStep, numberOfSteps) => ({
    nb: `Steg ${activeStep}/${numberOfSteps}`,
    nn: `Steg ${activeStep}/${numberOfSteps}`,
    sv: `Steg ${activeStep}/${numberOfSteps}`,
    en: `Step ${activeStep}/${numberOfSteps}`,
  }),
  back: {
    nb: "Tilbake",
    nn: "Tilbake",
    sv: "Tillbaka",
    en: "Back",
  },
});
