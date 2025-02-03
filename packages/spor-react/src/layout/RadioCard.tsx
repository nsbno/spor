"use client";
import {
  RadioCard as ChakraRadioCard,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { radioCardSlotRecipe } from "../theme/slot-recipes/radio-card";

/**
 * Radio cards are used to present a set of options where only one option can be selected.
 *
 * @example
 * ```tsx
 * <RadioCardGroup defaultValue="economy">
 *   <RadioCardLabel>Choose your class</RadioCardLabel>
 *   <Stack direction="row">
 *      <RadioCard value="economy" label="Economy" />
 *      <RadioCard value="business" label="Business" />
 *      <RadioCard value="first-class" label="First Class" />
 *   </Stack>
 * </RadioCardGroup>
 * ```
 *
 *
 * @see Docs https://spor.vy.no/components/radiocard
 */

/*

TODO:
- make sure you decide variant on group
*/

type RadioCardVariantProps = RecipeVariantProps<typeof radioCardSlotRecipe>;

type RadioCardItemProps = Exclude<
  ChakraRadioCard.ItemProps,
  | "colorPalette"
  | "indicator"
  | "variant"
  | "size"
  | "label"
  | "description"
  | "addon"
  | "icon"
> &
  RadioCardVariantProps & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  };

export const RadioCard = forwardRef<HTMLInputElement, RadioCardItemProps>(
  (props, ref) => {
    const { inputProps, children } = props;

    return (
      <ChakraRadioCard.Item {...props}>
        <ChakraRadioCard.ItemHiddenInput ref={ref} {...inputProps} />
        <ChakraRadioCard.ItemControl>{children}</ChakraRadioCard.ItemControl>
      </ChakraRadioCard.Item>
    );
  },
);

type RadioCardRootProps = RadioCardVariantProps &
  Exclude<ChakraRadioCard.RootProps, "variant"> & {
    children: React.ReactNode;
    /** "core" | "floating" - defaults to core */
    variant?: "core" | "floating";
    gap?: string | number;
    direction?: "row" | "column";
    display?: string;
  };

export const RadioCardGroup = forwardRef<HTMLDivElement, RadioCardRootProps>(
  (props, ref) => {
    const {
      children,
      variant = "core",
      gap = 2,
      direction = "column",
      display = "flex",
      ...rest
    } = props;
    const recipe = useSlotRecipe({ key: "radio-card" });
    const styles = recipe({ variant });

    return (
      <ChakraRadioCard.Root
        ref={ref}
        variant={variant}
        css={styles}
        display={display}
        gap={gap}
        flexDirection={direction}
        {...rest}
      >
        {children}
      </ChakraRadioCard.Root>
    );
  },
);

export const RadioCardLabel = ChakraRadioCard.Label;
