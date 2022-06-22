import {
  Button,
  Flex,
  forwardRef,
  Grid,
  GridItem,
  useStyles,
} from "@chakra-ui/react";
import { Card } from "@vygruppen/spor-card-react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import {
  ArrowLeftFill30Icon,
  ArrowRightFill30Icon,
} from "@vygruppen/spor-icon-react";
import { Text } from "@vygruppen/spor-typography-react";
import React from "react";
import { useDatepicker } from "./DatepickerContext";
import { Day } from "./Day";

type CalendarProps = {};
export const Calendar = forwardRef<CalendarProps, any>((_, ref) => {
  const {
    goToNextMonth,
    goToPreviousMonth,
    days,
    weekdayLabels,
    monthLabel,
    prevDays,
    nextDays,
  } = useDatepicker();

  let { t } = useTranslation();

  const [monthLabelMonth, monthLabelYear] = monthLabel.split(" ");

  const styles = useStyles();
  return (
    <Card colorScheme="white" p={1} __css={styles.calendar} ref={ref}>
      <Flex justify="space-between" mx={3} mt={2}>
        <Button __css={styles.button} onClick={goToPreviousMonth}>
          <ArrowLeftFill30Icon />
        </Button>
        <Text sx={styles.monthLabel}>
          {t(months[monthLabelMonth as Month])} {monthLabelYear}
        </Text>
        <Button __css={styles.button} onClick={goToNextMonth}>
          <ArrowRightFill30Icon />
        </Button>
      </Flex>
      <Grid templateColumns="repeat(7, 1fr)" gap={2} mx={1}>
        {weekdayLabels.map((dayLabel, idx) => (
          <GridItem
            key={dayLabel}
            __css={idx > 4 ? styles.weekendLabel : styles.dayLabel}
          >
            <Text>{t(weekdays[dayLabel as Weekday])}</Text>
          </GridItem>
        ))}
      </Grid>
      <Grid templateColumns="repeat(7, 1fr)" gap={1} m={1}>
        {prevDays.map((day) => {
          return (
            <Day
              isDisabled
              key={day.date.toString()}
              dayLabel={day.dayLabel}
              date={day.date}
            />
          );
        })}
        {days.map((day) => {
          if (typeof day === "object") {
            return (
              <Day
                key={day.date.toString()}
                dayLabel={day.dayLabel}
                date={day.date}
              />
            );
          }
        })}
        {nextDays.map((day) => {
          return (
            <Day
              isDisabled
              key={day.date.toString()}
              dayLabel={day.dayLabel}
              date={day.date}
            />
          );
        })}
      </Grid>
    </Card>
  );
});

type Weekday = keyof typeof weekdays;

const weekdays = {
  Mo: {
    nb: "Ma",
    sv: "Må",
    en: "Mo",
  },
  Tu: {
    nb: "Ti",
    sv: "Ti",
    en: "Tu",
  },
  We: {
    nb: "On",
    sv: "On",
    en: "We",
  },
  Th: {
    nb: "To",
    sv: "To",
    en: "Th",
  },
  Fr: {
    nb: "Fr",
    sv: "Fr",
    en: "Fr",
  },
  Sa: {
    nb: "Lø",
    sv: "Lö",
    en: "Sa",
  },
  Su: {
    nb: "Sø",
    sv: "Sö",
    en: "Su",
  },
};

type Month = keyof typeof months;

const months = {
  January: {
    nb: "Januar",
    sv: "Januari",
    en: "January",
  },
  February: {
    nb: "Februar",
    sv: "Februari",
    en: "February",
  },
  March: {
    nb: "Mars",
    sv: "Mars",
    en: "March",
  },
  April: {
    nb: "April",
    sv: "April",
    en: "April",
  },
  May: {
    nb: "Mai",
    sv: "Maj",
    en: "May",
  },
  June: {
    nb: "Juni",
    sv: "Juni",
    en: "June",
  },
  July: {
    nb: "Juli",
    sv: "Juli",
    en: "July",
  },
  August: {
    nb: "August",
    sv: "Augusti",
    en: "August",
  },
  September: {
    nb: "September",
    sv: "September",
    en: "September",
  },
  October: {
    nb: "Oktober",
    sv: "Oktober",
    en: "October",
  },
  November: {
    nb: "November",
    sv: "November",
    en: "November",
  },
  December: {
    nb: "Desember",
    sv: "December",
    en: "December",
  },
};
