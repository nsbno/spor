"use client";

import {
  Field as ChakraField,
  RecipeVariantProps,
  Stack,
  useSlotRecipe,
} from "@chakra-ui/react";
import * as React from "react";

import { Text } from "@/typography";

import { fieldSlotRecipe } from "../theme/slot-recipes/field";
import { FloatingLabel } from "./FloatingLabel";
import { Label } from "./Label";

type FieldVariantProps = RecipeVariantProps<typeof fieldSlotRecipe>;

/**
 * Renders a label with a required indicator, handling both direct labels and child labels
 */
function renderLabelWithIndicator(
  label: React.ReactNode,
  labelAsChild?: boolean,
): React.ReactNode {
  if (!labelAsChild || !React.isValidElement(label)) {
    return (
      <>
        {label}
        <ChakraField.RequiredIndicator />
      </>
    );
  }

  return React.cloneElement(label, {
    children: (
      <>
        {label.props.children}
        <ChakraField.RequiredIndicator />
      </>
    ),
  });
}

export type FieldBaseProps = {
  direction?: "row" | "column";
  disabled?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  required?: boolean;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  floatingLabel?: boolean;
  shouldFloat?: boolean;
  labelAsChild?: boolean;
};

export type FieldProps = Omit<
  ChakraField.RootProps,
  "label" | "onChange" | "onBlur"
> &
  React.PropsWithChildren<FieldVariantProps> &
  FieldBaseProps;

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
    const {
      label,
      children,
      helperText,
      errorText,
      floatingLabel = false,
      disabled,
      invalid,
      readOnly,
      required,
      direction,
      id,
      shouldFloat,
      labelAsChild,
      ...rest
    } = props;
    const recipe = useSlotRecipe({ key: "field" });
    const styles = recipe();

    return (
      <Stack gap="2" ref={ref} width="100%" {...rest}>
        <ChakraField.Root
          disabled={disabled}
          invalid={invalid}
          readOnly={readOnly}
          required={required}
          css={styles.root}
          direction={direction}
          id={id}
        >
          {label && !floatingLabel && (
            <Label asChild={labelAsChild} aria-hidden>
              {renderLabelWithIndicator(label, labelAsChild)}
            </Label>
          )}

          {children}

          {label && floatingLabel && (
            <FloatingLabel
              data-float={shouldFloat ? true : undefined}
              asChild={labelAsChild}
              aria-hidden
            >
              {renderLabelWithIndicator(label, labelAsChild)}
            </FloatingLabel>
          )}
          {errorText && (
            <ChakraField.ErrorText aria-live="polite">
              {errorText}
            </ChakraField.ErrorText>
          )}
        </ChakraField.Root>
        {helperText && (
          <Text variant="sm" color="text.tertiary">
            {helperText}
          </Text>
        )}
      </Stack>
    );
  },
);
Field.displayName = "Field";

export const FieldErrorText = React.forwardRef<
  HTMLDivElement,
  ChakraField.ErrorTextProps
>((props, ref) => {
  return (
    <ChakraField.ErrorText ref={ref}>{props.children}</ChakraField.ErrorText>
  );
});
FieldErrorText.displayName = "FieldErrorText";

export const FieldLabel = ChakraField.Label;
