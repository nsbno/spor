"use client";

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useRecipe,
  type RecipeVariantProps,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { inputRecipe } from "../theme/recipes/input";
import { Field, FieldProps } from "./Field";
import { InputGroup } from "./InputGroup";

export type InputVariantProps = RecipeVariantProps<typeof inputRecipe>;

export type InputProps = Exclude<
  ChakraInputProps,
  "size" | "variant" | "colorPalette"
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
 * Input has two variants base, and floating.
 *
 * ```tsx
 * <Input label="E-mail" startElement={<EmailOutline24Icon />} variant="floating" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    variant = "core",
    startElement,
    endElement,
    label,
    errorText,
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
          variant={variant}
          ref={ref}
          className="peer"
          overflow="hidden"
          paddingLeft={startElement ? "2.6rem" : undefined}
          paddingRight={endElement ? "2.6rem" : undefined}
          placeholder=""
        />
        {errorText && (
          <Box position="relative" ref={ref}>
            <ChakraField.ErrorText>
              <Arrow position="absolute" top="-0.25em" left="1em" />
              {errorText}
            </ChakraField.ErrorText>
          </Box>
        )}
      </InputGroup>
    </Field>
  );
});
