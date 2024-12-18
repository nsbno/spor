"use client";

import { Button, useDisclosure } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Input, InputProps } from ".";
import { createTexts, useTranslation } from "..";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { open: isShowingPassword, onToggle } = useDisclosure();
    const { startElement, disabled, label } = props;
    const { t } = useTranslation();

    return (
      <Input
        ref={ref}
        {...props}
        type={isShowingPassword ? "text" : "password"}
        label={label}
        startElement={startElement && startElement}
        endElement={
          <Button
            variant="ghost"
            type="button"
            fontWeight="normal"
            size="sm"
            onClick={onToggle}
            borderRadius="sm"
            marginRight={1}
            disabled={disabled}
          >
            {isShowingPassword ? t(texts.hidePassword) : t(texts.showPassword)}
          </Button>
        }
      />
    );
  },
);

const texts = createTexts({
  showPassword: {
    nb: "Vis",
    nn: "Vis",
    en: "Show",
    sv: "Visa",
  },
  hidePassword: {
    nb: "Skjul",
    nn: "Skjul",
    en: "Hide",
    sv: "Dölj",
  },
});
