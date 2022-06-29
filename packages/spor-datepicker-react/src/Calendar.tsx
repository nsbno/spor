import { forwardRef, useStyles } from "@chakra-ui/react";
import { Card } from "@vygruppen/spor-card-react";
import React from "react";
import { useDatepicker } from "./DatepickerContext";
import { Month } from "./Month";

type CalendarProps = {};
export const Calendar = forwardRef<CalendarProps, any>((_, ref) => {
  const { activeMonths } = useDatepicker();
  const styles = useStyles();

  return (
    <>
      {activeMonths.map((activeMonth) => (
        <Card
          colorScheme="white"
          p={1}
          sx={styles.calendar}
          ref={ref}
          key={activeMonth.month}
        >
          <Month month={activeMonth.month} year={activeMonth.year} />
        </Card>
      ))}
    </>
  );
});
