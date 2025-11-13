import { DateValue } from "@internationalized/date";

import { CalendarValue } from "@/calendar/CalendarContext";
import { useTranslation } from "@/i18n";

/**
 * Returns the currently selected language as a BCF47 language tag.
 * This is useful for passing into the react-aria hooks
 */
export const useCurrentLocale = () => {
  const { language } = useTranslation();
  switch (language) {
    case "nb": {
      return "nb-NO";
    }
    case "nn": {
      return "nb-NO";
    }
    case "sv": {
      return "sv-SE";
    }
    case "en": {
      return "en-GB";
    }
    default: {
      return "nb-NO";
    }
  }
};

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
