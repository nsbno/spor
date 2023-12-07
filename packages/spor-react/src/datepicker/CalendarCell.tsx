import { Box, ResponsiveValue, useMultiStyleConfig } from "@chakra-ui/react";
import {
  CalendarDate,
  DateValue,
  isSameMonth,
  isToday,
} from "@internationalized/date";
import React, { useEffect, useRef } from "react";
import { useCalendarCell } from "react-aria";
import { CalendarState, RangeCalendarState } from "react-stately";

type CalendarCellProps = {
  variant: ResponsiveValue<"base" | "floating" | "ghost">;
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
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isDisabled,
    isUnavailable,
    isOutsideVisibleRange,
  } = useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const styles = useMultiStyleConfig("Datepicker", { variant });

  const stateProps: Record<string, any> = {};
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
    (ref as any)?.current?.addEventListener(
      "touchend",
      (event: TouchEvent) => {
        event.preventDefault();
      },
      { passive: false, once: true },
    );
  }, []);

  return (
    <Box
      as="td"
      {...cellProps}
      textAlign="center"
      sx={{
        '&[aria-selected="true"] + [aria-selected="true"] > button': {
          "&::before": {
            content: '""',
            display: "block",
            width: "100%",
            height: "100%",
            backgroundColor: "darkTeal",
            position: "absolute",
            left: "-50%",
            top: 0,
            bottom: 0,
            zIndex: -1,
          },
        },
      }}
    >
      <Box
        as="button"
        type="button"
        {...buttonProps}
        {...stateProps}
        ref={ref}
        sx={styles.dateCell}
        hidden={isOutsideVisibleRange}
        width="100%"
      >
        {date.day}
      </Box>
    </Box>
  );
}
