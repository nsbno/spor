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
    const leftPadding = props.pl || props.paddingLeft;
    return (
      <>
        <ChakraInput
          {...props}
          ref={ref}
          placeholder=" " // This is needed to make the label work as expected
        />
        <FormLabel pl={calculateCorrectLabelPadding(leftPadding)}>
          {label}
        </FormLabel>
      </>
    );
  }
);

/** Does a best effort approach to figure out the correct label padding */
const calculateCorrectLabelPadding = (paddingValue?: any): any => {
  // If no padding is specified, no padding is required
  if (!paddingValue) {
    return 0;
  }

  // If the padding is a number, it's a part of the spacing scale
  const paddingValueAsNumber = Number(paddingValue);
  if (
    typeof paddingValueAsNumber === "number" &&
    !Number.isNaN(paddingValueAsNumber)
  ) {
    return paddingValueAsNumber < 2 ? 2 : Number(paddingValue) - 2;
  }

  // If the padding is a responsive array, calculate each value recursively 😎
  if (Array.isArray(paddingValue)) {
    return paddingValue.flatMap((partValue) =>
      calculateCorrectLabelPadding(partValue)
    );
  }

  // If the padding is a responsive object, calculate each value recursively 😎
  if (typeof paddingValue === "object") {
    return Object.entries(paddingValue).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: calculateCorrectLabelPadding(value),
      }),
      {} as any
    );
  }
  // If the padding contains a number, it's a numeric unit we can use with calc
  if (/\d+/.test(paddingValue.toString())) {
    return `calc(${paddingValue} - 16px)`;
  }

  // If all else fails, just return the padding value
  return paddingValue;
};
