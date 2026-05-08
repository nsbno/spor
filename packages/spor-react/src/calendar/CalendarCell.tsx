import { CalendarDate, isSameDay, isSameMonth } from "@internationalized/date";
import { PointerEvent as ReactPointerEvent, useRef } from "react";
import { mergeProps, useCalendarCell, useFocusRing } from "react-aria";

import { useCalendar } from "@/calendar/CalendarContext";
import { Box } from "@/layout";
import { Text } from "@/typography";

const IS_TOUCH_PRIMARY =
  globalThis.window !== undefined &&
  globalThis.window.matchMedia?.("(pointer: coarse)").matches;

function isPhantomPointer(event: ReactPointerEvent) {
  return IS_TOUCH_PRIMARY && event.pointerType === "mouse";
}

type Props = {
  date: CalendarDate;
  currentMonth: CalendarDate;
};

export function CalendarCell({ date, currentMonth }: Props) {
  const { mode, state } = useCalendar();
  const ref = useRef<HTMLDivElement>(null);
  const { cellProps, buttonProps, isSelected, isDisabled, formattedDate } =
    useCalendarCell({ date }, state, ref);

  const isOutsideMonth = !isSameMonth(currentMonth, date);

  const isSelectionStart =
    mode === "range" && state.highlightedRange?.start
      ? isSameDay(date, state.highlightedRange.start)
      : false;

  const isSelectionEnd =
    mode === "range" && state.highlightedRange?.end
      ? isSameDay(date, state.highlightedRange.end)
      : false;

  const isEdge =
    (mode === "single" && isSelected) || isSelectionStart || isSelectionEnd;
  const isMiddle = isSelected && !isEdge && mode === "range";

  const { focusProps, isFocusVisible } = useFocusRing();

  const merged = mergeProps(buttonProps, focusProps);

  // iOS 26 bug with pointer events: https://bugs.webkit.org/show_bug.cgi?id=214609
  const interactionProps =
    mode === "range" && IS_TOUCH_PRIMARY
      ? {
          ...merged,
          onPointerEnter: (event: ReactPointerEvent<HTMLDivElement>) => {
            if (!isPhantomPointer(event)) merged.onPointerEnter?.(event);
          },
          onPointerMove: (event: ReactPointerEvent<HTMLDivElement>) => {
            if (!isPhantomPointer(event)) merged.onPointerMove?.(event);
          },
        }
      : merged;

  return (
    <td
      {...cellProps}
      style={{
        position: "relative",
        zIndex: isFocusVisible ? 10 : 0,
      }}
    >
      <Box
        {...interactionProps}
        ref={ref}
        hidden={isOutsideMonth}
        width={["54px", null, "70px"]}
        height={["48px", null, "60px"]}
        padding={0.5}
      >
        <Box
          data-part="calendar-cell"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="sm"
          css={cellStyles}
          data-disabled={isDisabled || undefined}
          data-edge={isEdge || undefined}
          data-middle={isMiddle || undefined}
        >
          <Text variant="sm">{formattedDate}</Text>
        </Box>
      </Box>
    </td>
  );
}

const cellStyles = {
  cursor: "pointer",
  // Disabled
  "&[data-disabled]": {
    color: "text.disabled",
  },
  // Selection edge (single-mode selected OR range start/end)
  "&[data-edge]": {
    backgroundColor: "surface.brand",
    color: "text.brand",
  },
  // Range middle
  "&[data-middle]": {
    backgroundColor: "surface.subtle",
    color: "text",
  },
  // Hover for non-selected, non-disabled cells on devices that support hover
  "@media (hover: hover)": {
    "&:not([data-edge]):not([data-middle]):not([data-disabled]):hover": {
      backgroundColor: "surface.subtle",
      color: "text",
    },
  },
};
