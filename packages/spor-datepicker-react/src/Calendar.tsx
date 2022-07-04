import { forwardRef, SimpleGrid, useStyles } from "@chakra-ui/react";
import { Card } from "@vygruppen/spor-card-react";
import React from "react";
import { useDatepicker } from "./DatepickerContext";
import { Month } from "./Month";

type CalendarProps = {};
export const Calendar = forwardRef<CalendarProps, any>((_, ref) => {
  const { activeMonths } = useDatepicker();
  const styles = useStyles();

  return (
    <SimpleGrid columns={[1, 2]} gap={3}>
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
    </SimpleGrid>
  );
});
