import { endOfMonth, getWeeksInMonth } from "@internationalized/date";
import { useCalendarGrid } from "@react-aria/calendar";
import { Language, useTranslation } from "@vygruppen/spor-i18n-react";
import { Text } from "@vygruppen/spor-typography-react";
import React from "react";
import { AriaCalendarGridProps } from "react-aria";
import { CalendarState, RangeCalendarState } from "react-stately";
import { CalendarCell } from "./CalendarCell";
import { useCurrentLocale } from "./utils";

const weekDays: Record<Language, string[]> = {
  nb: ["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
  nn: ["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
  sv: ["Må", "Ti", "On", "To", "Fr", "Lö", "Sö"],
  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
};

type CalendarGridProps = AriaCalendarGridProps & {
  state: CalendarState | RangeCalendarState;
  offset?: { months?: number };
};
export function CalendarGrid({ state, offset = {} }: CalendarGridProps) {
  const { language } = useTranslation();
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
          {weekDays[language].map((day, index) => (
            <Text
              as="th"
              key={index}
              color={index < 5 ? "darkGrey" : "greenHaze"}
              variant="sm"
            >
              {day}
            </Text>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeksInMonthRange.map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, dayIndex) =>
                date ? (
                  <CalendarCell
                    key={dayIndex}
                    state={state}
                    date={date}
                    currentMonth={startDate}
                  />
                ) : (
                  <td key={dayIndex} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
