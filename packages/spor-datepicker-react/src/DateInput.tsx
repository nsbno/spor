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

export const DateInput: React.VFC<DatepickerProps> = ({ variant }) => {
  const { selectedDate, setSelectedDate } = useDatepicker();
  const styles = useStyles();

  return (
    <InputGroup>
      <Flex>
        {variant === "mobile" ? (
          <>
            <PopoverAnchor>
              <Input
                label="dato"
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
                  aria-label="Kalender"
                  sx={styles.calendarButton}
                />
              </PopoverTrigger>
            </InputRightAddon>
          </>
        ) : (
          <PopoverTrigger>
            <Input
              leftIcon={<CalendarOutline24Icon />}
              label="dato"
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
