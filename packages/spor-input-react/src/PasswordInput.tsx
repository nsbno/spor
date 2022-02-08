import { Button, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import React from "react";
import { Input, InputGroup, InputProps, InputRightElement } from ".";

export type PasswordInputProps = InputProps;
export const PasswordInput = (props: PasswordInputProps) => {
  const { isOpen: isShowingPassword, onToggle } = useDisclosure();
  const { t } = useTranslation();
  return (
    <InputGroup>
      <Input
        {...props}
        type={isShowingPassword ? "text" : "password"}
        pr="4.5em !important"
      />
      <InputRightElement width="4.5em">
        <Button
          variant="ghost"
          type="button"
          px={4}
          onClick={onToggle}
          borderRadius="sm"
        >
          {isShowingPassword ? t(texts.hidePassword) : t(texts.showPassword)}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

const texts = {
  showPassword: {
    nb: "Vis",
    en: "Show",
    sv: "Visa",
  },
  hidePassword: {
    nb: "Skjul",
    en: "Hide",
    sv: "Dölj",
  },
};
