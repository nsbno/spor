import { Flex, useMultiStyleConfig } from "@chakra-ui/react";
import { ArrowLeftFill24Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { StepperStep } from ".";
import { Box, Heading, IconButton, createTexts, useTranslation } from "..";
import { StepperProvider } from "./StepperContext";

type StepperProps = {
  /** Callback for when a step is clicked */
  onClick: (clickedStep: number) => void;
  /** Callback for when the back button is clicked (on smaller screens).
   * A boolean indicating whether or not the user is on the first step is passed as an argument.
   *
   * If this is not provided, the back button will not be shown on smaller screens on the first step.
   */
  onBackButtonClick?: (isFirstStep: boolean) => void;
  /** Title shown on smaller devices */
  title?: string;
  /** The currently active step */
  activeStep: number;
  /** The labels of each step */
  steps: string[];
  /** The variant.
   * "base" has a transparent background,
   * while "accent" has a slight accent color  */
  variant: "base" | "accent";
  /** Disables all clicks */
  isDisabled?: boolean;
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
export const Stepper = ({
  onClick = () => {},
  onBackButtonClick,
  steps,
  activeStep: activeStepAsStringOrNumber,
  title,
  variant,
  isDisabled,
}: StepperProps) => {
  const style = useMultiStyleConfig("Stepper", { variant });
  const numberOfSteps = steps.length;
  const activeStep = Number(activeStepAsStringOrNumber);
  const { t } = useTranslation();
  const hideBackButtonOnFirstStep = activeStep === 1 && !onBackButtonClick;
  return (
    <Box sx={style.root}>
      <StepperProvider
        onClick={onClick}
        activeStep={activeStep}
        variant={variant}
        numberOfSteps={numberOfSteps}
      >
        <Box sx={style.container}>
          <Box sx={style.innerContainer}>
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
                  if (onBackButtonClick) {
                    onBackButtonClick(activeStep === 1);
                  }
                  onClick(activeStep - 1);
                }}
              />
              {title && (
                <Heading flex={1} variant="sm" as="h3" sx={style.title}>
                  {title}
                </Heading>
              )}
              <Box sx={style.stepCounter}>
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
                isDisabled={isDisabled}
              >
                {step}
              </StepperStep>
            ))}
          </Flex>
        </Box>
      </StepperProvider>
    </Box>
  );
};

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
