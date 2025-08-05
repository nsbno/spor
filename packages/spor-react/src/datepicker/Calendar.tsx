"use client";

import { Box, useSlotRecipe } from "@chakra-ui/react";
import { createCalendar } from "@internationalized/date";
import {
  CalendarProps as ReactAriaCalendarProps,
  DateValue,
  useCalendar,
} from "react-aria";
import { useCalendarState } from "react-stately";

import { createTexts, useTranslation } from "../i18n";
import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarVariants } from "./types";
import { useCurrentLocale } from "./utils";

type CalendarProps = ReactAriaCalendarProps<DateValue> &
  CalendarVariants & {
    showYearNavigation?: boolean;
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

  const recipe = useSlotRecipe({
    key: "datePicker",
  });
  const styles = recipe({ variant });
  const { calendarProps } = useCalendar(props, state);
  const calendarAriaLabel = calendarProps["aria-label"];

  const ariaLabel =
    t(texts.calendar) + (calendarAriaLabel ? ` ${calendarAriaLabel}` : "");

  return (
    <Box {...calendarProps} aria-label={ariaLabel} css={styles.box}>
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
