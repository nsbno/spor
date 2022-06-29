import {
  BoxProps,
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
import React from "react";
import { parseDateString } from "./datepicker-utils";
import { useDatepicker } from "./DatepickerContext";

type DateInputProps = BoxProps;
export const DateInput = (props: DateInputProps) => {
  const { dateString, onDateStringChange, onDateSelected } =
    useControlledDatepicker();
  const styles = useStyles();
  const { t } = useTranslation();
  const breakpoint = useBreakpoint("base");
  const formControlProps = useFormControl({});

  return (
    <InputGroup height={props.height}>
      {breakpoint === "base" ? (
        <>
          <PopoverAnchor>
            <Input
              aria-invalid={formControlProps["aria-invalid"]}
              label={t(texts.date)}
              value={dateString}
              onChange={(e) => onDateStringChange(e.target.value)}
              onBlur={onDateSelected}
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
            value={dateString}
            onChange={(e) => onDateStringChange(e.target.value)}
            onBlur={onDateSelected}
            sx={styles.input}
          />
        </PopoverTrigger>
      )}
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

const useControlledDatepicker = () => {
  const { selectedDate, setSelectedDate, onDateSelect } = useDatepicker();
  const formattedDate = selectedDate?.toLocaleDateString("nb-NO");
  const [dateString, setDateString] = React.useState(formattedDate);
  React.useEffect(() => {
    if (formattedDate) {
      setDateString(formattedDate);
    }
  }, [formattedDate]);

  return {
    dateString,
    onDateStringChange: setDateString,
    onDateSelected: () => {
      const newDate = parseDateString(dateString);
      if (newDate) {
        setSelectedDate(newDate);
        onDateSelect(newDate);
      }
    },
  };
};
