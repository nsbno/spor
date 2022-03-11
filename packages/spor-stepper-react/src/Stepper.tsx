import { Flex, HStack, useMultiStyleConfig } from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { Language, useTranslation } from "@vygruppen/spor-i18n-react";
import { DropdownLeftFill24Icon } from "@vygruppen/spor-icon-react";
import { Box } from "@vygruppen/spor-layout-react";
import { SimplePopover } from "@vygruppen/spor-popover-react";
import React from "react";
import { StepperStep } from ".";
import { StepperProvider } from "./StepperContext";

type StepperProps = {
  onClick: (clickedStep: number) => void;
  colorScheme: "light" | "dark" | "green";
  title?: string;
  activeStep: number;
  steps: string[];
};
/**
 * A stepper is used to show which step of a process a user is currently in.
 *
 * You specify the active step, which starts at 1 (not 0)
 *
 * ```tsx
 * <Stepper
 *   title="Eksempel"
 *   onClick={handleStepClick}
 *   activeStep={2}
 *   steps={['Velg hvor', 'Velg når', 'Velg hvordan']}
 * />
 * ```
 **/
export const Stepper = ({
  onClick = () => {},
  steps,
  activeStep: activeStepAsStringOrNumber,
  title,
  colorScheme,
}: StepperProps) => {
  const style = useMultiStyleConfig("Stepper", { colorScheme });
  const numberOfSteps = steps.length;
  const activeStep = Number(activeStepAsStringOrNumber);
  const { t } = useTranslation();
  return (
    <Box __css={style.root}>
      <StepperProvider
        onClick={onClick}
        activeStep={activeStep}
        colorScheme={colorScheme}
        numberOfSteps={numberOfSteps}
      >
        <Box __css={style.container}>
          <Box __css={style.innerContainer}>
            <HStack>
              {activeStep > 1 && (
                <IconButton
                  aria-label={t(texts.back)}
                  icon={<DropdownLeftFill24Icon />}
                  variant="ghost"
                  size="sm"
                  onClick={() => onClick(activeStep - 1)}
                  __css={style.backButton}
                />
              )}

              <SimplePopover
                trigger={
                  <Box as="button" __css={style.stepCounter}>
                    {t(texts.stepsOf(activeStep, numberOfSteps))}
                  </Box>
                }
                borderRadius="xs"
              >
                {steps.map((step, index) => (
                  <StepperStep key={step} stepNumber={index + 1}>
                    {step}
                  </StepperStep>
                ))}
              </SimplePopover>
            </HStack>
            {title && (
              <Box as="h3" __css={style.title}>
                {title}
              </Box>
            )}
          </Box>
          <Flex justifyContent="center" display={["none", "flex"]}>
            {steps.map((step, index) => (
              <StepperStep key={index} stepNumber={index + 1}>
                {step}
              </StepperStep>
            ))}
          </Flex>
        </Box>
      </StepperProvider>
    </Box>
  );
};

const texts = {
  stepsOf: (activeStep: number, numberOfSteps: number) => ({
    [Language.NorwegianBokmal]: `Steg ${activeStep} av ${numberOfSteps}`,
    [Language.Swedish]: `Steg ${activeStep} av ${numberOfSteps}`,
    [Language.English]: `Step ${activeStep} of ${numberOfSteps}`,
  }),
  back: {
    [Language.NorwegianBokmal]: "Tilbake",
    [Language.Swedish]: "Tillbaka",
    [Language.English]: "Back",
  },
};
