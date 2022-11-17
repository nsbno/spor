import {
  forwardRef,
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
  Stack,
  StackDirection,
} from "@chakra-ui/react";
import React from "react";

export type RadioGroupProps = Exclude<
  ChakraRadioGroupProps,
  "colorScheme" | "size" | "variant"
> & {
  direction?: StackDirection;
};
/**
 * Radio groups are used to group several radio buttons together.
 *
 * You can pass the common `name` prop to the `RadioGroup`, instead of to each `Radio` component.
 *
 * ```tsx
 * <RadioGroup name="ticket">
 *   <Radio>Economy</Radio>
 *   <Radio>Business</Radio>
 *   <Radio>First Class</Radio>
 * </RadioGroup>
 * ```
 *
 * By default, radio buttons show up horizontally. If you want them to show up vertically, please specify the `direction="column"` prop.
 *
 * ```tsx
 * <RadioGroup name="ticket" direction="column">
 *   <Radio>Economy</Radio>
 *   <Radio>Business</Radio>
 *   <Radio>First Class</Radio>
 * </RadioGroup>
 * ```
 */
export const RadioGroup = forwardRef<RadioGroupProps, "div">(
  ({ children, direction = "row", ...rest }, ref) => {
    return (
      <ChakraRadioGroup {...rest} ref={ref}>
        <Stack direction={direction}>{children}</Stack>
      </ChakraRadioGroup>
    );
  }
);
