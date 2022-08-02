import {
  forwardRef,
  SimpleGrid,
  useFormControl,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { Card } from "@vygruppen/spor-card-react";
import React from "react";
import { useDatepicker } from "./DatepickerContext";
import { Month } from "./Month";

type CalendarProps = {};
export const Calendar = forwardRef<CalendarProps, any>((_, ref) => {
  const { activeMonths } = useDatepicker();
  const formControlProps = useFormControl({});
  const styles = useMultiStyleConfig("Datepicker", {
    ...formControlProps,
  });

  const maxColumns = Math.min(activeMonths.length, 2);

  return (
    <SimpleGrid columns={[1, maxColumns]} gap={3}>
      {activeMonths.map((activeMonth) => (
        <Card
          colorScheme="white"
          color="alias.darkGrey"
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
