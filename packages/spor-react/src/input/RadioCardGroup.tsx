import {
  forwardRef,
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
  Stack,
  StackDirection,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";
import { useRadio, useRadioGroup } from "react-aria";
import { RadioCard } from "../card/RadioCard";

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

export const RadioCardGroup = () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setValue] = React.useState("Option 1");

  const handleValueChange = (nextValue: string) => {
    setValue(nextValue);
  };

  return (
    <RadioGroup onChange={handleValueChange} value={value}>
      <Stack direction="row">
        {options.map((option) => (
          <RadioCard key={option} value={option}>
            {option}
          </RadioCard>
        ))}
      </Stack>
    </RadioGroup>
  );
};
