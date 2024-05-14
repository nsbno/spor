import { Box, usePopoverContext } from "@chakra-ui/react";
import { ArrowRightFill18Icon } from "@vygruppen/spor-icon-react";
import React, { useState } from "react";
import {
  Button,
  Flex,
  Nudge,
  NudgeProps,
  ProgressIndicator,
  createTexts,
  useTranslation,
} from "..";

export type WizardNudgeProps = Omit<NudgeProps, "actions" | "content"> & {
  /** Steps in the wizard. Each item is its own step. Should only be Step components */
  content: React.ReactNode[];
  /**
   * Where the nudge should be placed by default.
   *
   * Note - this is a suggestion, and may be overridden by space concerns.
   */
  placement?: "top" | "bottom" | "left" | "right";
};
/**
 * A nudge that displays its children one at a time, with a step indicator.
 *
 * ```tsx
 * <WizardNudge
 *  content={["First step", "Second step"]}
 *  name="my-wizard-nudge"
 *  introducedDate="2024-02-19"
 * >
 *   <StaticCard width="fit-content" padding={2}>
 *    My new feature
 *  </StaticCard>
 * </WizardNudge>
 * ```
 */
export const WizardNudge = ({
  children,
  name,
  onClose,
  content,
  ...props
}: WizardNudgeProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = content.length;
  const isLastStep = totalSteps === currentStep;
  const onNext = () => setCurrentStep((prev) => prev + 1);

  return (
    <Nudge
      onClose={onClose}
      name={name}
      content={content[currentStep - 1]}
      actions={
        <Flex gap={3} alignItems="center">
          <ProgressIndicator
            activeStep={currentStep}
            numberOfSteps={totalSteps}
          />
          <Box>
            <NextOrCloseButton isLastStep={isLastStep} onNext={onNext} />
          </Box>
        </Flex>
      }
      {...props}
    >
      {children}
    </Nudge>
  );
};

type NextOrCloseButtonProps = {
  isLastStep: boolean;
  onNext: () => void;
};
const NextOrCloseButton = ({ isLastStep, onNext }: NextOrCloseButtonProps) => {
  const { onClose } = usePopoverContext();
  const { t } = useTranslation();
  return (
    <Button
      variant="tertiary"
      size="xs"
      leftIcon={isLastStep ? undefined : <ArrowRightFill18Icon />}
      onClick={isLastStep ? onClose : onNext}
      width="fit-content"
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
