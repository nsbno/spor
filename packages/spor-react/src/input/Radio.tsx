"use client";
import React, { forwardRef, PropsWithChildren } from "react";
import { RecipeVariantProps, BoxProps } from "@chakra-ui/react";
import { radioSlotRecipe } from "../theme/slot-recipes/radio";
import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";

type RadioVariants = RecipeVariantProps<typeof radioSlotRecipe>;

export type RadioProps = BoxProps &
  PropsWithChildren<RadioVariants> &
  ChakraRadioGroup.ItemProps & {
    children?: React.ReactNode;
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
export const RadioCard = forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
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
  },
);

export const RadioGroup = ChakraRadioGroup.Root;
