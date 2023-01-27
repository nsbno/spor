import { forwardRef } from "@chakra-ui/react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import {
  CloseFill18Icon,
  CloseFill24Icon,
  CloseFill30Icon,
} from "@vygruppen/spor-icon-react";
import React from "react";
import { IconButton, IconButtonProps } from "./IconButton";

export type CloseButtonProps = Omit<
  IconButtonProps,
  "variant" | "aria-label"
> & {
  /** Defaults to a localized version of "close" */
  "aria-label"?: string;
};

/**
 * A close button component.
 *
 * This button closes stuff, like modals and dialogs.
 *
 * ```tsx
 * <CloseButton onClick={closeModal} />
 * ```
 */
export const CloseButton = forwardRef<CloseButtonProps, "button">(
  ({ size = "sm", ...props }, ref) => {
    const { t } = useTranslation();
    return (
      <IconButton
        ref={ref}
        variant="ghost"
        icon={getIcon(size)}
        size={size}
        aria-label={props["aria-label"] || t(texts.close)}
        {...props}
      />
    );
  }
);

const getIcon = (size: CloseButtonProps["size"]) => {
  switch (size) {
    case "xs":
    case "sm":
      return <CloseFill18Icon />;
    case "md":
      return <CloseFill24Icon />;
    case "lg":
      return <CloseFill30Icon />;
  }
};

const texts = createTexts({
  close: {
    en: "Close",
    nb: "Lukk",
    nn: "Lukk",
    sv: "Stäng",
  },
});
