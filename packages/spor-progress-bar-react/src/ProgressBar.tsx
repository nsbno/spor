import { Flex, HStack, useMultiStyleConfig } from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { Language, useTranslation } from "@vygruppen/spor-i18n-react";
import { DropdownLeftFill24Icon } from "@vygruppen/spor-icon-react";
import { Box } from "@vygruppen/spor-layout-react";
import React from "react";
import { ProgressBarProvider } from "./ProgressBarContext";

type ProgressBarProps = {
  children: React.ReactNode;
  onClick: (clickedStep: number) => void;
  colorScheme: "light" | "dark" | "green";
  title?: string;
  activeStep: number;
};
/**
 * A progress bar is used to show the progress of a process.
 *
 * You specify the active step, which starts at 1 (not 0)
 *
 * ```tsx
 * <ProgressBar
 *   title="Eksempel"
 *   onClick={handleStepClick}
 *   activeStep={2}
 * >
 *   <ProgressBarStep>Velg hvor</ProgressBarStep>
 *   <ProgressBarStep>Velg når</ProgressBarStep>
 *   <ProgressBarStep>Velg hvordan</ProgressBarStep>
 * </ProgressBar>
 * ```
 **/
export const ProgressBar = ({
  onClick,
  children,
  activeStep: activeStepAsStringOrNumber,
  title,
  colorScheme,
}: ProgressBarProps) => {
  const style = useMultiStyleConfig("ProgressBar", { colorScheme });
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
          <ProgressBarProvider
            onClick={onClick}
            activeStep={activeStep}
            colorScheme={colorScheme}
            numberOfSteps={numberOfSteps}
          >
            {React.Children.toArray(children).map((child, index) =>
              React.cloneElement(child as any, { stepNumber: index + 1 })
            )}
          </ProgressBarProvider>
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
