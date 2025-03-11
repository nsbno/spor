"use client";

import { inputRecipe } from "@/theme/recipes/input";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useRecipe,
  type RecipeVariantProps,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { Field, FieldProps } from "./Field";
import { InputGroup } from "./InputGroup";

export type InputVariantProps = RecipeVariantProps<typeof inputRecipe>;

export type InputProps = Exclude<
  ChakraInputProps,
  "size" | "label" | "colorPalette"
> &
  FieldProps &
  PropsWithChildren<InputVariantProps> & {
    /** The input's label */
    label: string;
    /** Element that shows up to the left */
    startElement?: React.ReactNode;
    /** Element that shows up to the right */
    endElement?: React.ReactNode;
  };
/**
 * Inputs let you enter text or other data.
 *
 * You need to specify the label as a prop, since it doubles as the placeholder.
 *
 * ```tsx
 * <Input label="E-mail" />
 * ```
 *
 * You can also add icons to the left and right of the input. Please use the 24 px icons for this.
 *
 * ```tsx
 * <Input label="E-mail" startElement={<EmailOutline24Icon />} />
 * ```
 *
 * Input has two variants core, and floating.
 *
 * ```tsx
 * <Input label="E-mail" startElement={<EmailOutline24Icon />} variant="floating" />
 * ```
 *
 * Field is added to Input, so you can add helperText, errorText, and optionalText.
 *
 * ```tsx
 * <Input label="E-mail" startElement={<EmailOutline24Icon />} helperText="We will never share your email." />
 * ```
 *
 * @see https://spor.vy.no/components/input
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant = "core",
    startElement,
    endElement,
    label,
    ...fieldProps
  } = props;

  const recipe = useRecipe({ key: "input" });
  const styles = recipe({ variant });
  return (
    <Field {...fieldProps}>
      <InputGroup
        endElement={endElement && endElement}
        startElement={startElement && startElement}
        width="100%"
        position="relative"
        label={label}
      >
        <ChakraInput
          data-attachable
          css={styles}
          ref={ref}
          className="peer"
          overflow="hidden"
          paddingLeft={startElement ? "2.6rem" : undefined}
          paddingRight={endElement ? "2.6rem" : undefined}
          placeholder=""
          {...props}
        />
      </InputGroup>
    </Field>
  );
});
