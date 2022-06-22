import {
  Flex,
  InputGroup,
  InputRightAddon,
  PopoverAnchor,
  PopoverTrigger,
  useStyles,
} from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react";
import { Input } from "@vygruppen/spor-input-react";
import React, { ChangeEventHandler } from "react";
import { DatepickerStylingProps } from "./Datepicker";
import { isValidDateObject } from "./datepicker-utils";
import { useDatepicker } from "./DatepickerContext";

export const DateInput = ({ variant }: DatepickerStylingProps) => {
  const { selectedDate, setSelectedDate } = useDatepicker();
  const styles = useStyles();
  const { t } = useTranslation();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const date = new Date(event.target.value);
    if (isValidDateObject(date)) {
      setSelectedDate(date);
    }
  };

  return (
    <InputGroup>
      <Flex>
        {variant === "mobile" ? (
          <>
            <PopoverAnchor>
              <Input
                label={t(texts.date)}
                value={selectedDate?.toLocaleDateString()}
                onChange={handleChange}
                __css={styles.input}
              />
            </PopoverAnchor>
            <InputRightAddon>
              <PopoverTrigger>
                <IconButton
                  variant="additional"
                  icon={<CalendarOutline24Icon />}
                  aria-label={t(texts.calendar)}
                  __css={styles.calendarButton}
                />
              </PopoverTrigger>
            </InputRightAddon>
          </>
        ) : (
          <PopoverTrigger>
            <Input
              leftIcon={<CalendarOutline24Icon />}
              label={t(texts.date)}
              value={selectedDate?.toLocaleDateString()}
              onChange={handleChange}
              __css={styles.input}
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
