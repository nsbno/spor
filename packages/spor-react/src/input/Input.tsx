import {
  Box,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  type RecipeVariantProps,
} from "@chakra-ui/react";
import React, { forwardRef, useId, PropsWithChildren } from "react";
import inputSlotRecipe from "../theme/components/input";
import { Field } from "./Field";
import { InputGroup } from "./InputGroup";

type inputVariantProps = RecipeVariantProps<typeof inputSlotRecipe>;

export type InputProps = Omit<ChakraInputProps, "size"> &
  PropsWithChildren<inputVariantProps> & {
    /** The input's label */
    label: string;
    /** Icon that shows up to the left */
    leftIcon?: React.ReactNode;
    /** Icon that shows up to the right */
    rightIcon?: React.ReactNode;
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
 * <Input label="E-mail" leftIcon={<EmailOutline24Icon />} />
 * ```
 *
 * Input has two variants base, and floating.
 *
 * ```tsx
 * <Input label="E-mail" leftIcon={<EmailOutline24Icon />} variant="floating" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const fallbackId = `input-${useId()}`;
  const inputId = props.id ?? props?.id ?? fallbackId;
  const labelId = `${useId()}-label`;
  return (
    <Box position="relative" display="flex" flexDirection="row" gap={2}>
      <Field label={props.label}>
        <InputGroup
          flex={1}
          endElement={props.rightIcon && props.rightIcon}
          startElement={props.leftIcon && props.leftIcon}
        >
          <ChakraInput
            data-attachable
            paddingLeft={props.leftIcon ? 7 : undefined}
            paddingRight={props.rightIcon ? 7 : undefined}
            {...props}
            id={inputId}
            aria-labelledby={labelId}
            ref={ref}
            overflow="hidden"
            placeholder=" " // This is needed to make the label work as expected
          />
        </InputGroup>
      </Field>
    </Box>
  );
});
