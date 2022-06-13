import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react/tmp";
import { Input } from "@vygruppen/spor-input-react";
import React, { ChangeEventHandler } from "react";
import { useDatepicker } from "./DatepickerContext";
import {
  Flex,
  InputGroup,
  InputRightAddon,
  PopoverAnchor,
  PopoverTrigger,
  useStyles,
} from "@chakra-ui/react";
import { IconButton } from "@vygruppen/spor-button-react";
import { DatepickerStylingProps } from "./Datepicker";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import isValid from "date-fns/isValid";

export const DateInput: React.VFC<DatepickerStylingProps> = ({ variant }) => {
  const { selectedDate, setSelectedDate } = useDatepicker();
  const styles = useStyles();
  const { t } = useTranslation();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const date = new Date(event.target.value);
    if (isValid(date)) {
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
