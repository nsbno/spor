import { ColorCards } from "../components/ColorCardGrid";

type ColorCardsSerializerProps = {
  value: ColorCards;
};

export const ColorCardsSerializer = ({ value }: ColorCardsSerializerProps) => (
  <ColorCards
    items={value.items}
    titleOfBlock={value.titleOfBlock}
    headingIcon={value.headingIcon}
  />
);
