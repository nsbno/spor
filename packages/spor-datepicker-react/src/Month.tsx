import React from "react";
import { FirstDayOfWeek, MonthType, useMonth } from "@datepicker-react/hooks";
import { Button, Grid, GridItem, useMultiStyleConfig } from "@chakra-ui/react";
import { Card } from "@vygruppen/spor-card-react";
import { Text } from "@vygruppen/spor-typography-react";
import { Day } from "./Day";

export const Month: React.VFC<{
  activeMonth: MonthType;
  firstDayOfWeek: FirstDayOfWeek;
}> = ({ activeMonth, firstDayOfWeek }) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year: activeMonth.year,
    month: activeMonth.month,
    firstDayOfWeek,
  });
  return (
    <Card variant="outlined" p={1}>
      <Button>{"<-"}</Button>
      {monthLabel}
      <Button>{"->"}</Button>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {weekdayLabels.map((dayLabel) => (
          <GridItem key={dayLabel}>
            <Text>{dayLabel}</Text>
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {days.map((day, idx) => {
          if (typeof day === "object") {
            return (
              <Day
                key={day.date.toString()}
                dayLabel={day.dayLabel}
                date={day.date}
              />
            );
          }
          return <div key={idx} />;
        })}
      </Grid>
    </Card>
  );
};
