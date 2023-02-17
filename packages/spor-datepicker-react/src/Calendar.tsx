import { Box } from "@chakra-ui/react";
import { createCalendar, DateValue } from "@internationalized/date";
import { useCalendar } from "@react-aria/calendar";
import { useCalendarState } from "@react-stately/calendar";
import React from "react";
import { CalendarProps as ReactAriaCalendarProps } from "react-aria";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { useCurrentLocale } from "./utils";

type CalendarProps = ReactAriaCalendarProps<DateValue> & {
  showYearPicker?: boolean;
};
export function Calendar({ showYearPicker, ...props }: CalendarProps) {
  const locale = useCurrentLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const { calendarProps } = useCalendar(props, state);

  return (
    <Box {...calendarProps}>
      <CalendarHeader state={state} showYearPicker={showYearPicker} />
      <CalendarGrid state={state} />
    </Box>
  );
}
