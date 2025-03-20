"use client";
import React, { forwardRef, useState } from "react";
import {
  Button,
  createTexts,
  Popover,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  ProgressIndicator,
  useTranslation,
} from "..";

import {
  chakra,
  Popover as ChakraPopover,
  PopoverRootProps,
} from "@chakra-ui/react";
import { nudgeActionsRecipe } from "@/theme/recipes/nudge";
import { ArrowRightFill18Icon } from "@vygruppen/spor-icon-react";

const EXPIRATION_DELAY_MS = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

const isNudgeExpired = (
  introducedDate: string,
  delay = EXPIRATION_DELAY_MS,
): boolean => {
  const expirationTime = new Date(introducedDate).getTime() + delay;
  return expirationTime < Date.now();
};

const logExpirationWarning = () => {
  if (process.env.NODE_ENV === "development") {
    console.warn(
      `The nudge has been used for longer than 30 days. Please remove it from the codebase.
      This is a development-only warning and will not appear in production.`,
    );
  }
};

export type NudgeProps = {
  introducedDate: string;
} & PopoverRootProps;

export const Nudge = (props: NudgeProps) => {
  const {
    introducedDate,
    defaultOpen = props.open === undefined ? true : undefined, // defaultOpen defaults to true if open if open is undefined
    size = "md",
    closeOnInteractOutside = false,
    ...rest
  } = props;

  if (isNudgeExpired(introducedDate)) {
    logExpirationWarning();
    return null;
  }

  return (
    <Popover
      defaultOpen={defaultOpen}
      closeOnInteractOutside={closeOnInteractOutside}
      size={size}
      {...rest}
    />
  );
};

export const NudgeTrigger = forwardRef<
  HTMLButtonElement,
  ChakraPopover.TriggerProps
>(({ ...props }, ref) => {
  return <PopoverTrigger {...props} ref={ref} />;
});

export const NudgeContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ showCloseButton = true, ...props }, ref) => {
    return (
      <PopoverContent showCloseButton={showCloseButton} {...props} ref={ref} />
    );
  },
);

export const NudgeActions = chakra("div", nudgeActionsRecipe);

export const WizardNudgeBody = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const isLastStep = totalSteps === currentStep;

  return (
    <>
      <NudgeActions>
        <ProgressIndicator
          activeStep={currentStep}
          numberOfSteps={totalSteps}
        />

        <NextButton
          disabled={isLastStep}
          onNext={() => {
            setCurrentStep((prev) => prev + 1);
          }}
        />
      </NudgeActions>
    </>
  );
};

type NextOrCloseButtonProps = {
  disabled: boolean;
  onNext: () => void;
};
const NextButton = ({ disabled, onNext }: NextOrCloseButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="primary"
      size="xs"
      disabled={disabled}
      leftIcon={<ArrowRightFill18Icon />}
      onClick={onNext}
    >
      {t(texts.nextStep)}
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
});
