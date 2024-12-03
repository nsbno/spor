import {   RecipeVariantProps, useRecipe, CheckboxRootProps as ChakraCheckboxProp } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { checkboxRecipe } from "../theme/components";

type CheckboxVariants = RecipeVariantProps<typeof checkboxRecipe>;

export type CheckboxProps = Exclude<ChakraCheckboxProp, "variant"> &
  PropsWithChildren<CheckboxVariants> & {
    children: React.ReactNode;}

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
  ({ colorPalette = "white", children, ...props }, ref) => {
    const recipe = useRecipe({ recipe: checkboxRecipe });
    const styles = recipe({ colorPalette });

    return (
      <Checkbox css={styles} {...props} ref={ref}>
        {children}
      </Checkbox>
    );
  }
) 
