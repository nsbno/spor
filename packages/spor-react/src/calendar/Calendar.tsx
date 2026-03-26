import { SystemStyleObject } from "@chakra-ui/react";

import { useCalendar } from "@/calendar/CalendarContext";
import { CalendarGrid } from "@/calendar/CalendarGrid";
import { CalendarHeader } from "@/calendar/CalendarHeader";
import { Box, Flex } from "@/layout";

type Props = {
  /**
   * Show two months side by side
   */
  dualView?: boolean;
  css?: SystemStyleObject;
};

/**
 * Calendar component that displays a grid of days for a specific month.
 * Standard view with pagination, with the option to show dual months side by side.
 */
export function Calendar({ dualView, css }: Props) {
  const { calendarProps, ref } = useCalendar();

  return (
    <Box
      width="fit-content"
      ref={ref}
      {...calendarProps}
      css={css}
      data-part="root"
    >
      <CalendarHeader dualView={dualView} />

      <Flex alignItems="flex-start">
        <Box paddingRight={dualView ? 4 : 0}>
          <CalendarGrid />
        </Box>

        {dualView && (
          <Box
            paddingLeft={4}
            borderLeft={["1px solid var(--spor-colors-outline-disabled)"]}
          >
            <CalendarGrid offset={{ months: 1 }} />
          </Box>
        )}
      </Flex>
    </Box>
  );
}
