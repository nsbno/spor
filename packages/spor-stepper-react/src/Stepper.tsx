import { Flex, HStack, useMultiStyleConfig } from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { Language, useTranslation } from "@vygruppen/spor-i18n-react";
import { DropdownLeftFill24Icon } from "@vygruppen/spor-icon-react";
import { Box } from "@vygruppen/spor-layout-react";
import React from "react";
import { StepperProvider } from "./StepperContext";

type StepperProps = {
  children: React.ReactNode;
  onClick: (clickedStep: number) => void;
  colorScheme: "light" | "dark" | "green";
  title?: string;
  activeStep: number;
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
 * >
 *   <StepperStep>Velg hvor</StepperStep>
 *   <StepperStep>Velg når</StepperStep>
 *   <StepperStep>Velg hvordan</StepperStep>
 * </Stepper>
 * ```
 **/
export const Stepper = ({
  onClick,
  children,
  activeStep: activeStepAsStringOrNumber,
  title,
  colorScheme,
}: StepperProps) => {
  const style = useMultiStyleConfig("Stepper", { colorScheme });
  const numberOfSteps = React.Children.count(children);
  const activeStep = Number(activeStepAsStringOrNumber);
  const { t } = useTranslation();
  return (
    <Box __css={style.root}>
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
            <Box __css={style.stepCounter}>
              {t(texts.stepsOf(activeStep, numberOfSteps))}
            </Box>
          </HStack>
          {title && (
            <Box as="h3" __css={style.title}>
              {title}
            </Box>
          )}
        </Box>
        <Flex justifyContent="center">
          <StepperProvider
            onClick={onClick}
            activeStep={activeStep}
            colorScheme={colorScheme}
            numberOfSteps={numberOfSteps}
          >
            {React.Children.toArray(children).map((child, index) =>
              React.cloneElement(child as any, { stepNumber: index + 1 })
            )}
          </StepperProvider>
        </Flex>
      </Box>
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
