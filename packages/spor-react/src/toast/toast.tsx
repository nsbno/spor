"use client";

import {
  BoxProps,
  createToaster,
  Portal,
  Stack,
  Toast,
  Toaster as ChakraToaster,
} from "@chakra-ui/react";

import { AlertIcon } from "@/alert/AlertIcon";
import { Button, CloseButton } from "@/button";

const toaster = createToaster({
  placement: "bottom",
  pauseOnPageIdle: true,
});

type Variant = "info" | "success" | "error";

type ToastAction = {
  label: string;
  onClick: () => void;
};

type ToastProps = {
  duration?: number;
  text: string;
  variant: Variant;
  id?: string;
  action?: ToastAction;
  closable?: boolean;
} & Pick<BoxProps, "width">;

export const createToast = ({
  text,
  variant,
  id,
  duration = 6000,
  width = "sm",
  action,
  closable = false,
}: ToastProps) =>
  toaster.create({
    description: text,
    type: variant,
    id: id ?? crypto.randomUUID(),
    duration,
    action,
    meta: { width },
    closable: closable,
  });

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root
            width={{ md: toast.meta?.width }}
            border="sm"
            borderColor={`outline.${toast.type}`}
            boxShadow="sm"
            role="alert"
          >
            <AlertIcon variant={toast.type as Variant} />
            <Stack gap="1" flex="1" maxWidth="100%">
              <Toast.Description>{toast.description}</Toast.Description>
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger onClick={toast.action.onClick}>
                <Button variant="ghost" size="xs">
                  {toast.action.label}
                </Button>
              </Toast.ActionTrigger>
            )}
            {toast.closable && (
              <Toast.CloseTrigger>
                <CloseButton size="xs" />
              </Toast.CloseTrigger>
            )}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
