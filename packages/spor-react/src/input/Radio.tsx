"use client";
import React, { forwardRef, PropsWithChildren } from "react";
import { RecipeVariantProps } from "@chakra-ui/react";
import { radioGroupSlotRecipe } from "../theme/slot-recipes/radio";
import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";

type RadioVariants = RecipeVariantProps<typeof radioGroupSlotRecipe>;

export type RadioProps = PropsWithChildren<RadioVariants> &
  Omit<ChakraRadioGroup.ItemProps, "colorPalette" | "size" | "variant"> & {
    rootRef?: React.Ref<HTMLDivElement>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  };

/**
 * The humble radio button.
 *
 * Specify the label as `children` and the value as `value`.
 *
 * ```tsx
 * <Radio value="#f00">Red</Radio>
 * ```
 *
 * You typically want to place Radio components in a group with several other Radio components. You can do that with the `RadioGroup` component.
 *
 * ```tsx
 * <RadioGroup name="ticket">
 *   <Radio value="economy">Economy</Radio>
 *   <Radio value="business">Business</Radio>
 *   <Radio value="first-class">First Class</Radio>
 * </RadioGroup>
 */

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, inputProps, rootRef, ...rest } = props;

  return (
    <ChakraRadioGroup.Item ref={rootRef} {...rest}>
      <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
      <ChakraRadioGroup.ItemIndicator />
      {children && (
        <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
      )}
    </ChakraRadioGroup.Item>
  );
});

type RadioGroupProps = Omit<ChakraRadioGroup.RootProps, "colorPalette"> & {
  rootAriaLabelledby?: string;
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    const { rootAriaLabelledby } = props;
    return (
      <ChakraRadioGroup.Root
        ref={ref}
        {...props}
        aria-labelledby={rootAriaLabelledby}
      />
    );
  },
);

export const RadioGroupLabel = ChakraRadioGroup.Label;
