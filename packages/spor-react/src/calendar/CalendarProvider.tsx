import {
  CalendarDate,
  createCalendar,
  DateDuration,
  toCalendarDate,
} from "@internationalized/date";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import { createContext, useContext, useEffect, useRef } from "react";
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

import { useCurrentLocale } from "@/calendar/utils";

export type CalendarValue = [CalendarDate | null, CalendarDate | null];
export type CalendarMode = "single" | "range";

type SingleCalendarState = {
  state: StatelyCalendarState;
  mode: "single";
  calendarProps: DOMAttributes<FocusableElement>;
  nextButtonProps: AriaButtonProps<"button">;
  prevButtonProps: AriaButtonProps<"button">;
  startValue: CalendarDate | null;
  endValue: null;
  ref: React.RefObject<HTMLDivElement>;
};

type RangeCalendarState = {
  state: StatelyRangeCalendarState;
  mode: "range";
  calendarProps: DOMAttributes<FocusableElement>;
  nextButtonProps: AriaButtonProps<"button">;
  prevButtonProps: AriaButtonProps<"button">;
  startValue: CalendarDate | null;
  endValue: CalendarDate | null;
  isSelectingEnd: boolean;
  ref: React.RefObject<HTMLDivElement>;
};

type CalendarState = SingleCalendarState | RangeCalendarState;

const CalendarContext = createContext<CalendarState | null>(null);

export function useSporCalendar(): CalendarState {
  const ctx = useContext(CalendarContext);
  if (!ctx)
    throw new Error("useSporCalendar must be used within SporCalendarProvider");
  return ctx;
}

type Props = {
  children?: React.ReactNode;
  mode?: CalendarMode;
  value?: CalendarValue;
  defaultValue?: CalendarValue;
  onChange?: (value: CalendarValue) => void;
  visibleDuration?: DateDuration;
} & Omit<
  AriaCalendarProps<DateValue> | AriaRangeCalendarProps<DateValue>,
  "onChange" | "defaultValue" | "value"
>;

export function CalendarProvider(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { mode, onChange, value, defaultValue, ...calendarProps } = props;
  const locale = useCurrentLocale();

  function getSafeRangeValue(val: CalendarValue | undefined) {
    if (!val) return;
    const [start, end] = val;
    if (start && end) {
      return { start: start as DateValue, end: end as DateValue };
    }
    return;
  }

  const singleState = useStatelyCalendarState({
    ...(calendarProps as AriaCalendarProps<DateValue>),
    value: value?.[0],
    //focusedValue: value?.[0] || defaultValue?.[0],
    defaultValue: defaultValue?.[0],
    pageBehavior: "single",
    firstDayOfWeek: "mon",
    onChange: (value) => {
      if (onChange) {
        onChange([value, null]);
      }
    },
    locale,
    createCalendar,
  });

  const {
    calendarProps: singleCalendarProps,
    prevButtonProps: singlePrevButtonProps,
    nextButtonProps: singleNextButtonProps,
  } = useAriaCalendar(
    calendarProps as AriaCalendarProps<DateValue>,
    singleState,
  );

  const rangeState = useStatelyRangeCalendarState({
    ...(calendarProps as AriaRangeCalendarProps<DateValue>),
    value: getSafeRangeValue(value),
    //focusedValue: value?.[0] || getSafeRangeValue(value)?.start,
    defaultValue: getSafeRangeValue(defaultValue),
    pageBehavior: "single",
    firstDayOfWeek: "mon",
    onChange: (value) => {
      if (onChange) {
        onChange([toCalendarDate(value.start), toCalendarDate(value.end)]);
      }
    },
    locale,
    createCalendar,
  });

  const {
    calendarProps: rangeCalendarProps,
    prevButtonProps: rangePrevButtonProps,
    nextButtonProps: rangeNextButtonProps,
  } = useAriaRangeCalendar(
    calendarProps as AriaRangeCalendarProps<DateValue>,
    rangeState,
    ref,
  );

  useEffect(() => {
    if (mode === "range") {
      if (rangeState?.value?.start && rangeState?.value?.end) {
        const clampedStart = clampDate(rangeState, rangeState.value.start);
        const clampedEnd = clampDate(rangeState, rangeState.value.end);

        rangeState.setValue({ start: clampedStart, end: clampedEnd });

        onChange?.([toCalendarDate(clampedStart), toCalendarDate(clampedEnd)]);

        if (clampedStart.compare(clampedEnd) === 0) {
          const initialDate = singleState.value;
          if (initialDate) {
            rangeState.setAnchorDate(initialDate);
          }
        }
      }
    } else {
      if (singleState.value) {
        onChange?.([toCalendarDate(singleState.value), null]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, onChange]);

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
          prevButtonProps: rangePrevButtonProps,
          startValue: getRangeStartValue(),
          endValue: getRangeEndValue(),
          isSelectingEnd:
            rangeState.anchorDate !== null && !rangeState.isDragging,
          ref,
        }
      : {
          state: singleState,
          mode: "single" as const,
          calendarProps: singleCalendarProps,
          nextButtonProps: singleNextButtonProps,
          prevButtonProps: singlePrevButtonProps,
          startValue: singleState.value,
          endValue: null,
          ref,
        };

  return (
    <CalendarContext.Provider value={state}>
      {props.children}
    </CalendarContext.Provider>
  );
}

export function clampDate(
  state: StatelyCalendarState | StatelyRangeCalendarState,
  date: DateValue,
): DateValue {
  const { minValue, maxValue } = state;
  if (minValue && date.compare(minValue) < 0) return minValue;
  if (maxValue && date.compare(maxValue) > 0) return maxValue;
  return date;
}
