"use client";
import {
  RadioCard as ChakraRadioCard,
  RecipeVariantProps,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { radioCardSlotRecipe } from "../theme/slot-recipes/radio-card";

/**
 * Radio cards are used to present a set of options where only one option can be selected.
 *
 * @example
 * ```tsx
 * <RadioCardRoot defaultValue="economy">
 *   <RadioCardLabel>Choose your class</RadioCardLabel>
 *   <Stack align="stretch">
 *      <RadioCardItem value="economy" label="Economy" />
 *      <RadioCardItem value="business" label="Business" />
 *      <RadioCardItem value="first-class" label="First Class" />
 *   </Stack>
 * </RadioCardRoot>
 * ```
 *
 *
 * @see Docs https://spor.vy.no/components/radiocard
 */

type RadioCardVariantProps = RecipeVariantProps<typeof radioCardSlotRecipe>;

type RadioCardItemProps = Exclude<
  ChakraRadioCard.ItemProps,
  "colorPalette" | "indicator" | "variant" | "size"
> &
  RadioCardVariantProps & {
    icon?: React.ReactElement;
    label?: React.ReactNode;
    description?: React.ReactNode;
    addon?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    variant?: "core" | "floating";
  };

export const RadioCardItem = React.forwardRef<
  HTMLInputElement,
  RadioCardItemProps
>(function RadioCardItem(props, ref) {
  const { inputProps, label, description, addon, icon } = props;

  const hasContent = label || description || icon;

  return (
    <ChakraRadioCard.Item {...props}>
      <ChakraRadioCard.ItemHiddenInput ref={ref} {...inputProps} />
      <ChakraRadioCard.ItemControl>
        {hasContent && (
          <>
            {icon}
            {label && (
              <ChakraRadioCard.ItemText>{label}</ChakraRadioCard.ItemText>
            )}
            {description && (
              <ChakraRadioCard.ItemDescription>
                {description}
              </ChakraRadioCard.ItemDescription>
            )}
          </>
        )}
      </ChakraRadioCard.ItemControl>
      {addon && <ChakraRadioCard.ItemAddon>{addon}</ChakraRadioCard.ItemAddon>}
    </ChakraRadioCard.Item>
  );
});

type RadioCardRootProps = RadioCardVariantProps &
  Exclude<ChakraRadioCard.RootProps, "variant"> & {
    children: React.ReactNode;
    variant?: "core" | "floating";
  };

export const RadioCardRoot = forwardRef<HTMLDivElement, RadioCardRootProps>(
  (props, ref) => {
    const { variant } = props;
    return <ChakraRadioCard.Root ref={ref} {...props} variant={variant} />;
  },
);

export const RadioCardLabel = ChakraRadioCard.Label;
