"use client";
import { Box, useSlotRecipe } from "@chakra-ui/react";
import { createCalendar,DateValue } from "@internationalized/date";
import React, { useRef } from "react";
import {
  RangeCalendarProps as ReactAriaRangeCalendarProps,
  useRangeCalendar,
} from "react-aria";
import { useRangeCalendarState } from "react-stately";

import { datePickerSlotRecipe } from "@/theme/slot-recipes/datepicker";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarVariants } from "./types";
import { useCurrentLocale } from "./utils";

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
  const recipe = useSlotRecipe({
    key: "datePicker",
    recipe: datePickerSlotRecipe,
  });
  const styles = recipe({});
  const ref = useRef(null);
  const { calendarProps, title } = useRangeCalendar(props, state, ref);

  return (
    <Box {...calendarProps} ref={ref} css={styles.rangeCalendarPopover}>
      <CalendarHeader state={state} title={title} />
      <Box display="flex" gap="8" maxWidth="100vw" overflow="scroll">
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
