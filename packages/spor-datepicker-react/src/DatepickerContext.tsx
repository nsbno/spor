import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker as useReactDatepicker,
  useDay as useReactDay,
  useMonth,
} from "@datepicker-react/hooks";
import React, { useEffect, useState } from "react";
import {
  Day,
  dayLabelFormat,
  isToday,
  isValidDateObject,
  useNextDays,
  usePreviousDays,
} from "./datepicker-utils";

type DatepickerContextType = {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
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
};

export const DatepickerContext = React.createContext<
  DatepickerContextType | undefined
>(undefined);

export type DatepickerControlProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  defaultValue?: Date;
};

export const DatepickerProvider: React.FC<DatepickerControlProps> = ({
  value,
  onChange = () => {},
  defaultValue,
  children,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    value ?? defaultValue ?? new Date()
  );

  useEffect(() => {
    if (isValidDateObject(value)) {
      setSelectedDate(value);
    }
  }, [value]);

  const handleDateChange = ({ startDate }: OnDatesChangeProps) => {
    if (startDate) {
      setSelectedDate(startDate);
      onChange(startDate);
    }
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
    startDate: selectedDate,
    endDate: selectedDate,
    focusedInput: START_DATE,
    numberOfMonths: 1,
    onDatesChange: handleDateChange,
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
        selectedDate,
        setSelectedDate,
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

export const useDay = (
  date: Date,
  dayRef: React.RefObject<HTMLButtonElement> | undefined
) => {
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
