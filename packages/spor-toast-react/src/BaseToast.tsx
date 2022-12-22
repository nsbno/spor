import { Flex, useStyleConfig } from "@chakra-ui/react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import {
  ErrorOutline24Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";

export type BaseToastProps = {
  children: React.ReactNode;
  variant: "success" | "info" | "error";
  id?: string;
};
/**
 * A basic toast component.
 *
 *
 **/
export const BaseToast = ({ children, variant, id }: BaseToastProps) => {
  const styles = useStyleConfig("Toast", { variant });
  return (
    <Flex sx={styles} id={id}>
      <ToastIcon variant={variant} />
      {children}
    </Flex>
  );
};

type ToastIconProps = Pick<BaseToastProps, "variant">;

/** Internal component for selecting the correct icon to show */
const ToastIcon = ({ variant }: ToastIconProps) => {
  const Icon = getIcon(variant);
  const { t } = useTranslation();
  return (
    <Icon
      flexShrink={0}
      aria-label={t(texts[variant])}
      marginRight={1}
      marginY={1.5}
      color="darkGrey"
    />
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
