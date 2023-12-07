import { Flex } from "@chakra-ui/react";
import { getLocalTimeZone } from "@internationalized/date";
import {
  ArrowLeftOutline24Icon,
  ArrowRightOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { CalendarState, RangeCalendarState } from "react-stately";
import { createTexts, useTranslation } from "../i18n";
import { Heading } from "../typography";
import { CalendarNavigationButton } from "./CalendarNavigationButton";
import { useCurrentLocale } from "./utils";

type CalendarHeaderProps = {
  state: CalendarState | RangeCalendarState;
  title?: string;
  showYearNavigation?: boolean;
};
export function CalendarHeader({
  state,
  showYearNavigation = false,
  title,
}: CalendarHeaderProps) {
  const locale = useCurrentLocale();
  const monthFormatter = Intl.DateTimeFormat(locale, {
    month: "long",
  });
  const jsDate = state.focusedDate.toDate(getLocalTimeZone());

  const monthTitle = monthFormatter.format(jsDate);
  const monthAndYearTitle = `${monthTitle} ${state.focusedDate.year}`;

  const isPreviousYearDisabled = state.isInvalid(
    state.visibleRange.start.subtract({ years: 1 }),
  );
  const isNextYearDisabled = state.isInvalid(
    state.visibleRange.start.add({ years: 1 }),
  );
  const areAllOtherYearsDisabled = isPreviousYearDisabled && isNextYearDisabled;
  const isYearPickerVisible = showYearNavigation && !areAllOtherYearsDisabled;

  return (
    <Flex alignItems="center" paddingBottom="4" justifyContent="space-between">
      <CalendarNavigator
        title={
          title ? title : isYearPickerVisible ? monthTitle : monthAndYearTitle
        }
        unit="month"
        onPrevious={() =>
          state.setFocusedDate(state.focusedDate.subtract({ months: 1 }))
        }
        onNext={() =>
          state.setFocusedDate(state.focusedDate.add({ months: 1 }))
        }
        isNextDisabled={!state.isPreviousVisibleRangeInvalid}
        isPreviousDisabled={!state.isNextVisibleRangeInvalid}
      />
      {isYearPickerVisible && (
        <CalendarNavigator
          title={jsDate.getFullYear().toString()}
          unit="year"
          onPrevious={() =>
            state.setFocusedDate(state.focusedDate.subtract({ years: 1 }))
          }
          onNext={() =>
            state.setFocusedDate(state.focusedDate.add({ years: 1 }))
          }
          isPreviousDisabled={isPreviousYearDisabled}
          isNextDisabled={isNextYearDisabled}
        />
      )}
    </Flex>
  );
}

const capitalize = (str: string = "") =>
  str.charAt(0).toUpperCase() + str.slice(1);

type CalendarNavigatorProps = {
  /** The unit of time you want to navigate with  */
  unit: "month" | "year";
  /** The text in the middle */
  title: string;
  /** Callback for when you click back */
  onPrevious: () => void;
  /** Callback for when you click forward */
  onNext: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
};
export const CalendarNavigator = ({
  title,
  unit,
  onPrevious,
  isPreviousDisabled,
  onNext,
  isNextDisabled,
}: CalendarNavigatorProps) => {
  const { t } = useTranslation();
  return (
    <Flex alignItems="center" flexGrow={1}>
      <CalendarNavigationButton
        onPress={onPrevious}
        isDisabled={isPreviousDisabled}
        icon={<ArrowLeftOutline24Icon />}
        aria-label={`${t(texts.previous)} ${t(texts[unit])}`}
      />
      <Heading
        as="div"
        role="heading"
        variant="sm"
        fontWeight="bold"
        flex="1"
        textAlign="center"
      >
        {capitalize(title)}
      </Heading>
      <CalendarNavigationButton
        onPress={onNext}
        isDisabled={isNextDisabled}
        icon={<ArrowRightOutline24Icon />}
        aria-label={`${t(texts.next)} ${t(texts[unit])}`}
      />
    </Flex>
  );
};

const texts = createTexts({
  previous: {
    nb: "Forrige",
    nn: "Forrige",
    sv: "Föregående",
    en: "Previous",
  },
  next: {
    nb: "Neste",
    nn: "Neste",
    sv: "Nästa",
    en: "Next",
  },
  month: {
    nb: "måned",
    nn: "månad",
    sv: "månad",
    en: "month",
  },
  year: {
    nb: "år",
    nn: "år",
    sv: "år",
    en: "year",
  },
});
