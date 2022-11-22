import {
  Button,
  forwardRef,
  Input as ChakraInput,
  useDisclosure,
} from "@chakra-ui/react";
import { createTexts, useTranslation } from "@vygruppen/spor-i18n-react";
import React from "react";
import {
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from ".";

export type PasswordInputProps = InputProps;
export const PasswordInput = forwardRef<PasswordInputProps, "input">(
  ({ leftIcon, id, label, ...props }, ref) => {
    const { isOpen: isShowingPassword, onToggle } = useDisclosure();
    const { t } = useTranslation();
    return (
      <InputGroup position="relative">
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <ChakraInput
          {...props}
          placeholder=" " // This is needed to make the label work as expected
          type={isShowingPassword ? "text" : "password"}
          pr={10}
          pl={leftIcon ? 7 : undefined}
          ref={ref}
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
            mr={1}
          >
            {isShowingPassword ? t(texts.hidePassword) : t(texts.showPassword)}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }
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
