import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  forwardRef,
  useFormControlContext,
} from "@chakra-ui/react";
import React, { useId } from "react";

export type InputProps = Omit<ChakraInputProps, "variant" | "size"> & {
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
  ({ label, leftIcon, rightIcon, id, size, ...props }, ref) => {
    const formControlProps = useFormControlContext();
    const fallbackId = `input-${useId()}`;
    const inputId = id ?? formControlProps?.id ?? fallbackId;
    return (
      <InputGroup position="relative">
        {leftIcon && (
          <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
        )}
        <ChakraInput
          data-attachable
          paddingLeft={leftIcon ? 7 : undefined}
          paddingRight={rightIcon ? 7 : undefined}
          {...props}
          id={inputId}
          aria-labelledby={inputId}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
        />
        <FormLabel htmlFor={inputId}>{label}</FormLabel>
        {rightIcon && (
          <InputRightElement pointerEvents="none">
            {rightIcon}
          </InputRightElement>
        )}
      </InputGroup>
    );
  },
);
