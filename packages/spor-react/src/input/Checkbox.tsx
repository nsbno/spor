import {
  Checkbox as ChakraCheckbox,
  RecipeVariantProps,
} from "@chakra-ui/react";
import * as React from "react";
import { PropsWithChildren } from "react";

import { checkboxSlotRecipe } from "@/theme/slot-recipes/checkbox";

type CheckboxVariantProps = RecipeVariantProps<typeof checkboxSlotRecipe>;

type CheckboxProps = ChakraCheckbox.RootProps &
  PropsWithChildren<CheckboxVariantProps> & {
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    rootRef?: React.Ref<HTMLLabelElement>;
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
 * Unlike regular inputs, it doesn't require its own `Field`.
 *
 * You can group several of these together with a `CheckboxGroup`.
 */

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    // Forwardref caues issue with prop types not working. Forwardref is unessessary here, as ChakraCheckbox already has a ref prop and is deprecated in react 19.
    const { children, inputProps, rootRef, ...rest } = props;
    return (
      <ChakraCheckbox.Root ref={rootRef} {...rest}>
        <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} />
        <ChakraCheckbox.Control>
          <ChakraCheckbox.Indicator />
        </ChakraCheckbox.Control>
        {children != null && (
          <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
        )}
      </ChakraCheckbox.Root>
    );
  },
);
Checkbox.displayName = "Checkbox";
