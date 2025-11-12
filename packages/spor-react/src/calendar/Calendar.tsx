import { Box, Flex } from "@vygruppen/spor-react";

import { CalendarGrid } from "@/calendar/CalendarGrid";
import { CalendarHeader } from "@/calendar/CalendarHeader";
import { useSporCalendar } from "@/calendar/CalendarProvider";

type Props = {
  dualView?: boolean;
};

export function Calendar({ dualView }: Props) {
  const { calendarProps, ref } = useSporCalendar();

  return (
    <Box {...calendarProps} ref={ref}>
      <CalendarHeader dualView={dualView} />

      <Flex alignItems="flex-start">
        <Box paddingRight={dualView ? 4 : 0}>
          <CalendarGrid />
        </Box>

        {dualView && (
          <Box paddingLeft={4} borderLeft={["1px solid #d3d3d3"]}>
            <CalendarGrid offset={{ months: 1 }} />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
