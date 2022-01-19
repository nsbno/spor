import {
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";

export type InputProps = Exclude<ChakraInputProps, "variant" | "size"> & {
  label: string;
};
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
export const Input = forwardRef<InputProps, "input">(
  ({ label, ...props }, ref) => {
    return (
      <>
        <ChakraInput
          {...props}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
        />
        <FormLabel>{label}</FormLabel>
      </>
    );
  }
);
