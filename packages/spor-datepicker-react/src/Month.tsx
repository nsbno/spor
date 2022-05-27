import React from "react";
import { Button, Flex, Grid, GridItem, useStyles } from "@chakra-ui/react";
import { Card } from "@vygruppen/spor-card-react";
import { Text } from "@vygruppen/spor-typography-react";
import { Day } from "./Day";
import {
  ArrowLeftFill30Icon,
  ArrowRightFill30Icon,
} from "@vygruppen/spor-icon-react";
import { useDatepicker } from "./DatepickerContext";

export const Month: React.VFC = () => {
  const {
    goToNextMonths,
    goToPreviousMonths,
    days,
    weekdayLabels,
    monthLabel,
  } = useDatepicker();

  const styles = useStyles();
  return (
    <Card variant="outlined" p={1} __css={styles.calendar}>
      <Flex justify="space-between" mx={3} mt={2}>
        <Button __css={styles.button} onClick={goToPreviousMonths}>
          <ArrowLeftFill30Icon />
        </Button>
        <Text sx={styles.label}>{monthLabel}</Text>
        <Button __css={styles.button} onClick={goToNextMonths}>
          <ArrowRightFill30Icon />
        </Button>
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap={2} mx={1}>
        {weekdayLabels.map((dayLabel, idx) => (
          <GridItem
            key={dayLabel}
            __css={idx > 4 ? styles.weekendLabel : styles.label}
          >
            <Text>{dayLabel}</Text>
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(7, 1fr)" gap={1} m={1}>
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
