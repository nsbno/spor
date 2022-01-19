import {
  FormLabel,
  forwardRef,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import React from "react";

export type TextareaProps = Exclude<ChakraTextareaProps, "variant" | "size"> & {
  label: string;
};
/**
 * Text area that works with the `FormControl` component.
 *
 * Note that it requires you to pass a label.
 *
 * ```tsx
 * <FormControl>
 *   <Textarea label="E-mail" />
 * </FormControl>
 * ```
 */
export const Textarea = forwardRef<TextareaProps, "textarea">(
  ({ label, ...props }, ref) => {
    return (
      <>
        <FormLabel>{label}</FormLabel>
        <ChakraTextarea {...props} ref={ref} />
      </>
    );
  }
);
