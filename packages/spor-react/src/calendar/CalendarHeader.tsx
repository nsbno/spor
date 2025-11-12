import { useDateFormatter, VisuallyHidden } from "react-aria";

import { IconButton } from "@/button";
import { useCalendar } from "@/calendar/CalendarContext";
import { capitalizeFirstLetter } from "@/calendar/utils";
import { createTexts, useTranslation } from "@/i18n";
import { DropdownLeftFill24Icon, DropdownRightFill24Icon } from "@/icons";
import { Flex } from "@/layout";
import { Text } from "@/typography";

type Props = {
  dualView?: boolean;
};

export function CalendarHeader({ dualView }: Props) {
  const { t } = useTranslation();
  const { state, calendarProps, nextButtonProps, prevButtonProps } =
    useCalendar();

  const monthDateFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
    timeZone: state.timeZone,
  });

  function handlePrevious() {
    state.focusPreviousPage();
  }

  function handleNext() {
    state.focusNextPage();
  }

  return (
    <Flex flex={1} alignItems="center" paddingBottom={4}>
      {/* Add a screen reader only description of the entire visible range rather than
       * a separate heading above each month grid. This is placed first in the DOM order
       * so that it is the first thing a touch screen reader user encounters.
       * In addition, VoiceOver on iOS does not announce the aria-label of the grid
       * elements, so the aria-label of the Calendar is included here as well. */}
      <VisuallyHidden>
        <h2>{calendarProps["aria-label"]}</h2>
      </VisuallyHidden>

      <IconButton
        size="md"
        onClick={handlePrevious}
        variant="ghost"
        marginLeft={1}
        disabled={prevButtonProps.isDisabled}
        aria-label={t(texts.previousMonth)}
        icon={<DropdownLeftFill24Icon />}
      />

      <Text
        aria-hidden
        flex={1}
        fontWeight="bold"
        fontSize="18px"
        textAlign="center"
      >
        {capitalizeFirstLetter(
          monthDateFormatter.format(
            state.visibleRange.start.toDate(state.timeZone),
          ),
        )}
      </Text>

      {dualView && (
        <Text
          aria-hidden
          flex={1}
          fontWeight="bold"
          fontSize="18px"
          textAlign="center"
        >
          {capitalizeFirstLetter(
            monthDateFormatter.format(
              state.visibleRange.start
                .add({ months: 1 })
                .toDate(state.timeZone),
            ),
          )}
        </Text>
      )}

      <IconButton
        size="md"
        onClick={handleNext}
        marginRight={1}
        variant="ghost"
        disabled={nextButtonProps.isDisabled}
        aria-label={t(texts.nextMonth)}
        icon={<DropdownRightFill24Icon />}
      />
    </Flex>
  );
}

const texts = createTexts({
  previousMonth: {
    nb: "Forrige måned",
    nn: "Førre månad",
    en: "Previous month",
    sv: "Föregående månad",
  },
  nextMonth: {
    nb: "Neste måned",
    nn: "Neste månad",
    en: "Next month",
    sv: "Nästa månad",
  },
});
