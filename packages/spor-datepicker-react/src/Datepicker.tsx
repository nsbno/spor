import React, { useState } from "react";

import { CalendarOutline30Icon } from "@vygruppen/spor-icon-react/tmp";
import { StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import { Input } from "@vygruppen/spor-input-react";
import {START_DATE, useDatepicker} from "@datepicker-react/hooks";
import { DatepickerContext } from "./DatepickerContext";
import { Month } from "./Month";

type DatepickerProps = {
  variant: "sm" | "lg";
};

const SporDatepicker: React.VFC<DatepickerProps> = (props) => {
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
    goToNextMonths,
    goToPreviousMonths,
  } = useDatepicker({
    startDate: selectedDate,
    endDate: selectedDate,
    focusedInput: START_DATE,
    numberOfMonths: 1,
    onDatesChange: (data) => {
      setSelectedDate(data.startDate);
    },
  });
  const styles = useMultiStyleConfig("Datepicker", props);

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
        goToNextMonths,
        goToPreviousMonths,
      }}
    >
      <StylesProvider value={styles}>
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
      </StylesProvider>
    </DatepickerContext.Provider>
  );
};

export const Datepicker = SporDatepicker;
