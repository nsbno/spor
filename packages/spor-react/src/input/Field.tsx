"use client";

import {
  Field as ChakraField,
  RecipeVariantProps,
  useSlotRecipe,
} from "@chakra-ui/react";
import * as React from "react";
import { fieldSlotRecipe } from "../theme/slot-recipes/field";

type FieldVariantProps = RecipeVariantProps<typeof fieldSlotRecipe>;

export type FieldProps = Omit<ChakraField.RootProps, "label"> &
  React.PropsWithChildren<FieldVariantProps> & {
    /** Label for the component */
    label?: React.ReactNode;
    /** Add helpertext underneath the input */
    helperText?: React.ReactNode;
    /** Add error text underneath the input */
    errorText?: React.ReactNode;
  };

/**
 *
 * Field is a component that wraps around other input components, like `Input` and `Select`.
 *
 * It can have a label, helper text, and error text.
 *
 * ```tsx
 *
 * <Field label="E-mail">
 *  <Input />
 * </Field>
 *
 * ```
 *
 * This component is not exported and should be used as a wrapper for other input components.
 */

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (props, ref) => {
    const { label, children, helperText, errorText, ...rest } = props;
    const recipe = useSlotRecipe({ key: "field" });
    const styles = recipe({ label, helperText, errorText });
    return (
      <ChakraField.Root ref={ref} {...rest} css={styles.root}>
        {children}
        {helperText && (
          <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
        )}
        {label && (
          <ChakraField.Label css={styles.label}>{label}</ChakraField.Label>
        )}
        {errorText && (
          <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
        )}
      </ChakraField.Root>
    );
  },
);

export const FieldErrorText = React.forwardRef<
  HTMLDivElement,
  ChakraField.ErrorTextProps
>((props, ref) => {
  return (
    <ChakraField.ErrorText ref={ref}>{props.children}</ChakraField.ErrorText>
  );
});

export const FieldLabel = ChakraField.Label;
