import { DateValue } from "@internationalized/date";

import { CalendarValue } from "@/calendar/CalendarContext";

export const capitalizeFirstLetter = (string_: string) =>
  string_.replace(/^./, (c) => c.toUpperCase());

export function getSafeRangeValue(value: CalendarValue | undefined) {
  if (!value) return null;
  const [start, end] = value;
  const startDv = start as DateValue;
  const endDv = end as DateValue;
  if (startDv && endDv) return { start: startDv, end: endDv };
  if (startDv && !endDv) return { start: startDv, end: startDv };
  return null;
}
