import {
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";
import { useBoxShadowColors } from "./useBoxShadowColors";

export type InputProps = ChakraInputProps & { label: string };
/**
 * Input field that works with the `FormControl` component.
 *
 * Note that it requires you to pass a label.
 *
 * ```tsx
 * <FormControl>
 *   <Input label="E-mail" />
 * </FormControl>
 * ```
 *
 * You can also wrap the component in an `InputGroup` and add addons and elements to each side.
 *
 * ```tsx
 * <FormControl>
 *   <InputGroup>
 *     <Input label="E-mail" />
 *     <InputRightElement>
 *       <IconButton icon={SearchIcon} />
 *     </InputRightElement>
 *   </InputGroup>
 * </FormControl>
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    const boxShadows = useBoxShadowColors({
      isInvalid: props.isInvalid,
      isDisabled: props.isDisabled,
    });
    return (
      <>
        <ChakraInput
          {...props}
          boxShadow={boxShadows.default}
          _hover={{ boxShadow: boxShadows.hover }}
          _focusWithin={{ boxShadow: boxShadows.focus }}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
        />
        <FormLabel>{label}</FormLabel>
      </>
    );
  }
);
