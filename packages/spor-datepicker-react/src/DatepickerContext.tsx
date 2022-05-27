import React from "react";

interface DatepickerContextType {
  focusedDate: Date | null;
  isDateFocused: (date: Date) => boolean;
  isDateSelected: (date: Date) => boolean;
  isDateHovered: (date: Date) => boolean;
  isDateBlocked: (date: Date) => boolean;
  isFirstOrLastSelectedDate: (date: Date) => boolean;
  onDateFocus: (date: Date) => void;
  onDateHover: (date: Date) => void;
  onDateSelect: (date: Date) => void;
  goToNextMonths: () => void;
  goToPreviousMonths: () => void;
}

const datepickerContextDefaultValue: DatepickerContextType = {
  focusedDate: null,
  isDateFocused: (date: Date) => false,
  isDateSelected: (date: Date) => false,
  isDateHovered: (date: Date) => false,
  isDateBlocked: (date: Date) => false,
  isFirstOrLastSelectedDate: (date: Date) => false,
  onDateFocus: (date: Date) => {},
  onDateHover: (date: Date) => {},
  onDateSelect: (date: Date) => {},
  goToNextMonths: () => {},
  goToPreviousMonths: () => {}
};

export const DatepickerContext = React.createContext(
  datepickerContextDefaultValue
);
