import { useButton } from "@react-aria/button";
import { Button, IconButton } from "@vygruppen/spor-button-react";
import React, { useRef } from "react";
import { AriaButtonProps } from "react-aria";

type CalendarButtonProps = AriaButtonProps<"button"> & {
  icon: React.ReactElement;
  "aria-label": string;
};
export function CalendarButton({
  icon,
  "aria-label": ariaLabel,
  ...rest
}: CalendarButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(rest, ref);
  return (
    <IconButton
      {...buttonProps}
      ref={ref}
      icon={icon}
      aria-label={ariaLabel}
      size="sm"
      variant="ghost"
    >
      {rest.children}
    </IconButton>
  );
}

type FieldButtonProps = AriaButtonProps<"button"> & { isPressed?: boolean };
export function FieldButton(props: FieldButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  return (
    <Button
      {...buttonProps}
      ref={ref}
      variant="ghost"
      size="sm"
      height="1.75rem"
      mr="2"
    >
      {props.children}
    </Button>
  );
}
