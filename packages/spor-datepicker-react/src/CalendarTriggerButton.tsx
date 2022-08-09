import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
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
  );
};

const texts = {
  openCalendar: {
    nb: "Åpne kalender",
    sv: "Öppna kalender",
    en: "Open calendar",
  },
};
