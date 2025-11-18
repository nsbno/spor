import { DateValue } from "@internationalized/date";

import { CalendarValue } from "@/calendar/CalendarContext";

export const capitalizeFirstLetter = (str: string) =>
  str.replace(/^./, (c) => c.toUpperCase());

export function getSafeRangeValue(val: CalendarValue | undefined) {
  if (!val) return null;
  const [start, end] = val;
  const startDv = start as DateValue;
  const endDv = end as DateValue;
  if (startDv && endDv) return { start: startDv, end: endDv };
  if (startDv && !endDv) return { start: startDv, end: startDv };
  return null;
}
