import { Box, ResponsiveValue } from "@chakra-ui/react";
import { DateValue, createCalendar } from "@internationalized/date";
import React, { useRef } from "react";
import {
  RangeCalendarProps as ReactAriaRangeCalendarProps,
  useRangeCalendar,
} from "react-aria";
import { useRangeCalendarState } from "react-stately";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { useCurrentLocale } from "./utils";

type RangeCalendarProps = ReactAriaRangeCalendarProps<DateValue> & {
  variant: ResponsiveValue<"base" | "floating" | "ghost">;
};

export function RangeCalendar(props: RangeCalendarProps) {
  const locale = useCurrentLocale();
  const state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 2 },
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { calendarProps, title } = useRangeCalendar(props, state, ref);

  return (
    <Box {...calendarProps} ref={ref}>
      <CalendarHeader state={state} title={title} />
      <Box display="flex" gap="8">
        <CalendarGrid variant={props.variant} state={state} />
        <CalendarGrid
          variant={props.variant}
          state={state}
          offset={{ months: 1 }}
        />
      </Box>
    </Box>
  );
}
