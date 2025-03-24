"use client";
import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
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

import {
  Box,
  BoxProps,
  chakra,
  Popover as ChakraPopover,
  PopoverRootProps,
} from "@chakra-ui/react";
import { ArrowRightFill18Icon } from "@vygruppen/spor-icon-react";
import {
  PopoverCloseTrigger,
  usePopover,
  usePopoverContext,
} from "@ark-ui/react";

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
    defaultOpen = props.open === undefined ? true : undefined, // defaultOpen defaults to true if open is undefined
    size = "md",
    ...rest
  } = props;

  if (isNudgeExpired(introducedDate)) {
    logExpirationWarning();
    return null;
  }

  return <Popover modal defaultOpen={true} size={size} {...rest} />;
};

export const NudgeTrigger = forwardRef<
  HTMLButtonElement,
  ChakraPopover.TriggerProps
>(({ ...props }, ref) => {
  return <PopoverTrigger {...props} ref={ref} />;
});

export const NudgeContent = forwardRef<HTMLDivElement, PopoverProps>(
  ({ showCloseButton = true, children, ...props }, ref) => {
    const [currentStep, setCurrentStep] = useState(1);
    const childrenArray = React.Children.toArray(children); // Convert children to an array

    const { open } = usePopoverContext();

    useEffect(() => {
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

    if (!wizardPages.length) {
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
              setCurrentStep((prev) => prev + 1);
            }}
          />
        </NudgeActions>
      </PopoverContent>
    );
  },
);

export const NudgeActions = ({ className, ...props }: BoxProps) => {
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

export const NudgeCloseTrigger = PopoverCloseTrigger;
