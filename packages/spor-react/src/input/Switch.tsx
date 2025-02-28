"use client";
import {
  RecipeVariantProps,
  Switch as ChakraSwitch,
  ConditionalValue,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { switchSlotRecipe } from "../theme/slot-recipes/switch";
import { Field } from "./Field";

type SwitchVariants = RecipeVariantProps<typeof switchSlotRecipe>;

export type SwitchProps = Exclude<
  ChakraSwitch.RootProps,
  "size" | "colorPalette"
> &
  PropsWithChildren<SwitchVariants> & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    rootRef?: React.Ref<HTMLLabelElement>;
    trackLabel?: { on: React.ReactNode; off: React.ReactNode };
    thumbLabel?: { on: React.ReactNode; off: React.ReactNode };
    size?: ConditionalValue<"sm" | "md" | "lg">;
    label?: React.ReactNode;
  };

//Fix documentation when component is done!!

/**
 * A switch lets you toggle between on and off, yes and no. It's an alternative to a checkbox.
 *
 * You can use a Switch component inside of a `FormControl` with an associated `FormLabel`:
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Enable alerts?</FormLabel>
 *   <Switch />
 * </FormControl>
 * ```
 *
 * Switches are available in three different sizes - `sm`, `md` and `lg`.
 *
 * ```tsx
 * <FormControl>
 *   <FormLabel>Enable alerts?</FormLabel>
 *   <Switch size="sm" />
 * </FormControl>
 * ```
 */

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      inputProps,
      children,
      rootRef,
      trackLabel,
      thumbLabel,
      size = "md",
      label,
      ...rest
    } = props;

    const recipe = useSlotRecipe({ key: "switch" });
    const styles = recipe({ size });

    return (
      <Field>
        <ChakraSwitch.Root ref={rootRef} {...rest} css={styles.root}>
          <ChakraSwitch.Label css={styles.label}>{label}</ChakraSwitch.Label>

          <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
          <ChakraSwitch.Control css={styles.control}>
            <ChakraSwitch.Thumb>
              {thumbLabel && (
                <ChakraSwitch.ThumbIndicator fallback={thumbLabel?.off}>
                  {thumbLabel?.on}
                </ChakraSwitch.ThumbIndicator>
              )}
            </ChakraSwitch.Thumb>
            {trackLabel && (
              <ChakraSwitch.Indicator fallback={trackLabel.off}>
                {trackLabel.on}
              </ChakraSwitch.Indicator>
            )}
          </ChakraSwitch.Control>
        </ChakraSwitch.Root>
      </Field>
    );
  },
);
