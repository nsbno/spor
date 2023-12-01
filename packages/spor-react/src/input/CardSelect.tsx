import {
  Box,
  BoxProps,
  chakra,
  Flex,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import {
  DropdownDownFill18Icon,
  DropdownDownFill24Icon,
} from "@vygruppen/spor-icon-react";
import React, { useEffect, useRef, useState } from "react";
import { AriaPositionProps, useButton, useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";
import { Card } from "..";
import { Dialog } from "./Dialog";
import { Popover } from "./Popover";

type CardSelectProps = BoxProps & {
  /** The design of the trigger button.
   *
   * - `ghost` is a transparent button with text
   * - `outline` is a button with a border and text
   * - `card` is a button with a drop shadow (like a card) and text
   */
  variant: "ghost" | "outline" | "card";
  /** The size of the trigger button */
  size: "sm" | "md" | "lg";
  /** Whether the card select is open / active, if controlled */
  isOpen?: boolean;
  /** The default state of the card select. Defaults to false (closed) */
  defaultOpen?: boolean;
  /** Callback for when the card select opens or closes. */
  onToggle?: (isOpen: boolean) => void;
  /** The text of the trigger button */
  label: string;
  /** An optional trigger button icon, rendered to the left of the label */
  icon?: React.ReactNode;
  /** The content of the card select */
  children: React.ReactNode;
  /** The horizontalOffset of the popover card */
  crossOffset?: number;
  /** The position of the popover card */
  placement?: AriaPositionProps["placement"];
  /** Whether or not to show the chevron. Defaults to true */
  withChevron?: boolean;
  /** ColorScheme for different dark mode backgrounds */
  backgroundScheme?: "dark" | "green"
};

/**
 * A card select component.
 *
 * This component consists of a trigger button and a card select popover. The trigger button has several different variants and sizes, and can have an optional icon.
 *
 * ```tsx
 * <CardSelect label="Languages" variant="card" size="md">
 *   <LanguageSettings />
 * </CardSelect>
 * ```
 *
 * @see https://spor.vy.no/components/card-select
 */
export const CardSelect = forwardRef<CardSelectProps, "button">(
  (
    {
      variant,
      backgroundScheme,
      size,
      isOpen: externalIsOpen,
      defaultOpen = false,
      onToggle,
      label,
      icon,
      children,
      width = "fit-content",
      crossOffset = 0,
      placement = "bottom",
      withChevron = true,
      ...props
    },
    externalRef,
  ) => {
    const internalRef = useRef<HTMLButtonElement>(null);
    const triggerRef = (externalRef ??
      internalRef) as React.RefObject<HTMLButtonElement>;

    const state = useOverlayTriggerState({
      isOpen: externalIsOpen,
      onOpenChange: onToggle,
      defaultOpen,
    });
    const { triggerProps, overlayProps } = useOverlayTrigger(
      { type: "dialog" },
      state,
      triggerRef,
    );

    const { buttonProps } = useButton(triggerProps, triggerRef);

    const styles = useMultiStyleConfig("CardSelect", { variant, size, backgroundScheme });
    useForceRerender(state.isOpen);

    const ChevronIcon =
      size === "sm" ? DropdownDownFill18Icon : DropdownDownFill24Icon;

    return (
      <Box {...props}>
        <chakra.button
          type="button"
          ref={triggerRef}
          sx={styles.trigger}
          {...buttonProps}
          width={width}
          data-attachable
        >
          <Flex gap={1.5} alignItems="center">
            {icon}
            <Box as="span">{label}</Box>
            {withChevron ? (
              <ChevronIcon
                transform={state.isOpen ? "rotate(180deg)" : "none"}
              />
            ) : null}
          </Flex>
        </chakra.button>
        {state.isOpen && (
          <Popover
            state={state}
            triggerRef={triggerRef}
            offset={size === "sm" ? 6 : 12}
            crossOffset={crossOffset}
            placement={placement}
            
          >
            <Card
              backgroundScheme={backgroundScheme}
              colorScheme="white"
              size="lg"
              sx={styles.card}
              {...overlayProps}
            >
              <Dialog aria-label={label}>{children}</Dialog>
            </Card>
          </Popover>
        )}
      </Box>
    );
  },
);

/**
 * Hold my beer.
 *
 * This is a workaround for a "bug" in react-aria where the overlay doesn't
 * calculate the placement correctly for some reason.
 *
 * This is a hack, which forces React to rerender the component one extra time
 * after the state changes from closed to open.
 *
 * There is probably a better way to do this, but I could not come up with one.
 */
function useForceRerender(shouldRerender: boolean) {
  const [_, update] = useState(false);
  useEffect(() => {
    if (shouldRerender) {
      update((x) => !x);
    }
  }, [shouldRerender]);
}
