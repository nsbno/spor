"use client";
import {
  Flex,
  useRecipe,
  RecipeVariantProps,
  Icon,
  ConditionalValue,
} from "@chakra-ui/react";
import {
  ErrorOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React, { PropsWithChildren } from "react";
import { createTexts, useTranslation } from "..";
import { toastRecipe } from "../theme/components/toast";

export type ToastVariantProps = RecipeVariantProps<typeof toastRecipe>;

export type BaseToastProps = PropsWithChildren<ToastVariantProps> & {
  children: React.ReactNode;
  variant: ConditionalValue<"success" | "info" | "error">;
  id?: string;
};
/**
 * A basic toast component.
 **/
export const BaseToast = ({ children, variant, id }: BaseToastProps) => {
  const recipe = useRecipe({ recipe: toastRecipe });
  const style = recipe({ variant });
  return (
    <Flex css={style} id={id}>
      <ToastIcon variant={variant} />
      {children}
    </Flex>
  );
};

type ToastIconProps = Pick<BaseToastProps, "variant">;

/** Internal component for selecting the correct icon to show */
const ToastIcon = ({ variant }: ToastIconProps) => {
  const { t } = useTranslation();

  const ariaLabel = t(texts[variant as keyof typeof texts]);
  return (
    <Icon
      flexShrink={0}
      aria-label={ariaLabel}
      marginRight={1}
      marginY={1.5}
      color="darkGrey"
    >
      {getIcon(variant) as any}
    </Icon>
  );
};

const getIcon = (variant: BaseToastProps["variant"]) => {
  switch (variant) {
    case "info":
      return InformationOutline24Icon;
    case "success":
      return SuccessOutline24Icon;
    case "error":
      return ErrorOutline24Icon;
  }
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
