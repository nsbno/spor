import { endOfMonth, getWeeksInMonth } from "@internationalized/date";
import { useCalendarGrid } from "@react-aria/calendar";
import React from "react";
import { AriaCalendarGridProps } from "react-aria";
import { CalendarState, RangeCalendarState } from "react-stately";
import { CalendarCell } from "./CalendarCell";
import { useCurrentLocale } from "./utils";

const weekDays = ["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"];

type CalendarGridProps = AriaCalendarGridProps & {
  state: CalendarState | RangeCalendarState;
  offset?: { months?: number };
};
export function CalendarGrid({ state, offset = {} }: CalendarGridProps) {
  const locale = useCurrentLocale();
  const startDate = state.visibleRange.start.add(offset);
  const endDate = endOfMonth(startDate);
  const { gridProps, headerProps } = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);
  const weeksInMonthRange = new Array(weeksInMonth).fill(0).map((_, i) => i);

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeksInMonthRange.map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
