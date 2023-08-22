import {
  Box,
  PopoverAnchor,
  useMultiStyleConfig,
  forwardRef,
  As,
} from "@chakra-ui/react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React from "react";
import { AriaButtonProps, useButton } from "react-aria";
import { createTexts, useTranslation } from "..";

type CalendarTriggerButtonProps = AriaButtonProps<"button">
export const CalendarTriggerButton = forwardRef<CalendarTriggerButtonProps, As>(
  ({ ...buttonProps }, ref) => {
    const { t } = useTranslation();
    const styles = useMultiStyleConfig("Datepicker", {});

    console.log(buttonProps)
    //const { onPress } = buttonProps
    //const { onKeyDown } = buttonProps

    return (
      <PopoverAnchor>
        <Box
          ref={ref}
          as="button"
          aria-label={t(texts.openCalendar)}
          sx={styles.calendarTriggerButton}
          //onPress={() => {}}
          //onKeyDown={() => {}}
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
