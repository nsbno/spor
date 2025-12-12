import {
  CalendarDate,
  createCalendar,
  DateDuration,
  toCalendarDate,
} from "@internationalized/date";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import { createContext, useContext, useRef } from "react";
import {
  AriaButtonProps,
  AriaCalendarProps,
  AriaRangeCalendarProps,
  DateValue,
  useCalendar as useAriaCalendar,
  useRangeCalendar as useAriaRangeCalendar,
} from "react-aria";
import {
  CalendarState as StatelyCalendarState,
  RangeCalendarState as StatelyRangeCalendarState,
  useCalendarState as useStatelyCalendarState,
  useRangeCalendarState as useStatelyRangeCalendarState,
} from "react-stately";

import { getSafeRangeValue } from "@/calendar/utils";
import { useCurrentLocale } from "@/datepicker/utils";

export type CalendarValue = [CalendarDate | null, CalendarDate | null];
export type CalendarMode = "single" | "range";
type CalendarState = SingleCalendarState | RangeCalendarState;

type BaseCalendarState = {
  calendarProps: DOMAttributes<FocusableElement>;
  nextButtonProps: AriaButtonProps<"button">;
  prevButtonProps: AriaButtonProps<"button">;
  startValue: CalendarDate | null;
  isSelectingRange: boolean;
  ref: React.RefObject<HTMLDivElement | null>;
};

type SingleCalendarState = BaseCalendarState & {
  mode: "single";
  state: StatelyCalendarState;
  endValue: null;
};

type RangeCalendarState = BaseCalendarState & {
  mode: "range";
  state: StatelyRangeCalendarState;
  endValue: CalendarDate | null;
};

const CalendarContext = createContext<CalendarState | null>(null);

export function useCalendar(): CalendarState {
  const context = useContext(CalendarContext);
  if (!context)
    throw new Error("useCalendar must be used within CalendarProvider");
  return context;
}

type Props = {
  children?: React.ReactNode;
  /**
   * The selection mode of the calendar. Can be "single" or "range".
   */
  mode?: CalendarMode;
  /**
   * The controlled value of the calendar.
   */
  value?: CalendarValue;
  /**
   * The default value of the calendar. Useful if you don't want to control the value.
   */
  defaultValue?: CalendarValue;
  /**
   * Called when the selected date or range changes.
   * @param value The new selected date or date range.
   * @returns [CalendarDate | null, CalendarDate | null]
   */
  onChange?: (value: CalendarValue) => void;
  /**
   * The visible duration of the calendar. This defines how many months are shown at once.
   * Default: { months: 1 }
   * If using Calendar with dualView=true, this should be set to { months: 2 }.
   * If using ScrollCalendar, this should be set to how many months you want to show in total as it doesn't support pagination.
   */
  visibleDuration?: DateDuration;
} & Omit<
  AriaCalendarProps<DateValue> | AriaRangeCalendarProps<DateValue>,
  "onChange" | "defaultValue" | "value"
>;

/**
 * Provides context for calendar components. Must be used as a wrapper around the Calendar.
 */
export function CalendarProvider(props: Props) {
  const locale = useCurrentLocale();
  const ref = useRef<HTMLDivElement>(null);

  const {
    mode = "single",
    onChange,
    value,
    defaultValue,
    visibleDuration = { months: 1 },
    ...calendarProps
  } = props;

  const singleState = useStatelyCalendarState({
    ...(calendarProps as AriaCalendarProps<DateValue>),
    value: value?.[0],
    defaultValue: defaultValue?.[0],
    pageBehavior: "single",
    firstDayOfWeek: "mon",
    visibleDuration,
    onChange: (value) => {
      if (onChange && mode === "single") {
        onChange([value, null]);
      }
    },
    locale,
    createCalendar,
  });

  const {
    calendarProps: singleCalendarProps,
    prevButtonProps: singlePreviousButtonProps,
    nextButtonProps: singleNextButtonProps,
  } = useAriaCalendar(
    calendarProps as AriaCalendarProps<DateValue>,
    singleState,
  );

  const rangeState = useStatelyRangeCalendarState({
    ...(calendarProps as AriaRangeCalendarProps<DateValue>),
    value: value === undefined ? undefined : getSafeRangeValue(value),
    defaultValue:
      defaultValue === undefined ? undefined : getSafeRangeValue(defaultValue),
    pageBehavior: "single",
    firstDayOfWeek: "mon",
    visibleDuration,
    onChange: (value) => {
      if (onChange && mode === "range") {
        onChange([
          value?.start ? toCalendarDate(value.start) : null,
          value?.end ? toCalendarDate(value.end) : null,
        ]);
      }
    },
    locale,
    createCalendar,
  });

  const {
    calendarProps: rangeCalendarProps,
    prevButtonProps: rangePreviousButtonProps,
    nextButtonProps: rangeNextButtonProps,
  } = useAriaRangeCalendar(
    calendarProps as AriaRangeCalendarProps<DateValue>,
    rangeState,
    ref,
  );

  const getRangeStartValue = () => {
    if (rangeState.highlightedRange?.start) {
      return toCalendarDate(rangeState.highlightedRange.start);
    }
    if (rangeState?.value?.start) {
      return toCalendarDate(rangeState.value.start);
    }
    return null;
  };

  const getRangeEndValue = () => {
    if (rangeState.highlightedRange?.end) {
      return toCalendarDate(rangeState.highlightedRange.end);
    }
    if (rangeState?.value?.end) {
      return toCalendarDate(rangeState.value.end);
    }
    return null;
  };

  const state =
    mode === "range"
      ? {
          state: rangeState,
          mode: "range" as const,
          calendarProps: rangeCalendarProps,
          nextButtonProps: rangeNextButtonProps,
          prevButtonProps: rangePreviousButtonProps,
          startValue: getRangeStartValue(),
          endValue: getRangeEndValue(),
          isSelectingRange:
            rangeState.anchorDate !== null && !rangeState.isDragging,
          ref,
        }
      : {
          state: singleState,
          mode: "single" as const,
          calendarProps: singleCalendarProps,
          nextButtonProps: singleNextButtonProps,
          prevButtonProps: singlePreviousButtonProps,
          startValue: singleState.value,
          endValue: null,
          isSelectingRange: false,
          ref,
        };

  return (
    <CalendarContext.Provider value={state}>
      {props.children}
    </CalendarContext.Provider>
  );
}
