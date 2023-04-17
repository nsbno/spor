import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import {
  CalendarDate,
  DateValue,
  isSameMonth,
  isToday,
} from "@internationalized/date";
import React, { useRef } from "react";
import { useCalendarCell } from "react-aria";
import { CalendarState, RangeCalendarState } from "react-stately";

type CalendarCellProps = {
  state: CalendarState | RangeCalendarState;
  date: CalendarDate;
  currentMonth: DateValue;
};
export function CalendarCell({ state, date, currentMonth }: CalendarCellProps) {
  const ref = useRef(null);
  const { cellProps, buttonProps, isSelected, isDisabled, isUnavailable } =
    useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);
  const styles = useMultiStyleConfig("Datepicker", {});

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
        width="100%"
      >
        {date.day}
      </Box>
    </Box>
  );
}
