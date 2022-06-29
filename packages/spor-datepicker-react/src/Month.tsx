import {
  Box,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useStyles,
} from "@chakra-ui/react";
import { useMonth } from "@datepicker-react/hooks";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import {
  ArrowLeftFill24Icon,
  ArrowLeftFill30Icon,
  ArrowRightFill24Icon,
  ArrowRightFill30Icon,
} from "@vygruppen/spor-icon-react";
import React, { useMemo } from "react";
import { Day as DayType } from "./datepicker-utils";
import { useDatepicker } from "./DatepickerContext";
import { Day } from "./Day";

type MonthProps = {
  year: number;
  month: number;
};
export const Month = ({ year, month }: MonthProps) => {
  const { previousDays, nextDays } = useDatepicker();
  const { days, monthLabel, weekdayLabels } = useMonth({
    month,
    year,
    firstDayOfWeek: 0,
  });
  const { t } = useTranslation();
  const styles = useStyles();

  const disable = (day: DayType) => ({ ...day, isDisabled: true });
  const enable = (day: DayType) => ({ ...day, isDisabled: false });
  const discardEmpty = (day: DayType | number): day is DayType =>
    typeof day === "object";

  const daysToRender = useMemo(
    () => [
      ...previousDays.map(disable),
      ...days.filter(discardEmpty).map(enable),
      ...nextDays.map(disable),
    ],
    [previousDays, days, nextDays]
  );

  return (
    <Box>
      <MonthHeader monthLabel={monthLabel} />
      <SimpleGrid columns={7} gap={2} mx={1}>
        {weekdayLabels.map((dayLabel, idx) => (
          <Box
            key={dayLabel}
            __css={idx > 4 ? styles.weekendLabel : styles.dayLabel}
          >
            <Text aria-label={t(weekdays[dayLabel as Weekday])}>
              {t(weekdays[dayLabel as Weekday]).substring(0, 2)}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={7} gap={1} m={1}>
        {daysToRender.map((day) => {
          return (
            <Day
              key={day.date.toString()}
              dayLabel={day.dayLabel}
              date={day.date}
              isDisabled={day.isDisabled}
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

type MonthHeaderProps = {
  monthLabel: string;
};
const MonthHeader = ({ monthLabel }: MonthHeaderProps) => {
  const { goToPreviousMonth, goToNextMonth } = useDatepicker();
  const { t } = useTranslation();
  const styles = useStyles();
  const [monthLabelMonth, monthLabelYear] = monthLabel.split(" ") as [
    Month,
    string
  ];
  const LeftArrow = useBreakpointValue(
    [ArrowLeftFill24Icon, ArrowLeftFill30Icon],
    "base"
  )!;
  const RightArrow = useBreakpointValue(
    [ArrowRightFill24Icon, ArrowRightFill30Icon],
    "base"
  )!;
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mx={3}
      mt={1}
      mb={1}
    >
      <IconButton
        variant="ghost"
        size="sm"
        onClick={goToPreviousMonth}
        aria-label={t(texts.previousMonth)}
        icon={<LeftArrow />}
      />
      <Text sx={styles.monthLabel}>
        {t(months[monthLabelMonth])} {monthLabelYear}
      </Text>
      <IconButton
        variant="ghost"
        size="sm"
        onClick={goToNextMonth}
        aria-label={t(texts.nextMonth)}
        icon={<RightArrow />}
      />
    </Flex>
  );
};

type Weekday = keyof typeof weekdays;

const weekdays = {
  Mo: {
    nb: "Mandag",
    sv: "Måndag",
    en: "Mondag",
  },
  Tu: {
    nb: "Tirsdag",
    sv: "Tirsdag",
    en: "Tuesday",
  },
  We: {
    nb: "Onsdag",
    sv: "Onsdag",
    en: "Wednesday",
  },
  Th: {
    nb: "Torsdag",
    sv: "Torsdag",
    en: "Thursday",
  },
  Fr: {
    nb: "Fredag",
    sv: "Fredag",
    en: "Friday",
  },
  Sa: {
    nb: "Lørdag",
    sv: "Lördag",
    en: "Saturday",
  },
  Su: {
    nb: "Søndag",
    sv: "Söndag",
    en: "Sunday",
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

const texts = {
  previousMonth: {
    nb: "Forrige måned",
    sv: "Föregående månad",
    en: "Previous month",
  },
  nextMonth: {
    nb: "Neste måned",
    sv: "Nästa månad",
    en: "Next month",
  },
};
