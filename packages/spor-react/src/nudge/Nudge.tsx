"use client";
import {
  Box,
  BoxProps,
  chakra,
  Popover as ChakraPopover,
  PopoverCloseTrigger,
  PopoverRootProps,
  usePopoverContext,
} from "@chakra-ui/react";
import { ArrowRightFill18Icon } from "@vygruppen/spor-icon-react";
import React, { PropsWithChildren, useEffect, useState } from "react";

import {
  Button,
  createTexts,
  Popover,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  ProgressIndicator,
  useColorMode,
  useTranslation,
} from "..";

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
  const { introducedDate, size = "md", ...rest } = props;

  if (isNudgeExpired(introducedDate)) {
    logExpirationWarning();
    return null;
  }

  return <Popover defaultOpen={true} size={size} {...rest} />;
};

export const NudgeTrigger = ({
  ref,
  ...props
}: ChakraPopover.TriggerProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) => {
  return <PopoverTrigger {...props} ref={ref} />;
};
NudgeTrigger.displayName = "NudgeTrigger";

export const NudgeContent = ({
  ref,
  showCloseButton = true,
  children,
  ...props
}: PopoverProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const childrenArray = React.Children.toArray(children); // Convert children to an array

  const { open } = usePopoverContext();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentStep(1);
  }, [children, open]);

  const wizardPages = childrenArray.filter(
    (child) =>
      React.isValidElement(child) &&
      (child.type as React.ComponentType).displayName === "NudgeWizardStep",
  );

  const restChildren = childrenArray.filter(
    (child) =>
      !React.isValidElement(child) ||
      (child.type as React.ComponentType).displayName !== "NudgeWizardStep",
  );

  const totalSteps = wizardPages.length;
  const isLastStep = totalSteps === currentStep;

  if (wizardPages.length === 0) {
    return (
      <PopoverContent showCloseButton={showCloseButton} {...props} ref={ref}>
        {children}
      </PopoverContent>
    );
  }

  return (
    <PopoverContent showCloseButton={showCloseButton} {...props} ref={ref}>
      {restChildren}
      {wizardPages[currentStep - 1] as React.ReactElement}
      <NudgeActions gap="18px">
        <ProgressIndicator
          activeStep={currentStep}
          numberOfSteps={totalSteps}
        />

        <NextButton
          isLastStep={isLastStep}
          onNext={() => {
            setCurrentStep((previous) => previous + 1);
          }}
        />
      </NudgeActions>
    </PopoverContent>
  );
};
NudgeContent.displayName = "NudgeContent";

export const NudgeActions = ({ ...props }: BoxProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      className={colorMode === "dark" ? "light" : "dark"}
      display="flex"
      paddingTop="1rem"
      alignItems="center"
      gap="0.5rem"
      justifyContent="between"
      width="100%"
      {...props}
    />
  );
};

type NextOrCloseButtonProps = {
  isLastStep: boolean;
  onNext: () => void;
};
const NextButton = ({ isLastStep, onNext }: NextOrCloseButtonProps) => {
  const { t } = useTranslation();

  if (isLastStep)
    return (
      <PopoverCloseTrigger>
        <Button variant="tertiary" size="xs">
          {t(texts.close)}
        </Button>
      </PopoverCloseTrigger>
    );

  return (
    <Button
      variant="tertiary"
      size="xs"
      rightIcon={<ArrowRightFill18Icon />}
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
  close: {
    nb: "Lukk",
    nn: "Lukk",
    sv: "Stäng",
    en: "Close",
  },
});

export const NudgeWizardStep = ({ children }: PropsWithChildren) => {
  return (
    <chakra.div display="flex" flexDirection="column" gap="1rem" width="100%">
      {children}
    </chakra.div>
  );
};

NudgeWizardStep.displayName = "NudgeWizardStep";

export const NudgeCloseTrigger = ({
  ref,
  children,
  ...props
}: ChakraPopover.TriggerProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) => {
  const isStringChild = typeof children === "string";

  return (
    <ChakraPopover.CloseTrigger {...props} ref={ref} asChild={!isStringChild}>
      {children}
    </ChakraPopover.CloseTrigger>
  );
};
NudgeCloseTrigger.displayName = "NudgeCloseTrigger";
