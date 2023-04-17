import { PopoverBody, usePopoverContext } from "@chakra-ui/react";
import { ArrowRightFill18Icon } from "@vygruppen/spor-icon-react";
import * as React from "react";
import { Box, Button, Flex, Stack, createTexts, useTranslation } from "..";

export type PopoverWizardProps = {
  /** Each child will be their own step */
  children: React.ReactNode;
};
/** A popover wizard is great for showing new features one by one */
export const PopoverWizardBody = ({ children }: PopoverWizardProps) => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = React.Children.count(children);
  const { isOpen } = usePopoverContext();
  React.useEffect(() => {
    if (!isOpen && currentStep > 1) {
      const id = setTimeout(() => setCurrentStep(1), 500);
      return () => clearTimeout(id);
    }
  }, [isOpen, currentStep]);
  return (
    <PopoverBody>
      <Stack spacing={1.5}>
        <Box>{React.Children.toArray(children)[currentStep - 1]}</Box>
        <Flex gap={3}>
          <StepIndicator totalSteps={totalSteps} currentStep={currentStep} />
          <NextStepButton
            isLastStep={totalSteps === currentStep}
            onNext={() => setCurrentStep((prev) => prev + 1)}
          />
        </Flex>
      </Stack>
    </PopoverBody>
  );
};

type StepIndicatorProps = { totalSteps: number; currentStep: number };
const StepIndicator = ({ totalSteps, currentStep }: StepIndicatorProps) => {
  const steps = createRange(1, totalSteps);
  return (
    <Flex gap={1} alignItems="center">
      {steps.map((step) => (
        <Box
          key={step}
          width={1}
          height={1}
          borderRadius="50%"
          transition="medium"
          transitionProperty="background-color"
          backgroundColor={step === currentStep ? "seaMist" : "greenHaze"}
        />
      ))}
    </Flex>
  );
};

const createRange = (start: number, end: number) => {
  return new Array(end - start + 1).fill(null).map((_, i) => i + start);
};

type NextStepButtonProps = { isLastStep: boolean; onNext: () => void };
const NextStepButton = ({ isLastStep, onNext }: NextStepButtonProps) => {
  const { onClose } = usePopoverContext();
  const { t } = useTranslation();
  return (
    <Button
      variant="additional"
      size="sm"
      color="white"
      leftIcon={isLastStep ? undefined : <ArrowRightFill18Icon />}
      onClick={isLastStep ? onClose : onNext}
    >
      {t(isLastStep ? texts.finish : texts.nextStep)}
    </Button>
  );
};

const texts = createTexts({
  nextStep: {
    nb: "Neste",
    nn: "Neste",
    sv: "Nästa",
    en: "Next",
  },
  finish: {
    nb: "Fullfør",
    nn: "Fullfør",
    sv: "Fullför",
    en: "Finish",
  },
});
