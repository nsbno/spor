import {
  Box,
  PopoverAnchor,
  useMultiStyleConfig,
  forwardRef,
  As,
} from "@chakra-ui/react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { useEffect } from "react";
import { AriaButtonProps } from "react-aria";
import { createTexts, useTranslation } from "..";

type CalendarTriggerButtonProps = AriaButtonProps<"button">;
export const CalendarTriggerButton = forwardRef<CalendarTriggerButtonProps, As>(
  ({ ...buttonProps }, ref) => {
    const { t } = useTranslation();
    const styles = useMultiStyleConfig("Datepicker", {});

    const { onPress, ...filteredButtonProps } = buttonProps;

    const handleOnPress = (event: KeyboardEvent) => {
      if (onPress) {
        if (event.key == "Enter" || event.key == " ")
        onPress(event as any)
      }
    }

    return (
      <PopoverAnchor>
        <Box
          ref={ref}
          as="button"
          type="button"
          aria-label={t(texts.openCalendar)}
          sx={styles.calendarTriggerButton}
          {...filteredButtonProps}
          onKeyUp={handleOnPress}
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
