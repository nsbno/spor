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

import { getSafeRangeValue, useCurrentLocale } from "@/calendar/utils";

export type CalendarValue = [CalendarDate | null, CalendarDate | null];
export type CalendarMode = "single" | "range";
type CalendarState = SingleCalendarState | RangeCalendarState;

type SingleCalendarState = {
  state: StatelyCalendarState;
  mode: "single";
  calendarProps: DOMAttributes<FocusableElement>;
  nextButtonProps: AriaButtonProps<"button">;
  prevButtonProps: AriaButtonProps<"button">;
  startValue: CalendarDate | null;
  endValue: null;
  isSelectingRange: boolean;
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
  isSelectingRange: boolean;
  ref: React.RefObject<HTMLDivElement>;
};

const CalendarContext = createContext<CalendarState | null>(null);

export function useCalendar(): CalendarState {
  const ctx = useContext(CalendarContext);
  if (!ctx) throw new Error("useCalendar must be used within CalendarProvider");
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
  const {
    mode = "single",
    onChange,
    value,
    defaultValue,
    visibleDuration = { months: 1 },
    ...calendarProps
  } = props;
  const locale = useCurrentLocale();

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
    prevButtonProps: singlePrevButtonProps,
    nextButtonProps: singleNextButtonProps,
  } = useAriaCalendar(
    calendarProps as AriaCalendarProps<DateValue>,
    singleState,
  );

  const rangeState = useStatelyRangeCalendarState({
    ...(calendarProps as AriaRangeCalendarProps<DateValue>),
    value: getSafeRangeValue(value),
    defaultValue: getSafeRangeValue(defaultValue),
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
    prevButtonProps: rangePrevButtonProps,
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
          prevButtonProps: rangePrevButtonProps,
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
          prevButtonProps: singlePrevButtonProps,
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
