"use client";
import {
  RecipeVariantProps,
  Steps as ChakraSteps,
  StepsItemProps as ChakraStepsItemProps,
  StepsListProps as ChakraStepsListProps,
  StepsRootProps as ChakraStepsRootProps,
  Text,
} from "@chakra-ui/react";
import {
  ArrowLeftOutline24Icon,
  DropdownRightFill18Icon,
} from "@vygruppen/spor-icon-react";
import { PropsWithChildren } from "react";

import { stepsSlotRecipe } from "@/theme/slot-recipes/steps";

import {
  Button,
  ButtonProps,
  createTexts,
  IconButton,
  useTranslation,
} from "..";

export type StepperVariantProps = RecipeVariantProps<typeof stepsSlotRecipe>;

export type StepperProps = Exclude<
  ChakraStepsRootProps,
  "colorPalette" | "orientation" | "variant"
> &
  PropsWithChildren<StepperVariantProps>;
export const Stepper = ({
  ref,
  linear,
  ...props
}: StepperProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <ChakraSteps.Root
      {...props}
      linear={linear}
      data-linear={linear ? "" : undefined}
      ref={ref}
    />
  );
};

export type StepperItemProps = PropsWithChildren<ChakraStepsItemProps> & {
  showIndicator?: boolean;
};
export const StepperItem = ({
  ref,
  showIndicator = false,
  children,
  ...props
}: StepperItemProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <ChakraSteps.Item {...props} ref={ref} marginRight={{ base: 0 }}>
      <ChakraSteps.Trigger>
        {showIndicator && <ChakraSteps.Indicator />}
        {children}
      </ChakraSteps.Trigger>
      <ChakraSteps.ItemContext>
        {(step) => !step.last && <StepperSeparator />}
      </ChakraSteps.ItemContext>
    </ChakraSteps.Item>
  );
};

export const StepperSeparator = () => {
  return (
    <ChakraSteps.Separator display={{ base: "none", md: "flex" }}>
      <DropdownRightFill18Icon />
    </ChakraSteps.Separator>
  );
};

export const StepperNextTrigger = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraSteps.NextTrigger asChild>
      <Button {...props}>{children}</Button>
    </ChakraSteps.NextTrigger>
  );
};

export const StepperPreviousTrigger = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraSteps.PrevTrigger asChild>
      <Button {...props}>{children}</Button>
    </ChakraSteps.PrevTrigger>
  );
};

export const StepperList = ({ children, ...props }: ChakraStepsListProps) => {
  const { t } = useTranslation();

  return (
    <ChakraSteps.List {...props}>
      <ChakraSteps.PrevTrigger asChild display={{ base: "flex", md: "none" }}>
        <IconButton
          icon={<ArrowLeftOutline24Icon />}
          variant="ghost"
          aria-label={t(texts.back)}
        />
      </ChakraSteps.PrevTrigger>
      {children}
      <ChakraSteps.Context>
        {(api) => (
          <Text
            display={{ base: "block", md: "none" }}
            fontSize="mobile.sm"
            alignSelf="center"
            data-part="step-counter"
          >
            {t(texts.stepsOf(api.value + 1, api.count))}
          </Text>
        )}
      </ChakraSteps.Context>
    </ChakraSteps.List>
  );
};
export const StepperContent = ChakraSteps.Content;

const texts = createTexts({
  stepsOf: (activeStep, numberOfSteps) => ({
    nb: `Steg ${activeStep}/${numberOfSteps}`,
    nn: `Steg ${activeStep}/${numberOfSteps}`,
    sv: `Steg ${activeStep}/${numberOfSteps}`,
    en: `Step ${activeStep}/${numberOfSteps}`,
  }),
  back: {
    nb: "Tilbake",
    nn: "Tilbake",
    sv: "Tillbaka",
    en: "Back",
  },
});

export const StepperCompletedContent = ChakraSteps.CompletedContent;
