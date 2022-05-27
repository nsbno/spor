import React from "react";

import { StylesProvider, useMultiStyleConfig } from "@chakra-ui/react";
import { DatepickerProvider } from "./DatepickerContext";
import { Month } from "./Month";
import { DateInput } from "./DateInput";

type DatepickerProps = {
  variant: "sm" | "lg";
};

const SporDatepicker: React.VFC<DatepickerProps> = (props) => {
  const styles = useMultiStyleConfig("Datepicker", props);

  return (
    <DatepickerProvider>
      <StylesProvider value={styles}>
        <DateInput />
        <Month />
      </StylesProvider>
    </DatepickerProvider>
  );
};

export const Datepicker = SporDatepicker;
