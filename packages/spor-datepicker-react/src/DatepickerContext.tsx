import React, { useState } from "react";
import {
  START_DATE,
  useDatepicker as useReactDatepicker,
  useMonth,
  useDay as useReactDay,
} from "@datepicker-react/hooks";

interface DatepickerContextType {
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
  days: (number | { dayLabel: string; date: Date })[];
  weekdayLabels: string[];
  monthLabel: string;
}

export const DatepickerContext = React.createContext<
  DatepickerContextType | undefined
>(undefined);

export const DatepickerProvider: React.FC = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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
    goToPreviousMonths,
    goToNextMonths,
  } = useReactDatepicker({
    startDate: selectedDate,
    endDate: selectedDate,
    focusedInput: START_DATE,
    numberOfMonths: 1,
    onDatesChange: ({ startDate }) => {
      setSelectedDate(startDate);
    },
  });
  const activeMonth = activeMonths[0];
  const { days, weekdayLabels, monthLabel } = useMonth({
    year: activeMonth.year,
    month: activeMonth.month,
    firstDayOfWeek: firstDayOfWeek,
    dayLabelFormat(date: Date): string {
      return date.getDate().toString();
    },
  });
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
        goToPreviousMonth: goToPreviousMonths,
        goToNextMonth: goToNextMonths,
        days,
        weekdayLabels,
        monthLabel,
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
  const isToday = new Date().toDateString() === date.toDateString();
  return { ...context, isToday };
};
