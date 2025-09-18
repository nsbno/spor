import { Cards } from "~/features/portable-text/components/Cards";

type CardSerializerProps = {
  value: Cards;
};

export const CardSerializer = ({ value }: CardSerializerProps) => (
  <Cards
    items={value.items}
    titleOfBlock={value.titleOfBlock}
    headingIcon={value.headingIcon}
    backgroundColor={value.backgroundColor}
  />
);
