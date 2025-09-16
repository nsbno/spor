"use client";
import { Box, Flex } from "@chakra-ui/react";
import { CalendarDateTime, Time } from "@internationalized/date";
import { useRef } from "react";
import { AriaTimeFieldProps, useTimeField } from "react-aria";
import { DateSegment, TimeFieldState } from "react-stately";

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
      <label
        {...labelProps}
        htmlFor={fieldProps.id}
        style={{
          marginBottom: 0,
          fontSize: "mobile.xs",
          top: 0,
          cursor: "text",
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          paddingTop: "2px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "80%",
        }}
      >
        {props.label}
      </label>
      <Flex {...fieldProps} ref={ref} paddingTop="3" paddingBottom="0.5">
        {state.segments.map((segment: DateSegment, index) => (
          <DateTimeSegment key={index} segment={segment} state={state} />
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
