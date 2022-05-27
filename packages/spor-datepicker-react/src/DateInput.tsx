import { CalendarOutline30Icon } from "@vygruppen/spor-icon-react/tmp";
import { Input } from "@vygruppen/spor-input-react";
import React from "react";
import { useDatepicker } from "./DatepickerContext";

export const DateInput: React.FC = () => {
  const { selectedDate, setSelectedDate } = useDatepicker();

  return (
    <Input
      leftIcon={<CalendarOutline30Icon />}
      label="dato"
      width="196px"
      value={selectedDate?.toLocaleDateString()}
      onChange={(event) => {
        setSelectedDate(new Date(event.target.value));
      }}
    />
  );
};
