import {
  DarkMode,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverProps,
  chakra,
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

export type WizardNudgeProps = Omit<PopoverProps, "triggerElement"> & {
  /** Steps in the wizard. Each item is its own step. Should only be Step components */
  children: React.ReactElement<WizardNudgeStepProps>[];
  /** The element the wizard is anchored in */
  anchorElement: React.ReactNode;
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
  anchorElementRef,
  withCloseButton = false,
}: WizardNudgeProps) => {
  const [isOpen, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = Children.count(children);
  const isLastStep = totalSteps === currentStep;
  const onNext = () => setCurrentStep((prev) => prev + 1);

  const anchorRef = Array.isArray(anchorElementRef)
    ? anchorElementRef[currentStep - 1]
    : anchorElementRef;

  return (
    <DarkMode>
      <Popover size="lg" isOpen={isOpen} onClose={() => setOpen(false)}>
        <PopoverAnchor>
          <chakra.div
            ref={anchorRef}
            tabIndex={-1}
            aria-hidden={true}
            width="fit-content"
          />
        </PopoverAnchor>
        <PopoverContent>
          <PopoverArrow />
          {withCloseButton && <PopoverCloseButton />}
          <PopoverBody>
            <Stack spacing={1.5}>
              <Box>{Children.toArray(children)[currentStep - 1]}</Box>
              <Flex gap={3} alignItems="center">
                <ProgressIndicator
                  activeStep={currentStep}
                  numberOfSteps={totalSteps}
                />
                <NextOrCloseButton isLastStep={isLastStep} onNext={onNext} />
              </Flex>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </DarkMode>
  );
};

type WizardNudgeStepProps = {
  children: React.ReactNode;
};
/** A step in a WizardNudge.
 *
 * This component doesn't do anything special, except making things a bit more
 * explicit code-wise. It just renders a div.
 */
export const WizardNudgeStep = ({ children }: WizardNudgeStepProps) => {
  return <Box>{children}</Box>;
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
      size="sm"
      color="white"
      minWidth="fit-content"
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
