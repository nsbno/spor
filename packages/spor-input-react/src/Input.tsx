import {
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
  useFormControlContext,
} from "@chakra-ui/react";
import React, { useId } from "react";

export type InputProps = Exclude<ChakraInputProps, "variant" | "size"> & {
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
 */
export const Input = forwardRef<InputProps, "input">(
  ({ label, leftIcon, rightIcon, id, ...props }, ref) => {
    const formControlProps = useFormControlContext();
    const fallbackId = `input-${useId()}`;
    const inputId = id ?? formControlProps?.id ?? fallbackId;
    return (
      <InputGroup position="relative">
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <ChakraInput
          pl={leftIcon ? 7 : undefined}
          pr={rightIcon ? 7 : undefined}
          {...props}
          id={inputId}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
        />
        <FormLabel htmlFor={inputId} pointerEvents="none">
          {label}
        </FormLabel>
        {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
      </InputGroup>
    );
  }
);
