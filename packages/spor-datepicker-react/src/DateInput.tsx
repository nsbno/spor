import { CalendarOutline24Icon } from "@vygruppen/spor-icon-react/tmp";
import { Input } from "@vygruppen/spor-input-react";
import React from "react";
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
import { DatepickerProps } from "./Datepicker";
import { useTranslation } from "@vygruppen/spor-i18n-react";

export const DateInput: React.VFC<DatepickerProps> = ({ variant }) => {
  const { selectedDate, setSelectedDate } = useDatepicker();
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <InputGroup>
      <Flex>
        {variant === "mobile" ? (
          <>
            <PopoverAnchor>
              <Input
                label={t(texts.date)}
                value={selectedDate?.toLocaleDateString()}
                onChange={(event) => {
                  setSelectedDate(new Date(event.target.value));
                }}
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
              onChange={(event) => {
                setSelectedDate(new Date(event.target.value));
              }}
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
