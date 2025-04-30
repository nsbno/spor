"use client";
import { RecipeVariantProps } from "@chakra-ui/react";
import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";

import { radioGroupSlotRecipe } from "../theme/slot-recipes/radio";

type RadioVariants = RecipeVariantProps<typeof radioGroupSlotRecipe>;

export type RadioProps = PropsWithChildren<RadioVariants> &
  ChakraRadioGroup.ItemProps & {
    rootRef?: React.Ref<HTMLDivElement>;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  };

/**
 * The humble radio button.
 *
 * Specify the label as `children` and the value as `value`.
 *
 * Place the Radio components in a group with several other Radio components. You can do that with the `RadioGroup` component.
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

type RadioGroupProps = Omit<
  ChakraRadioGroup.RootProps,
  "colorPalette" | "variant" | "size"
> & {};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (props, ref) => {
    return <ChakraRadioGroup.Root ref={ref} {...props} aria-labelledby="" />;
  },
);
