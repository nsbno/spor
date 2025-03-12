"use client";

import React from "react";

import {
  Toaster as ChakraToaster,
  Icon,
  Portal,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react";
import { createTexts, useTranslation } from "@/i18n";
import {
  InformationFill18Icon,
  SuccessFill18Icon,
  ErrorFill18Icon,
} from "@vygruppen/spor-icon-react";

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
  duration = 200000,
}: ToastProps) =>
  toaster.create({
    description: text,
    type: variant,
    id,
    duration,
  });

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => (
          <Toast.Root width={{ md: "sm" }} role="alert">
            <ToastIcon variant={toast.type as Variant} />
            <Stack gap="1" flex="1" maxWidth="100%">
              <Toast.Description>{toast.description}</Toast.Description>
            </Stack>
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};

const iconComponents = {
  info: InformationFill18Icon,
  success: SuccessFill18Icon,
  error: ErrorFill18Icon,
} as const;

const ToastIcon = ({ variant }: { variant: Variant }) => {
  const { t } = useTranslation();

  const ariaLabel = t(texts[variant as keyof typeof texts]);

  const IconComponent = iconComponents[variant];

  if (!IconComponent) return null;

  return (
    <Icon aria-label={ariaLabel}>
      <IconComponent />
    </Icon>
  );
};

const texts = createTexts({
  info: {
    nb: "Informasjon",
    nn: "Informasjon",
    sv: "Information",
    en: "Information",
  },
  success: {
    nb: "Suksess",
    nn: "Suksess",
    sv: "Succé",
    en: "Success",
  },
  error: {
    nb: "Feil",
    nn: "Feil",
    sv: "Error",
    en: "Error",
  },
});
