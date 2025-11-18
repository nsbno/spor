import { useEffect, useRef } from "react";
import { useDateFormatter } from "react-aria";

import { useCalendar } from "@/calendar/CalendarContext";
import { CalendarGrid } from "@/calendar/CalendarGrid";
import { capitalizeFirstLetter } from "@/calendar/utils";
import { Box, BoxProps, Flex } from "@/layout";
import { Text } from "@/typography";

/**
 * A calendar component that displays multiple months in a scrollable view.
 */
export function ScrollCalendar(boxProps: BoxProps) {
  const { state, calendarProps, ref, startValue } = useCalendar();
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);

  const startMonth =
    state.visibleRange.start.year * 12 + state.visibleRange.start.month;
  const endMonth =
    state.visibleRange.end.year * 12 + state.visibleRange.end.month;
  const monthCount = endMonth - startMonth + 1;

  const monthDateFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
    timeZone: state.timeZone,
  });

  useEffect(function scrollFocusedMonthIntoView() {
    const targetDate = startValue || state.focusedDate;
    if (!targetDate) return;

    const targetMonth = targetDate.year * 12 + targetDate.month;
    const monthIndex = targetMonth - startMonth;

    if (monthIndex > 0 && monthIndex < monthCount) {
      const element = monthRefs.current[monthIndex];
      if (element) {
        element.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box width="fit-content" {...calendarProps} {...boxProps} ref={ref}>
      <Flex flexDirection="column" gap={4}>
        {Array.from({ length: monthCount }).map((_, index) => (
          <Box
            key={index}
            ref={(el: HTMLDivElement | null) => {
              monthRefs.current[index] = el;
            }}
          >
            <Text
              aria-hidden
              flex={1}
              fontWeight="bold"
              fontSize="sm"
              textAlign="center"
              marginBottom={3}
            >
              {capitalizeFirstLetter(
                monthDateFormatter.format(
                  state.visibleRange.start
                    .add({ months: index })
                    .toDate(state.timeZone),
                ),
              )}
            </Text>

            <CalendarGrid offset={{ months: index }} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
