import React, { useState } from "react";

import { CalendarOutline30Icon } from "@vygruppen/spor-icon-react/tmp";
import { Input } from "@vygruppen/spor-input-react";
import { useDatepicker } from "@datepicker-react/hooks";
import { DatepickerContext } from "./DatepickerContext";
import { Month } from "./Month";

const SporDatepicker: React.VFC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const {
    activeMonths,
    firstDayOfWeek,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useDatepicker({
    startDate: null,
    endDate: null,
    focusedInput: "startDate",
    numberOfMonths: 1,
    onDatesChange: (data) => {
      setSelectedDate(data.startDate);
    },
  });

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <Input
        leftIcon={<CalendarOutline30Icon />}
        label="dato"
        width="196px"
        value={selectedDate?.toLocaleDateString()}
        onChange={(event) => {
          setSelectedDate(new Date(event.target.value));
        }}
      />
      <Month activeMonth={activeMonths[0]} firstDayOfWeek={firstDayOfWeek} />
    </DatepickerContext.Provider>
  );
};

export const Datepicker = SporDatepicker;
