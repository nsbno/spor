import { Box, BoxProps, Flex, Text } from "@vygruppen/spor-react";
import { useDateFormatter } from "react-aria";

import { CalendarGrid } from "@/calendar/CalendarGrid";
import { useSporCalendar } from "@/calendar/CalendarProvider";

export function ScrollCalendar(boxProps: BoxProps) {
  const { state, calendarProps, ref } = useSporCalendar();

  const monthCount =
    Math.ceil(
      state.visibleRange.end.year * 12 +
        state.visibleRange.end.month -
        (state.visibleRange.start.year * 12 + state.visibleRange.start.month),
    ) + 1;

  const monthDateFormatter = useDateFormatter({
    month: "long",
    year: "numeric",
    timeZone: state.timeZone,
  });

  return (
    <Box {...calendarProps} {...boxProps} ref={ref}>
      <Flex flexDirection="column" gap={4}>
        {Array.from({ length: monthCount }).map((_, index) => (
          <Box key={index}>
            <Text
              aria-hidden
              flex={1}
              fontWeight="bold"
              fontSize="18px"
              textAlign="center"
              marginBottom={3}
            >
              {monthDateFormatter.format(
                state.visibleRange.start
                  .add({ months: index })
                  .toDate(state.timeZone),
              )}
            </Text>

            <CalendarGrid offset={{ months: index }} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
