"use client";
import {
  RecipeVariantProps,
  Steps as ChakraSteps,
  StepsItemProps as ChakraStepsItemProps,
  StepsListProps as ChakraStepsListProps,
  StepsRootProps as ChakraStepsRootProps,
} from "@chakra-ui/react";
import {
  ArrowLeftOutline24Icon,
  DropdownRightFill18Icon,
  SuccessOutline18Icon,
} from "@vygruppen/spor-icon-react";
import { createContext, PropsWithChildren, useContext } from "react";

import { stepsSlotRecipe } from "@/theme/slot-recipes/steps";

import {
  Button,
  ButtonProps,
  createTexts,
  Flex,
  IconButton,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  useTranslation,
} from "..";

export type StepperVariantProps = RecipeVariantProps<typeof stepsSlotRecipe>;

export type StepperProps = Exclude<
  ChakraStepsRootProps,
  "colorPalette" | "orientation" | "variant"
> &
  PropsWithChildren<StepperVariantProps>;

const StepperLinearContext = createContext(false);

export const Stepper = ({
  ref,
  linear,
  ...props
}: StepperProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <StepperLinearContext.Provider value={Boolean(linear)}>
      <ChakraSteps.Root
        {...props}
        linear={linear}
        data-linear={linear ? "" : undefined}
        ref={ref}
      />
    </StepperLinearContext.Provider>
  );
};

export type StepperItemProps = PropsWithChildren<ChakraStepsItemProps> & {
  showIndicator?: boolean;
};

type StepperMenuContextValue = {
  currentStep: number;
  mode: "current-label" | "menu";
};

const StepperItemContext = createContext<StepperMenuContextValue | null>(null);

export const StepperItem = ({
  ref,
  showIndicator = false,
  children,
  ...props
}: StepperItemProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const menuContext = useContext(StepperItemContext);

  if (menuContext) {
    const isCurrent = menuContext.currentStep === props.index;
    const isComplete = props.index < menuContext.currentStep;

    if (menuContext.mode === "current-label") {
      return isCurrent ? <>{children}</> : null;
    }

    return (
      <ChakraSteps.Item width="100%" {...props} ref={ref}>
        <ChakraSteps.Trigger width="100%">
          <MenuItem
            value={props.index.toString()}
            aria-current={isCurrent ? "step" : undefined}
            leftIcon={isComplete ? <SuccessOutline18Icon /> : undefined}
            width="100%"
            justifyContent="flex-start"
          >
            <span data-part="trigger">{children}</span>
          </MenuItem>
        </ChakraSteps.Trigger>
      </ChakraSteps.Item>
    );
  }

  return (
    <ChakraSteps.Item
      {...props}
      ref={ref}
      marginRight={{ base: 0 }}
      display={{ base: "none", md: "flex" }}
    >
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
  const linear = useContext(StepperLinearContext);

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
          <>
            <Flex
              display={{ base: "flex", md: "none" }}
              fontWeight="bold"
              alignItems="center"
            >
              <StepperItemContext.Provider
                value={{
                  currentStep: api.value,
                  mode: "current-label",
                }}
              >
                {children}
              </StepperItemContext.Provider>
            </Flex>
            <Menu>
              <MenuTrigger
                display={{ base: "flex", md: "none" }}
                data-part="step-counter"
                variant="ghost"
                size="sm"
              >
                {t(texts.stepsOf(api.value + 1, api.count))}
              </MenuTrigger>
              <MenuContent data-linear={linear ? "" : undefined}>
                <StepperItemContext.Provider
                  value={{
                    currentStep: api.value,
                    mode: "menu",
                  }}
                >
                  {children}
                </StepperItemContext.Provider>
              </MenuContent>
            </Menu>
          </>
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
