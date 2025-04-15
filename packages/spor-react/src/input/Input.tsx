"use client";

import { inputRecipe } from "@/theme/recipes/input";
import {
  chakra,
  InputProps as ChakraInputProps,
  useRecipe,
  type RecipeVariantProps,
  Input as ChakraInput,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { Field, FieldProps } from "./Field";
import { InputGroup } from "./InputGroup";

export type InputProps = Exclude<
  ChakraInputProps,
  "size" | "label" | "colorPalette"
> &
  FieldProps & {
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

const StyledInput = chakra(ChakraInput, inputRecipe);

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      startElement,
      endElement,
      label,
      invalid,
      helperText,
      errorText,
      ...props
    },
    ref,
  ) => {
    return (
      <Field invalid={invalid} helperText={helperText} errorText={errorText}>
        <InputGroup
          endElement={endElement && endElement}
          startElement={startElement && startElement}
          width="100%"
          position="relative"
          label={label}
        >
          <StyledInput
            data-attachable
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
  },
);
