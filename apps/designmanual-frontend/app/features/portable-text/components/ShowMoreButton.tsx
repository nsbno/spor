import {
  Button,
  Center,
  createTexts,
  useTranslation,
} from "@vygruppen/spor-react";

type ShowMoreButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function ShowMoreButton({ isOpen, onToggle }: ShowMoreButtonProps) {
  const { t } = useTranslation();

  return (
    <Center>
      <Button variant="tertiary" size="md" onClick={onToggle}>
        {t(isOpen ? texts.showLess : texts.showAll)}
      </Button>
    </Center>
  );
}

const texts = createTexts({
  showAll: {
    nb: "Vis alle",
    nn: "Vis alle",
    en: "Show all",
    sv: "Visa alla",
  },
  showLess: {
    en: "Show less",
    nb: "Vis mindre",
    nn: "Vis mindre",
    sv: "Visa mindre",
  },
});
