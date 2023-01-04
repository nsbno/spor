import { Box, Flex } from "@chakra-ui/react";
import { Time } from "@internationalized/date";
import { FormLabel } from "@vygruppen/spor-input-react";
import React, { useRef } from "react";
import { AriaTimeFieldProps, useTimeField } from "react-aria";
import { DateFieldState } from "react-stately";
import { DateTimeSegment } from "./DateTimeSegment";

type TimeFieldProps = AriaTimeFieldProps<Time> & {
  state: DateFieldState;
  label: string;
  name?: string;
};
/** A time field component.
 *
 * This component lets the user choose a time based on regular user input.
 * It shouldn't be used directly, but is used by the TimePicker component.
 */
export const TimeField = ({ state, label, ...props }: TimeFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { labelProps, fieldProps } = useTimeField(props, state, ref);

  return (
    <Box>
      <FormLabel
        {...labelProps}
        htmlFor={fieldProps.id}
        marginBottom={0}
        fontSize="mobile.xs"
      >
        {label}
      </FormLabel>
      <Flex {...fieldProps} ref={ref}>
        {state.segments.map((segment) => (
          <DateTimeSegment key={segment.type} segment={segment} state={state} />
        ))}
      </Flex>
      <input type="hidden" value={state.value?.toString()} name={props.name} />
    </Box>
  );
};
