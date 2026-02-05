"use client";

import {
  createToaster,
  Portal,
  Stack,
  Toast,
  Toaster as ChakraToaster,
} from "@chakra-ui/react";

import { AlertIcon } from "@/alert/AlertIcon";

const toaster = createToaster({
  placement: "bottom",
  pauseOnPageIdle: true,
});

type Variant = "info" | "success" | "error";

type ToastProps = {
  duration?: number;
  text: string;
  variant: Variant;
  id?: string;
};

export const createToast = ({
  text,
  variant,
  id,
  duration = 6000,
}: ToastProps) =>
  toaster.create({
    description: text,
    type: variant,
    id: id ?? crypto.randomUUID(),
    duration,
  });

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root width={{ md: "sm" }} role="alert">
            <AlertIcon variant={toast.type as Variant} />
            <Stack gap="1" flex="1" maxWidth="100%">
              <Toast.Description>{toast.description}</Toast.Description>
            </Stack>
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
