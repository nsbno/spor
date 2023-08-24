import { CalendarDateTime, parseTime } from "@internationalized/date";
import { useTranslation } from "..";

/**
 * Returns the currently selected language as a BCF47 language tag.
 * This is useful for passing into the react-aria hooks
 */
export const useCurrentLocale = () => {
  const { language } = useTranslation();
  switch (language) {
    case "nb":
      return "nb-NO";
    case "nn":
      return "nb-NO";
    case "sv":
      return "sv-SE";
    case "en":
      return "en-GB";
    default:
      return "nb-NO";
  }
};

/** Gets the current time as a Time object */
export const getCurrentTime = () => {
  const now = new Date();
  return parseTime(now.toTimeString().split(" ")[0]);
};

/** Gets a readable timestamp from a given time object */
export const getTimestampFromTime = (time: CalendarDateTime | null) => {
  return `${time?.hour ?? 0}:${time?.minute ?? 0}`;
};
