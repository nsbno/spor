import { Box } from "@chakra-ui/react";
import React, { forwardRef, RefObject, useRef } from "react";
import { DismissButton, Overlay, usePopover } from "react-aria";
import { SelectState } from "react-stately";

type PopoverProps = {
  children: React.ReactNode;
  state: SelectState<unknown>;
  triggerRef: React.RefObject<HTMLButtonElement>;
};
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, state, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>();
    const popoverRef = (ref ?? internalRef) as RefObject<HTMLDivElement>;
    const { popoverProps, underlayProps } = usePopover(
      {
        ...props,
        popoverRef,
      },
      state
    );

    return (
      <Overlay>
        <Box {...underlayProps} position="fixed" inset="0" />
        <Box
          {...popoverProps}
          ref={popoverRef}
          minWidth={props.triggerRef.current?.clientWidth ?? "auto"}
        >
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </Box>
      </Overlay>
    );
  }
);
