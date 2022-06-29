import { useMonth, UseMonthProps } from "@datepicker-react/hooks";

export type Day = {
  dayLabel: string;
  date: Date;
};

const isDay = (day: number | Day): day is Day => typeof day !== "number";

/**
 * Checks whether a Date object is valid or not.
 */
export const isValidDateObject = (date?: Date): date is Date =>
  date instanceof Date && !isNaN(date.getTime());

/**
 * Parses a Norwegian style date string into a Date object.
 */
export const parseDateString = (dateString?: string) => {
  if (!dateString) {
    return null;
  }
  if (!isExpectedFormat(dateString)) {
    return null;
  }
  const periodOrSlashOrSpaceRegex = /[\.\/\s]+/g;
  const [day, month, year] = dateString
    .split(periodOrSlashOrSpaceRegex)
    .map(Number);
  console.log(day, month, year);
  const date = new Date(year, month - 1, day);
  return isValidDateObject(date) ? date : null;
};

const isExpectedFormat = (dateString: string) => {
  const expectedFormatRegex = /^\d{1,2}[\.\/\s]+\d{1,2}[\.\/\s]+\d{4}$/;
  return dateString.match(expectedFormatRegex);
};

/** Checks whether a given date object is today or not */
export const isToday = (date?: Date) =>
  date?.toDateString() === new Date().toDateString();

const getWeekdayIndexOfFirst = (
  days: (number | { dayLabel: string; date: Date })[]
) => days.findIndex((day) => isDay(day));

export const usePreviousDays = (
  { year, month, firstDayOfWeek, dayLabelFormat }: UseMonthProps,
  days: (number | { dayLabel: string; date: Date })[]
) => {
  const { days: prevMonth } = useMonth({
    year,
    month: month - 1,
    firstDayOfWeek,
    dayLabelFormat,
  });
  const weekdayOfFirst = getWeekdayIndexOfFirst(days);
  return weekdayOfFirst
    ? prevMonth.filter(isDay).slice(-1 * weekdayOfFirst)
    : [];
};

export const useNextDays = ({
  year,
  month,
  firstDayOfWeek,
  dayLabelFormat,
}: UseMonthProps) => {
  const { days: nextMonth } = useMonth({
    year,
    month: month + 1,
    firstDayOfWeek,
    dayLabelFormat,
  });
  const weekdayOfFirstInNext = getWeekdayIndexOfFirst(nextMonth);
  return nextMonth.filter(isDay).slice(0, 7 - (weekdayOfFirstInNext || 7));
};

export const dayLabelFormat = (date: Date): string => date.getDate().toString();
