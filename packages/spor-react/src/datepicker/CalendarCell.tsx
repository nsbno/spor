"use client";

import { Box, useSlotRecipe } from "@chakra-ui/react";
import {
  CalendarDate,
  DateValue,
  isSameMonth,
  isToday,
} from "@internationalized/date";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { useCalendarCell } from "react-aria";
import { CalendarState, RangeCalendarState } from "react-stately";

import { datePickerSlotRecipe } from "../theme/slot-recipes/datepicker";
import { DatePickerVariantProps } from "./DatePicker";
import { CalendarVariants } from "./types";

type CalendarCellProps = PropsWithChildren<DatePickerVariantProps> &
  CalendarVariants & {
    state: CalendarState | RangeCalendarState;
    date: CalendarDate;
    currentMonth: DateValue;
  };
export function CalendarCell({
  state,
  date,
  currentMonth,
  variant,
}: CalendarCellProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isDisabled,
    isUnavailable,
    isOutsideVisibleRange,
  } = useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const recipe = useSlotRecipe({
    key: "datePicker",
    recipe: datePickerSlotRecipe,
  });
  const styles = recipe({ variant });

  const stateProps: Record<string, unknown> = {};
  if (isSelected) {
    stateProps["data-selected"] = true;
  }
  if (isDisabled || isUnavailable) {
    stateProps["data-disabled"] = true;
  }
  if (isToday(date, "Europe/Oslo")) {
    stateProps["data-today"] = true;
  }
  if (isOutsideMonth) {
    stateProps["data-unavailable"] = true;
  }

  /* 
  Workaround to fix click througs on mobile devices
  Related to https://github.com/adobe/react-spectrum/issues/4970
  TODO: Follow up with react-spectrum to see if they can solve it on their end
  */
  useEffect(() => {
    ref.current?.addEventListener(
      "touchend",
      (event: TouchEvent) => {
        event.preventDefault();
      },
      { passive: false, once: true },
    );
  }, []);

  return (
    <Box as="td" {...cellProps} textAlign="center" css={styles.cell}>
      <Box
        as="button"
        {...buttonProps}
        {...stateProps}
        ref={ref}
        css={styles.dateCell}
        hidden={isOutsideVisibleRange}
      >
        {date.day}
      </Box>
    </Box>
  );
}
