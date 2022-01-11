import { Button, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import { Input, InputProps } from "./Input";

type PasswordInputProps = InputProps;
export const PasswordInput = (props: PasswordInputProps) => {
  const { isOpen: isShowingPassword, onToggle } = useDisclosure();
  const { t } = useTranslation();
  return (
    <Input
      {...props}
      type={isShowingPassword ? "text" : "password"}
      rightElement={
        <Button
          variant="ghost"
          type="button"
          px={4}
          onClick={onToggle}
        >
          {isShowingPassword ? t(texts.hidePassword) : t(texts.showPassword)}
        </Button>
      }
    />
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
