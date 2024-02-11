import {
  DarkMode,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/react";

import { PopoverBody, usePopoverContext } from "@chakra-ui/react";
import { ArrowRightFill18Icon } from "@vygruppen/spor-icon-react";
import React, { Children, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  ProgressIndicator,
  Stack,
  createTexts,
  useTranslation,
} from "..";

export type WizardNudgeProps = PopoverProps & {
  /** Steps in the wizard. Each item is its own step */
  children: React.ReactNode;
  /** The element that triggers the wizard */
  triggerElement: React.ReactNode;
  /**
   * Where the popover should be placed by default.
   *
   * Note - this is a suggestion, and may be overridden by space concerns.
   */
  placement?: "top" | "bottom" | "left" | "right";
  /** Should the popover have a close button? */
  withCloseButton?: boolean;
};
/**
 * A nudge that displays its children one at a time, with a step indicator
 *
 * Each child is its own step. If you want several components inside a
 * single slide, you want to wrap them in an external component (like a Stack).
 *
 * ```tsx
 * <WizardNudge triggerElement={<Button>Click me</Button>}>
 *  <Text>First step</Text>
 *  <Text>Second step</Text>
 *  <Stack>
 *    <Text>Third step is special.</Text>
 *    <Text>It even has several paragraphs 🤯</Text>
 *  </Stack>
 * </WizardNudge>
 * ```
 */
export const WizardNudge = ({
  children,
  triggerElement,
  withCloseButton = false,
}: WizardNudgeProps) => {
  return (
    <DarkMode>
      <Popover size="lg">
        <PopoverTrigger>{triggerElement}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          {withCloseButton && <PopoverCloseButton />}
          <NudgeWizardBody>{children}</NudgeWizardBody>
        </PopoverContent>
      </Popover>
    </DarkMode>
  );
};

type NudgeWizardBodyProps = {
  /** Each child will be their own step */
  children: React.ReactNode;
};
const NudgeWizardBody = ({ children }: NudgeWizardBodyProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = Children.count(children);
  const { isOpen } = usePopoverContext();
  useEffect(() => {
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
          <ProgressIndicator
            activeStep={currentStep}
            numberOfSteps={totalSteps}
          />
          <NextStepButton
            isLastStep={totalSteps === currentStep}
            onNext={() => setCurrentStep((prev) => prev + 1)}
          />
        </Flex>
      </Stack>
    </PopoverBody>
  );
};

type NextStepButtonProps = { isLastStep: boolean; onNext: () => void };
const NextStepButton = ({ isLastStep, onNext }: NextStepButtonProps) => {
  const { onClose } = usePopoverContext();
  const { t } = useTranslation();
  return (
    <Button
      variant="tertiary"
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
