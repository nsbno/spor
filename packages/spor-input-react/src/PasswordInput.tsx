import {
  Button,
  Input as ChakraInput,
  FormLabel,
  forwardRef,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import React from "react";
import { Input, InputGroup, InputProps, InputRightElement } from ".";

export type PasswordInputProps = Exclude<InputProps, "variant" | "size"> & {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const PasswordInput = forwardRef<PasswordInputProps, "input">(
  ({ label, leftIcon, rightIcon, id, ...props }, ref) => {
    const { isOpen: isShowingPassword, onToggle } = useDisclosure();
    const { t } = useTranslation();
    return (
      <InputGroup position="relative">
        <ChakraInput
          {...props}
          type={isShowingPassword ? "text" : "password"}
          id={id}
          ref={ref}
          placeholder=" "
        />
        <FormLabel htmlFor={id} pointerEvents="none">
          {label}
        </FormLabel>
        <InputRightElement width="fit-content">
          <Button
            variant="ghost"
            type="button"
            onClick={onToggle}
            borderRadius="sm"
          >
            {isShowingPassword ? t(texts.hidePassword) : t(texts.showPassword)}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }
);

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
