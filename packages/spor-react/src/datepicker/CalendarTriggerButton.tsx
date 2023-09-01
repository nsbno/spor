import {
  As,
  Box,
  PopoverAnchor,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { RefObject } from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { createTexts, useTranslation } from "..";

type CalendarTriggerButtonProps = AriaButtonProps<"button">;
export const CalendarTriggerButton = forwardRef<CalendarTriggerButtonProps, As>(
  ({ onClick, ...props }, ref) => {
    const { t } = useTranslation();
    const styles = useMultiStyleConfig("Datepicker", {});

    const { buttonProps } = useButton(
      props,
      ref as RefObject<HTMLButtonElement>
    );

    return (
      <PopoverAnchor>
        <Box
          ref={ref}
          as="button"
          type="button"
          aria-label={t(texts.openCalendar)}
          sx={styles.calendarTriggerButton}
          {...buttonProps}
        >
          <CalendarOutline24Icon />
        </Box>
      </PopoverAnchor>
    );
  }
);

const texts = createTexts({
  openCalendar: {
    nb: "Åpne kalender",
    nn: "Åpne kalendar",
    sv: "Öppna kalender",
    en: "Open calendar",
  },
});
