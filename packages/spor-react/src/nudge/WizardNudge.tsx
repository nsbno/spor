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
import React, { Children, useState } from "react";
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
   * Where the nudge should be placed by default.
   *
   * Note - this is a suggestion, and may be overridden by space concerns.
   */
  placement?: "top" | "bottom" | "left" | "right";
  /** Should the nudge have a close button? */
  withCloseButton?: boolean;
};
/**
 * A nudge that displays its children one at a time, with a step indicator.
 *
 * Wrap each step in a `<WizardNudgeStep />` component.
 *
 * ```tsx
 * <WizardNudge triggerElement={<Button>Click me</Button>}>
 *   <WizardNudgeStep>
 *     <Text>First step</Text>
 *   </WizardNudgeStep>
 *   <WizardNudgeStep>
 *     <Text>Second step</Text>
 *   </WizardNudgeStep>
 *   <WizardNudgeStep>
 *     <Text>Last step</Text>
 *   </WizardNudgeStep>
 * </WizardNudge>
 * ```
 */
export const WizardNudge = ({
  children,
  triggerElement,
  withCloseButton = false,
}: WizardNudgeProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = Children.count(children);
  const isLastStep = totalSteps === currentStep;
  const { t } = useTranslation();

  const { onClose } = usePopoverContext();
  const onNext = () => setCurrentStep((prev) => prev + 1);

  return (
    <DarkMode>
      <Popover size="lg">
        <PopoverTrigger>{triggerElement}</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          {withCloseButton && <PopoverCloseButton />}
          <PopoverBody>
            <Stack spacing={1.5}>
              <Box>{Children.toArray(children)[currentStep - 1]}</Box>
              <Flex gap={3}>
                <ProgressIndicator
                  activeStep={currentStep}
                  numberOfSteps={totalSteps}
                />
                <Button
                  variant="tertiary"
                  size="sm"
                  color="white"
                  leftIcon={isLastStep ? undefined : <ArrowRightFill18Icon />}
                  onClick={isLastStep ? onClose : onNext}
                >
                  {t(isLastStep ? texts.finish : texts.nextStep)}
                </Button>
              </Flex>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </DarkMode>
  );
};

type NudgeWizardStepProps = {
  children: React.ReactNode;
};
/** A step in a NudgeWizard.
 *
 * This component doesn't do anything special, except making things a bit more
 * explicit code-wise. It just renders a div.
 */
export const NudgeWizardStep = ({ children }: NudgeWizardStepProps) => {
  return <Box>{children}</Box>;
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
