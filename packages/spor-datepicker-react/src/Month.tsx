import React from "react";
import { FirstDayOfWeek, MonthType, useMonth } from "@datepicker-react/hooks";
import { Button, Grid, GridItem, useStyles } from "@chakra-ui/react";
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

  const styles = useStyles();
  return (
    <Card variant="outlined" p={1} __css={styles.calendar}>
      <Button>{"<-"}</Button>
      {monthLabel}
      <Button>{"->"}</Button>
      <Grid templateColumns="repeat(7, 1fr)" gap={2}>
        {weekdayLabels.map((dayLabel, idx) => (
          <GridItem key={dayLabel} __css={idx > 4 ? styles.weekendLabel : styles.weekdayLabel}>
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
