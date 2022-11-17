import {
  As,
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
  forwardRef,
} from "@chakra-ui/react";
import React from "react";

export type RadioProps = Exclude<
  ChakraRadioProps,
  "colorScheme" | "size" | "variant"
>;

/**
 * The humble radio button.
 *
 * Specify the label as `children` and the value as `value`.
 *
 * ```tsx
 * <Radio value="#f00">Red</Radio>
 * ```
 *
 * You typically want to place Radio components in a group with several other Radio components. You can do that with the `RadioGroup` component.
 *
 * ```tsx
 * <RadioGroup name="ticket">
 *   <Radio value="economy">Economy</Radio>
 *   <Radio value="business">Business</Radio>
 *   <Radio value="first-class">First Class</Radio>
 * </RadioGroup>
 */
export const Radio = forwardRef<RadioProps, "input">((props, ref) => {
  return <ChakraRadio {...props} ref={ref} />;
});
