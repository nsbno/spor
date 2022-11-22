import { Box, PopoverAnchor, useMultiStyleConfig } from "@chakra-ui/react";
import { createTexts, Translations, useTranslation } from "@vygruppen/spor-i18n-react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import React, { useRef } from "react";
import { AriaButtonProps, useButton } from "react-aria";

type CalendarTriggerButtonProps = AriaButtonProps<"button">;
export const CalendarTriggerButton = (props: CalendarTriggerButtonProps) => {
  const { t } = useTranslation();
  const styles = useMultiStyleConfig("Datepicker", {});
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <PopoverAnchor>
      <Box
        ref={ref}
        as="button"
        type="button"
        aria-label={t(texts.openCalendar)}
        sx={styles.calendarTriggerButton}
        {...(buttonProps as any)}
      >
        <CalendarOutline24Icon />
      </Box>
    </PopoverAnchor>
  );
};

const texts = createTexts({
  openCalendar: {
    nb: "Åpne kalender",
    nn: "Åpne kalendar",
    sv: "Öppna kalender",
    en: "Open calendar",
  },
});
