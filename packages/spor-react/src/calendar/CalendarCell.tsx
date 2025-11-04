import { CalendarDate, isSameDay, isSameMonth } from "@internationalized/date";
import { Box, Text } from "@vygruppen/spor-react";
import { useRef } from "react";
import { mergeProps, useCalendarCell, useFocusRing } from "react-aria";

import { useSporCalendar } from "@/calendar/CalendarProvider";

type Props = {
  date: CalendarDate;
  currentMonth: CalendarDate;
};

export function CalendarCell({ date, currentMonth }: Props) {
  const { mode, state } = useSporCalendar();
  const ref = useRef<HTMLDivElement>(null);
  const { cellProps, buttonProps, isSelected, isDisabled, formattedDate } =
    useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);

  const isSelectionStart =
    mode === "range" && state.highlightedRange?.start
      ? isSameDay(date, state.highlightedRange.start)
      : isSelected;

  const isSelectionEnd =
    mode === "range" && state.highlightedRange?.end
      ? isSameDay(date, state.highlightedRange.end)
      : isSelected;

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <td
      {...cellProps}
      style={{
        position: "relative",
        zIndex: isFocusVisible ? 10 : 0,
      }}
    >
      <Box
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        hidden={isOutsideMonth}
        width={["50px", "70px"]}
        height={["50px", "54px"]}
        padding={0.5}
        opacity={isDisabled ? 0.5 : 1}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="sm"
          css={{
            cursor: "pointer",
            color: isDisabled ? "surface.disabled" : undefined,
            // Selection start/end styling
            ...((isSelectionStart || isSelectionEnd) && {
              backgroundColor: "pine",
              color: "white",
              "&:hover": {
                backgroundColor: "pine",
              },
            }),
            // Middle range styling
            ...(isSelected &&
              !(isSelectionStart || isSelectionEnd) && {
                backgroundColor: "seaMist",
                color: "black",
                "&:hover": {
                  backgroundColor: "seaMist",
                },
              }),
            // Non-selected hover state
            ...(!isSelected &&
              !isDisabled && {
                "&:hover": {
                  backgroundColor: "seaMist",
                  color: "black",
                },
              }),
          }}
        >
          <Text variant="sm">{formattedDate}</Text>
        </Box>
      </Box>
    </td>
  );
}
