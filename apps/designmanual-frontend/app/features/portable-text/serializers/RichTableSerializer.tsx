import {
  RichTable,
  type RichTableValue,
} from "~/features/portable-text/components/RichTable";

type RichTableSerializerProps = {
  value: RichTableValue;
};

export const RichTableSerializer = ({ value }: RichTableSerializerProps) => (
  <RichTable value={value} />
);
