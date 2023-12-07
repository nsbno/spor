import { Box, Flex } from "@chakra-ui/react";
import { CalendarDateTime, Time } from "@internationalized/date";
import React, { useRef } from "react";
import { AriaTimeFieldProps, useTimeField } from "react-aria";
import { TimeFieldState } from "@react-stately/datepicker";
import { FormLabel } from "..";
import { DateTimeSegment } from "./DateTimeSegment";
import { getTimestampFromTime } from "./utils";

type TimeFieldProps = AriaTimeFieldProps<Time> & {
  state: TimeFieldState;
  label: string;
  name?: string;
};
/** A time field component.
 *
 * This component lets the user choose a time based on regular user input.
 * It shouldn't be used directly, but is used by the TimePicker component.
 */
export const TimeField = ({ state, ...props }: TimeFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { labelProps, fieldProps } = useTimeField(props, state, ref);

  return (
    <Box>
      <FormLabel
        {...labelProps}
        htmlFor={fieldProps.id}
        marginBottom={0}
        fontSize="mobile.xs"
        cursor="text"
        position="absolute"
        paddingTop="2px"
      >
        {props.label}
      </FormLabel>
      <Flex {...fieldProps} ref={ref} paddingTop="3" paddingBottom="0.5">
        {state.segments.map((segment) => (
          <DateTimeSegment key={segment.type} segment={segment} state={state} />
        ))}
      </Flex>
      <input
        type="hidden"
        value={getTimestampFromTime(state.value as CalendarDateTime | null)}
        name={props.name}
      />
    </Box>
  );
};
