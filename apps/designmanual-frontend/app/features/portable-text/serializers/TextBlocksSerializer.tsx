import type { PortableTextBlock } from "@portabletext/types";

import { TextBlocks } from "~/features/portable-text/components/TextBlocks";

type TextBlocksSerializerProps = {
  value: {
    heading?: string;
    subheading?: string;
    headingIcon?: string;
    items: { _type: "textBlock"; content: PortableTextBlock[] }[];
  };
};

export const TextBlocksSerializer = ({ value }: TextBlocksSerializerProps) => (
  <TextBlocks
    heading={value.heading}
    subheading={value.subheading}
    headingIcon={value.headingIcon}
    items={value.items}
  />
);
