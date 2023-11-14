import {
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
  forwardRef,
  useRadio,
  useRadioGroupContext,
} from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { Card } from "../card";
import { Text } from "../typography";
import { TextProps as ChakraTextProps } from "@chakra-ui/layout/dist/text";
import { Stack } from "../layout";

export type RadioCardProps = Exclude<
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
 *   <RadioCard value="economy">Economy</Radio>
 *   <Radio value="business">Business</Radio>
 *   <Radio value="first-class">First Class</Radio>
 * </RadioGroup>
 */
export const RadioCard = forwardRef<RadioCardProps, "input">((props, ref) => {
  const group = useRadioGroupContext();

  const isChecked =
    group?.value !== null &&
    props.value !== null &&
    group.value === props.value;

  const { getInputProps } = useRadio({
    ...props,
    isChecked,
    name: group.name,
    onChange: group.onChange,
  });

  const input = getInputProps();

  return (
    <Card
      as="label"
      colorScheme={input.checked ? "green" : "white"}
      padding={3}
      cursor="pointer"
    >
      <Stack gap={3}>
        <input {...input} ref={ref} />
        {props.children}
      </Stack>
    </Card>
  );
});

export type RadioCardHeaderProps = Omit<ChakraTextProps, "textStyle"> & {
  /** The size and style of the text.
   *
   * Defaults to "sm" */
  variant?: ChakraTextProps["textStyle"];
};

export const RadioCardHeader = (props: RadioCardHeaderProps) => {
  return <Text {...props} />;
};
