import { Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "react-aria";
import { OverlayTriggerState } from "react-stately";

type PopoverProps = {
  /** The content to be shown as a popover */
  children: React.ReactNode;
  /** The internal state of the overlay trigger element.
   *
   * Get this from the useOverlayTriggerState hook or similar.
   */
  state: OverlayTriggerState;
  /** The reference to the trigger button for this overlay */
  triggerRef: React.RefObject<HTMLButtonElement>;
  /** The offset in pixels between the bottom of the trigger and the top of the popover */
  offset?: number;
  /** The cross-axis offset (left or right) of the popover, compared to the center of the trigger element  */
  crossOffset?: number;
  /** The position of the popover, relative to the popover.
   *
   * Defaults to "bottom"
   */
  placement?: AriaPopoverProps["placement"];
};
/**
 * Internal popover component.
 *
 * Used to render accessible popover content, like a  dropdown menu or a card select. Should not be used directly, but as a part of Spor components.
 */
export const Popover = ({
  children,
  state,
  triggerRef,
  offset = 0,
  crossOffset = 0,
  placement = "bottom",
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      triggerRef,
      popoverRef,
      offset,
      crossOffset,
      placement,
    },
    state
  );

  return (
    <Overlay>
      <Box {...underlayProps} position="fixed" inset="0" />
      <Box
        {...popoverProps}
        ref={popoverRef}
        minWidth={triggerRef.current?.clientWidth ?? "auto"}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </Box>
    </Overlay>
  );
};
