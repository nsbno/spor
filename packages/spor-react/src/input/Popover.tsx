"use client";
import { Box } from "@chakra-ui/react";
import React, { forwardRef, useRef } from "react";
import {
  AriaPopoverProps,
  DismissButton,
  Overlay,
  usePopover,
} from "react-aria";
import ReactDOM from "react-dom";
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
  /**
   * Whether or not the list should flip to the opposite side of the trigger if there is not enough space.
   * Defaults to false.
   */
  shouldFlip?: boolean;
  /**
   * Whether the popover is non-modal, i.e. elements outside the popover may be interacted with by assistive technologies.
   * Most popovers should not use this option as it may negatively impact the screen reader experience. Only use with components such as combobox, which are designed to handle this situation carefully.
   *
   * Defaults to false.
   */
  isNonModal?: boolean;
  /** Whether or not the popover renders a backdrop that stops the user from interacting with background elements
   *
   * Defaults to true
   */
  hasBackdrop?: boolean;
  /** The minimum padding required between the popover and the surrounding container
   *
   * Defaults to 12 (the same as React Aria's default)
   */
  containerPadding?: number;
};
/**
 * Internal popover component.
 *
 * Used to render accessible popover content, only used in ComboBox.
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      state,
      triggerRef,
      offset = 0,
      crossOffset = 0,
      placement = "bottom",
      shouldFlip = false,
      isNonModal = false,
      hasBackdrop = true,
      containerPadding = 12,
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const popoverRef = ref ?? (internalRef as any);

    const { popoverProps, underlayProps } = usePopover(
      {
        triggerRef,
        popoverRef,
        offset,
        crossOffset,
        placement,
        shouldFlip,
        isNonModal,
        containerPadding,
      },
      state,
    );

    const popoverBox = (
      <Box
        {...popoverProps}
        ref={popoverRef}
        minWidth={triggerRef.current?.clientWidth ?? "auto"}
        position="absolute"
        zIndex={1501}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </Box>
    );

    if (isNonModal) {
      // Render in a portal to ensure it does not take up semantic space
      if (globalThis.window !== undefined && typeof document !== "undefined") {
        return ReactDOM.createPortal(popoverBox, document.body);
      }
      return popoverBox;
    }
    return (
      <Overlay>
        {hasBackdrop && <Box {...underlayProps} position="fixed" inset="0" />}
        {popoverBox}
      </Overlay>
    );
  },
);
Popover.displayName = "Popover";
