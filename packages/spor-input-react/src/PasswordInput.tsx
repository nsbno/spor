import {
  Box,
  Button,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "@vygruppen/spor-i18n-react";

export type PasswordInputProps = Exclude<
  ChakraInputProps,
  "variant" | "size"
> & {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const PasswordInput = forwardRef<PasswordInputProps, "input">(
  ({ label, leftIcon, rightIcon, id, ...props }, ref) => {
    const Container = leftIcon || rightIcon ? InputGroup : Box;
    const { isOpen: isShowingPassword, onToggle } = useDisclosure();
    const { t } = useTranslation();
    return (
      <Container position="relative">
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
          <InputRightElement>
            <Button
              variant="ghost"
              type="button"
              onClick={onToggle}
              borderRadius="sm"
            >
              {isShowingPassword
                ? t(texts.hidePassword)
                : t(texts.showPassword)}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Container>
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
