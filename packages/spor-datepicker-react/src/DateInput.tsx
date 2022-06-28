import {
  Flex,
  InputGroup,
  InputRightAddon,
  PopoverAnchor,
  PopoverTrigger,
  useBreakpoint,
  useFormControl,
  useStyles,
} from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import { Input } from "@vygruppen/spor-input-react";
import React, { ChangeEventHandler } from "react";
import { isValidDateObject } from "./datepicker-utils";
import { useDatepicker } from "./DatepickerContext";

export const DateInput = () => {
  const { selectedDate, setSelectedDate } = useDatepicker();
  const styles = useStyles();
  const { t } = useTranslation();
  const formControlProps = useFormControl({});

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const date = new Date(event.target.value);
    if (isValidDateObject(date)) {
      setSelectedDate(date);
    }
  };

  const breakpoint = useBreakpoint("base");

  return (
    <InputGroup>
      <Flex>
        {breakpoint === "base" ? (
          <>
            <PopoverAnchor>
              <Input
                aria-invalid={formControlProps["aria-invalid"]}
                label={t(texts.date)}
                value={selectedDate?.toLocaleDateString()}
                onChange={handleChange}
                sx={styles.input}
              />
            </PopoverAnchor>
            <InputRightAddon>
              <PopoverTrigger>
                <IconButton
                  variant="additional"
                  icon={<CalendarOutline24Icon />}
                  aria-label={t(texts.calendar)}
                  sx={styles.calendarButton}
                />
              </PopoverTrigger>
            </InputRightAddon>
          </>
        ) : (
          <PopoverTrigger>
            <Input
              aria-invalid={formControlProps["aria-invalid"]}
              leftIcon={<CalendarOutline24Icon />}
              label={t(texts.date)}
              value={selectedDate?.toLocaleDateString()}
              onChange={handleChange}
              sx={styles.input}
            />
          </PopoverTrigger>
        )}
      </Flex>
    </InputGroup>
  );
};

const texts = {
  date: {
    nb: "Dato",
    sv: "Datum",
    en: "Date",
  },
  calendar: {
    nb: "Kalender",
    sv: "Kalender",
    en: "Calendar",
  },
};
