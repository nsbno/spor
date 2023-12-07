import { Box, ResponsiveValue } from "@chakra-ui/react";
import { createCalendar, DateValue } from "@internationalized/date";
import { useCalendarState } from "@react-stately/calendar";
import React from "react";
import {
  CalendarProps as ReactAriaCalendarProps,
  useCalendar,
} from "react-aria";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { useCurrentLocale } from "./utils";
import { createTexts, useTranslation } from "../i18n";

type CalendarProps = ReactAriaCalendarProps<DateValue> & {
  showYearNavigation?: boolean;
  variant: ResponsiveValue<"base" | "floating" | "ghost">;
};
export function Calendar({
  showYearNavigation,
  variant,
  ...props
}: CalendarProps) {
  const { t } = useTranslation();
  const locale = useCurrentLocale();
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const { calendarProps } = useCalendar(props, state);
  const calendarAriaLabel = calendarProps["aria-label"];

  const ariaLabel =
    t(texts.calendar) + (calendarAriaLabel ? ` ${calendarAriaLabel}` : "");

  return (
    <Box {...calendarProps} aria-label={ariaLabel}>
      <CalendarHeader state={state} showYearNavigation={showYearNavigation} />
      <CalendarGrid variant={variant} state={state} />
    </Box>
  );
}

const texts = createTexts({
  calendar: {
    nb: "Kalender",
    nn: "Kalender",
    sv: "Kalender",
    en: "Calendar",
  },
});
