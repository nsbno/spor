"use client";
import { Box, useRecipe } from "@chakra-ui/react";

import { CloseFill18Icon } from "@vygruppen/spor-icon-react";
import React, { PropsWithChildren } from "react";
import { IconButton, createTexts, useTranslation } from "..";
import { BaseToast, BaseToastProps, ToastVariantProps } from "./BaseToast";
import { toastRecipe } from "../theme/recipes/toast";

type ClosableToastProps = BaseToastProps &
  PropsWithChildren<ToastVariantProps> & {
    close: () => void;
  };
/** A closable toast */
export const ClosableToast = ({
  children,
  close,
  variant,
  id,
}: ClosableToastProps) => {
  const recipe = useRecipe({ recipe: toastRecipe });
  const style = recipe({ variant });
  const { t } = useTranslation();
  return (
    <BaseToast variant={variant} id={id}>
      <Box flexGrow="1">{children}</Box>
      <IconButton
        css={style}
        variant="ghost"
        aria-label={t(texts.dismiss)}
        icon={<CloseFill18Icon />}
        onClick={close}
      />
    </BaseToast>
  );
};

const texts = createTexts({
  dismiss: {
    nb: "Lukk",
    nn: "Lukk",
    sv: "Dölj",
    en: "Dismiss",
  },
});
