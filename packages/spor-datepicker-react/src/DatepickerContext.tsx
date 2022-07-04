import {
  END_DATE,
  MonthType,
  OnDatesChangeProps,
  START_DATE,
  useDatepicker as useReactDatepicker,
  UseDatepickerProps,
  useDay as useReactDay,
  useMonth,
} from "@datepicker-react/hooks";
import React, { useEffect, useState } from "react";
import {
  Day,
  dayLabelFormat,
  isToday,
  useNextDays,
  usePreviousDays,
} from "./datepicker-utils";

type DatepickerContextType = {
  state: DatepickerState;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  isDateSelected: (date: Date) => boolean;
  isDateHovered: (date: Date) => boolean;
  isFirstOrLastSelectedDate: (date: Date) => boolean;
  isDateBlocked: (date: Date) => boolean;
  isDateFocused: (date: Date) => boolean;
  focusedDate: Date | null;
  onDateHover: (date: Date | null) => void;
  onDateSelect: (date: Date) => void;
  onDateFocus: (date: Date) => void;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  days: (number | Day)[];
  weekdayLabels: string[];
  monthLabel: string;
  previousDays: Day[];
  nextDays: Day[];
  activeMonths: MonthType[];
};

export const DatepickerContext = React.createContext<
  DatepickerContextType | undefined
>(undefined);

export type DatepickerControlProps = {
  startDate?: Date;
  endDate?: Date;
  onChange?: (args: { startDate: Date | null; endDate: Date | null }) => void;
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  min?: Date;
  max?: Date;
  children: React.ReactNode;
  mode: "single" | "range";
};

type DatepickerState = {
  startDate: Date | null;
  endDate: Date | null;
  focusedInput: UseDatepickerProps["focusedInput"];
};

export const DatepickerProvider: React.FC<DatepickerControlProps> = ({
  startDate,
  endDate,
  defaultStartDate,
  defaultEndDate,
  onChange = () => {},
  children,
  min,
  max,
  mode,
}: DatepickerControlProps) => {
  const [datepickerState, setDatepickerState] = useState<DatepickerState>({
    startDate: startDate ?? defaultStartDate ?? new Date(),
    endDate: endDate ?? defaultEndDate ?? null,
    focusedInput: START_DATE,
  });

  useEffect(() => {
    if (startDate && endDate) {
      setDatepickerState({
        startDate: startDate,
        endDate: endDate,
        focusedInput: START_DATE,
      });
    } else if (startDate) {
      setDatepickerState({
        startDate: startDate,
        endDate: startDate,
        focusedInput: START_DATE,
      });
    }
  }, [startDate]);

  const handleDateChange = ({
    startDate,
    endDate,
    focusedInput,
  }: OnDatesChangeProps) => {
    setDatepickerState({
      startDate,
      endDate,
      focusedInput: focusedInput || START_DATE,
    });
    onChange({ startDate, endDate });
  };

  const {
    activeMonths,
    firstDayOfWeek,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonthsByOneMonth,
    goToNextMonthsByOneMonth,
  } = useReactDatepicker({
    startDate: datepickerState.startDate,
    endDate: datepickerState.endDate,
    focusedInput: datepickerState.focusedInput,
    numberOfMonths: 1,
    onDatesChange: handleDateChange,
    minBookingDate: min,
    maxBookingDate: max,
    exactMinBookingDays: mode === "single",
    minBookingDays: 1,
  });
  const { month, year } = activeMonths[0];
  const monthProps = {
    year,
    month,
    firstDayOfWeek,
    dayLabelFormat,
  };
  const { days, weekdayLabels, monthLabel } = useMonth(monthProps);
  const previousDays = usePreviousDays(monthProps, days);
  const nextDays = useNextDays(monthProps);

  return (
    <DatepickerContext.Provider
      value={{
        state: datepickerState,
        setStartDate: (startDate: Date | null) =>
          setDatepickerState({
            startDate,
            endDate: null,
            focusedInput: START_DATE,
          }),
        setEndDate: (endDate: Date | null) =>
          setDatepickerState((prev) => ({
            startDate: prev.startDate,
            endDate,
            focusedInput: mode === "single" ? START_DATE : END_DATE,
          })),
        isDateSelected,
        isDateHovered,
        isFirstOrLastSelectedDate,
        isDateBlocked,
        isDateFocused,
        focusedDate,
        onDateHover,
        onDateSelect,
        onDateFocus,
        goToPreviousMonth: goToPreviousMonthsByOneMonth,
        goToNextMonth: goToNextMonthsByOneMonth,
        days,
        weekdayLabels,
        monthLabel,
        previousDays,
        nextDays,
        activeMonths,
      }}
    >
      {children}
    </DatepickerContext.Provider>
  );
};

export const useDatepicker = () => {
  const context = React.useContext(DatepickerContext);
  if (context === undefined) {
    throw new Error("useDatepicker must be used within a DatepickerProvider");
  }
  return context;
};

type UseDayArgs = {
  date: Date;
  dayRef?: React.RefObject<HTMLButtonElement>;
};
export const useDay = ({ date, dayRef }: UseDayArgs) => {
  const {
    focusedDate,
    isDateBlocked,
    isDateFocused,
    isDateHovered,
    isDateSelected,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateHover,
    onDateSelect,
  } = useDatepicker();
  const context = useReactDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });
  return { ...context, isToday: isToday(date) };
};
