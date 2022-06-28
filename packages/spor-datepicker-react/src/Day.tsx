import { Box, Button, GridItem, useStyles, useToken } from "@chakra-ui/react";
import React from "react";
import { useDay } from "./DatepickerContext";

type DayProps = {
  dayLabel: string;
  date: Date;
  isDisabled?: boolean;
};
export const Day = ({ dayLabel, date, isDisabled = false }: DayProps) => {
  const dayRef = React.useRef(null);
  const { onClick, onKeyDown, onMouseEnter, tabIndex, isSelected, isToday } =
    useDay(date, dayRef);

  const styles = useStyles();
  const [osloGrey] = useToken("colors", ["alias.osloGrey"]);

  if (!dayLabel) {
    return <Box />;
  }

  return (
    <GridItem>
      <Button
        aria-selected={isSelected}
        data-is-selected={isSelected}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
        ref={dayRef}
        __css={styles.button}
        border={isToday ? `solid 1px ${osloGrey}` : undefined}
        disabled={isDisabled}
      >
        {dayLabel}
      </Button>
    </GridItem>
  );
};
