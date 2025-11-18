import {
  CalendarDate,
  DateDuration,
  endOfMonth,
  getWeeksInMonth,
  toCalendarDate,
} from "@internationalized/date";
import { useCalendarGrid } from "react-aria";

import { CalendarCell } from "@/calendar/CalendarCell";
import { useCalendar } from "@/calendar/CalendarContext";
import { useCurrentLocale } from "@/datepicker/utils";
import { Language, useTranslation } from "@/i18n";
import { Text } from "@/typography";

const weekDays: Record<Language, string[]> = {
  nb: ["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
  nn: ["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
  sv: ["Må", "Ti", "On", "To", "Fr", "Lö", "Sö"],
  en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
};

type Props = {
  offset?: DateDuration;
};

export function CalendarGrid({ offset = {} }: Props) {
  const { state } = useCalendar();
  const { language } = useTranslation();
  const locale = useCurrentLocale();
  const startDate = state.visibleRange.start.add(offset);
  const endDate = toCalendarDate(endOfMonth(startDate));
  const { gridProps, headerProps } = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state,
  );

  const weeksInMonth = getWeeksInMonth(startDate, locale);

  return (
    <table {...gridProps} cellPadding="0">
      <thead {...headerProps}>
        <tr>
          {weekDays[language].map((day, index) => (
            <th key={index}>
              <Text
                as="div"
                role="columnheader"
                key={index}
                display="flex"
                maxWidth="82px"
                justifyContent="center"
                alignItems="center"
                flex="1 0 0"
                alignSelf="stretch"
                variant="sm"
                paddingBottom={1.5}
                paddingTop={0.5}
                textAlign="center"
                fontWeight="bold"
              >
                {day}
              </Text>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {Array.from({ length: weeksInMonth }, (_, weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date: CalendarDate | null, i: number) =>
                date ? (
                  <CalendarCell key={i} date={date} currentMonth={startDate} />
                ) : (
                  <td key={i} />
                ),
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
