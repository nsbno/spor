"use client";
import {
  RecipeVariantProps,
  Steps as ChakraSteps,
  StepsItemProps as ChakraStepsItemProps,
  StepsRootProps as ChakraStepsRootProps,
} from "@chakra-ui/react";
import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import { PropsWithChildren } from "react";

import { Button, ButtonProps } from "..";
import { stepperSlotRecipe } from "../theme/slot-recipes/stepper";

export type StepperVariantProps = RecipeVariantProps<typeof stepperSlotRecipe>;

export type StepperProps = Exclude<
  ChakraStepsRootProps,
  "colorPalette" | "orientation" | "variant"
> &
  PropsWithChildren<StepperVariantProps>;
export const Stepper = ({
  ref,
  ...props
}: StepperProps & {
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return <ChakraSteps.Root {...props} ref={ref} />;
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
    <ChakraSteps.Item {...props} ref={ref}>
      <ChakraSteps.Trigger>
        {showIndicator && <ChakraSteps.Indicator />}
        {children}
      </ChakraSteps.Trigger>
      <StepperSeparator />
    </ChakraSteps.Item>
  );
};

export const StepperSeparator = () => {
  return (
    <ChakraSteps.Separator>
      <DropdownRightFill18Icon display={["none", null, "block"]} />
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

export const StepperList = ChakraSteps.List;
export const StepperContent = ChakraSteps.Content;
