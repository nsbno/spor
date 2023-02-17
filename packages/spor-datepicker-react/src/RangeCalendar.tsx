import { Box } from "@chakra-ui/react";
import { createCalendar, DateValue } from "@internationalized/date";
import { useRangeCalendar } from "@react-aria/calendar";
import { useRangeCalendarState } from "@react-stately/calendar";
import React, { useRef } from "react";
import { RangeCalendarProps as ReactAriaRangeCalendarProps } from "react-aria";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { useCurrentLocale } from "./utils";

type RangeCalendarProps = ReactAriaRangeCalendarProps<DateValue>;
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
        <CalendarGrid state={state} />
        <CalendarGrid state={state} offset={{ months: 1 }} />
      </Box>
    </Box>
  );
}
