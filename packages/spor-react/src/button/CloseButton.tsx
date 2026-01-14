"use client";

import {
  CloseFill18Icon,
  CloseFill24Icon,
  CloseFill30Icon,
} from "@vygruppen/spor-icon-react";

import { createTexts, useTranslation } from "../i18n";
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
export const CloseButton = ({
  ref,
  size = "sm",
  ...props
}: CloseButtonProps & {
  ref?: React.RefObject<HTMLButtonElement | null>;
}) => {
  const { t } = useTranslation();
  return (
    <IconButton
      variant="ghost"
      icon={<CloseIcon size={size} />}
      size={size}
      aria-label={props["aria-label"] || t(texts.close)}
      {...props}
      ref={ref}
    />
  );
};
CloseButton.displayName = "CloseButton";

const CloseIcon = ({ size }: { size: CloseButtonProps["size"] }) => {
  switch (size) {
    case "xs":
    case "sm": {
      return <CloseFill18Icon />;
    }
    case "md": {
      return <CloseFill24Icon />;
    }
    case "lg": {
      return <CloseFill30Icon />;
    }
    default: {
      return <CloseFill18Icon />;
    }
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
