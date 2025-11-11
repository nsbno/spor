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
      : false;

  const isSelectionEnd =
    mode === "range" && state.highlightedRange?.end
      ? isSameDay(date, state.highlightedRange.end)
      : false;

  const isSingleModeSelected = mode !== "range" && isSelected;

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
        width={["54px", null, "70px"]}
        height={["48px", null, "60px"]}
        padding={0.5}
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
            color: isDisabled ? "text.disabled" : undefined,
            // Single mode: Selected styling
            ...(isSingleModeSelected && {
              backgroundColor: "brand.surface",
              color: "text.inverted",
            }),
            // Range mode: Selection start/end styling
            ...((isSelectionStart || isSelectionEnd) && {
              backgroundColor: "brand.surface",
              color: "text.inverted",
            }),
            // Range mode: Middle range styling
            ...(isSelected &&
              !(isSelectionStart || isSelectionEnd) &&
              mode === "range" && {
                backgroundColor: "surface.secondary",
                color: "text",
              }),
            // Non-selected hover state
            ...(!isSelected &&
              !isDisabled && {
                "&:hover": {
                  backgroundColor: "surface.secondary",
                  color: "text",
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
