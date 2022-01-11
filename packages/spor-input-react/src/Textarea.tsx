import {
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import React from "react";
import { useBoxShadowColors } from "./useBoxShadowColors";

export type TextareaProps = ChakraTextareaProps & { label: string };
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
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...props }, ref) => {
    const boxShadows = useBoxShadowColors({
      isInvalid: props.isInvalid,
      isDisabled: props.isDisabled,
    });
    return (
      <>
        <FormLabel>{label}</FormLabel>
        <ChakraTextarea
          {...props}
          ref={ref}
          boxShadow={boxShadows.default}
          _hover={{ boxShadow: boxShadows.hover }}
          _focusWithin={{ boxShadow: boxShadows.focus }}
        />
      </>
    );
  }
);
