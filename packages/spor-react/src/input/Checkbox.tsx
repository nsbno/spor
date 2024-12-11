"use client";
import {
  RecipeVariantProps,
  useRecipe,
  CheckboxRootProps as ChakraCheckboxProp,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { checkboxSlotRecipe } from "../theme/slot-recipes/checkbox";

type CheckboxVariants = RecipeVariantProps<typeof checkboxSlotRecipe>;

export type CheckboxProps = Exclude<
  ChakraCheckboxProp,
  "variant" | "colorPalette"
> &
  PropsWithChildren<CheckboxVariants> & {
    children: React.ReactNode;
  };

/**
 * Creates a checkbox.
 *
 * The checkbox contains its own label, which is passed as a children prop:
 *
 * ```tsx
 * <Checkbox>Accept the terms</Checkbox>
 * ```
 *
 * Unlike regular inputs, it doesn't require its own `FormControl`.
 *
 * You can group several of these together with a `CheckboxGroup`.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...props }, ref) => {
    const recipe = useRecipe({ recipe: checkboxSlotRecipe });
    const styles = recipe({});

    return (
      <Checkbox css={styles} {...props} ref={ref}>
        {children}
      </Checkbox>
    );
  },
);
