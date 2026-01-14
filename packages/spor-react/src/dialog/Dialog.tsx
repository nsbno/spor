"use client";
import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import * as React from "react";

import { CloseButton } from "../button";

interface DialogContentProps extends ChakraDialog.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
  children?: React.ReactNode;
}

export const DialogContent = ({
  ref,
  ...props
}: DialogContentProps & {
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && <ChakraDialog.Backdrop />}
      <ChakraDialog.Positioner>
        <ChakraDialog.Content ref={ref} {...rest} asChild={false}>
          {children}
        </ChakraDialog.Content>
      </ChakraDialog.Positioner>
    </Portal>
  );
};
DialogContent.displayName = "DialogContent";

export const DialogCloseTrigger = function DialogCloseTrigger({
  ref,
  ...props
}: ChakraDialog.CloseTriggerProps & {
  ref?: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <ChakraDialog.CloseTrigger ref={ref} position="absolute" {...props} asChild>
      <CloseButton size="md" />
    </ChakraDialog.CloseTrigger>
  );
};

export const DialogRoot = ChakraDialog.Root;
export const DialogFooter = ChakraDialog.Footer;
export const DialogHeader = ChakraDialog.Header;
export const DialogBody = ChakraDialog.Body;
export const DialogBackdrop = ChakraDialog.Backdrop;
export const DialogTitle = ChakraDialog.Title;
export const DialogDescription = ChakraDialog.Description;
export const DialogTrigger = ChakraDialog.Trigger;
export const DialogActionTrigger = ChakraDialog.ActionTrigger;
