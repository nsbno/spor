"use client";
import { Box } from "@chakra-ui/react";
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
import { CalendarVariants } from "./types";

type RangeCalendarProps = ReactAriaRangeCalendarProps<DateValue> &
  CalendarVariants;

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
    <Box {...calendarProps} ref={ref} width="600px">
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
