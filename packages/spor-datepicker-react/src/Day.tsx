import React from "react";
import { useDay } from "./DatepickerContext";
import { Button, GridItem, useStyles, useToken } from "@chakra-ui/react";

export const Day: React.VFC<{ dayLabel: string; date: Date }> = ({
  dayLabel,
  date,
}) => {
  const dayRef = React.useRef(null);
  const { onClick, onKeyDown, onMouseEnter, tabIndex, isSelected, isToday } =
    useDay(date, dayRef);

  const styles = useStyles();
  const [osloGrey] = useToken("colors", ["alias.osloGrey"]);

  if (!dayLabel) {
    return <div />;
  }

  return (
    <GridItem>
      <Button
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        tabIndex={tabIndex}
        type="button"
        ref={dayRef}
        __css={styles.button}
        bgColor={isSelected ? "alias.pine" : undefined}
        color={isSelected ? "alias.white" : undefined}
        border={isToday ? `solid 1px ${osloGrey}` : undefined}
      >
        {dayLabel}
      </Button>
    </GridItem>
  );
};
