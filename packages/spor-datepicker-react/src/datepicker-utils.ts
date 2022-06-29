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

  const { day, month, year } = splitInputIntoDateParts(dateString);
  const date = new Date(year, month - 1, day);

  return isValidDateObject(date) ? date : null;
};

const splitInputIntoDateParts = (input: string) => {
  const validSeparatorRegex = /[\.\/\s]+/g;
  const [dayString, monthString, yearString] = input.split(validSeparatorRegex);
  return {
    day: Number(dayString),
    month: getMonthFromInput(monthString),
    year: getYearOrFallback(yearString),
  };
};

const isExpectedFormat = (dateString: string) => {
  const expectedFormatRegex =
    /^\d{1,2}[\.\/\s]+(\d{1,2}|\w{4,})([\.\/\s]+\d{4}){0,1}$/;
  return dateString.match(expectedFormatRegex);
};

const getMonthFromInput = (input: string) => {
  const normalizedInput = input.toLowerCase();
  return monthMap[normalizedInput] ?? Number(normalizedInput);
};

const getYearOrFallback = (input: string) => {
  const inputAsNumber = Number(input);
  if (Number.isNaN(inputAsNumber)) {
    return new Date().getFullYear();
  }
  return inputAsNumber;
};

const monthMap: Record<string, number> = {
  januar: 1,
  januari: 1,
  january: 1,
  februar: 2,
  februari: 2,
  february: 2,
  mars: 3,
  march: 3,
  april: 4,
  mai: 5,
  maj: 5,
  may: 5,
  juni: 6,
  june: 6,
  juli: 7,
  july: 7,
  august: 8,
  augusti: 8,
  september: 9,
  oktober: 10,
  october: 10,
  november: 11,
  desember: 12,
  december: 12,
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
