import type { PortableTextBlock } from "@portabletext/types";

import { TextBlock } from "~/features/portable-text/components/TextBlock";

type TextBlockSerializerProps = {
  value: {
    _type: "textBlock";
    _key: string;
    content: PortableTextBlock[];
  };
};

export const TextBlockSerializer = ({ value }: TextBlockSerializerProps) => {
  return <TextBlock textBlock={value} />;
};
