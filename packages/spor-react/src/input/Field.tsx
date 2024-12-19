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
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorText?: React.ReactNode;
    optionalText?: React.ReactNode;
  };

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  (props, ref) => {
    const { label, children, helperText, errorText, optionalText, ...rest } =
      props;
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
