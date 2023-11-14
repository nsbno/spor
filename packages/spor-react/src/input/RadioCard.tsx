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
import { getBoxShadowString } from "../theme/utils/box-shadow-utils";

export type RadioCardProps = Exclude<
  ChakraRadioProps,
  "colorScheme" | "size" | "variant"
>;

/**
 * Radio buttons that look like cards.
 *
 * Specify the label in a `<RadioCardHeader>` and the value as `value`.
 *
 * ```tsx
 * <RadioCard value="#f00"><RadioCardHeader>Red</RadioCardHeader></RadioCard>
 * ```
 *
 * You typically want to place RadioCard components in a group with several other RadioCard components. You can do that with the `RadioGroup` component.
 *
 * ```tsx
 * <RadioGroup name="ticket">
 *   <RadioCard value="economy">
 *     <RadioCardHeader>Economy</RadioCardHeader>
 *   </RadioCard>
 *   <RadioCard value="business">
 *     <RadioCardHeader>Business</RadioCardHeader>
 *   </RadioCard>
 *   <RadioCard value="first-class">
 *     <RadioCardHeader>First Class</RadioCardHeader>
 *   </RadioCard>
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
    name: group?.name,
    onChange: group?.onChange,
  });

  const inputProps = getInputProps();

  return (
    <Card
      as="label"
      colorScheme={inputProps.checked ? "green" : "white"}
      padding={3}
      cursor="pointer"
      _focusWithin={{
        boxShadow: getBoxShadowString({
          borderColor: "greenHaze",
          borderWidth: 2,
        }),
      }}
    >
      <Stack gap={3}>
        <input {...inputProps} ref={ref} />
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
