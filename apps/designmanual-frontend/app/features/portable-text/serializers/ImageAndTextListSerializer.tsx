import type { PortableTextBlock } from "@portabletext/types";

import type { SanityImage } from "~/features/cms/sanity/query";
import { ImageAndTextList } from "~/features/portable-text/components/ImageAndTextList";

type ImageAndTextProps = {
  _key?: string;
  image: { image: SanityImage; altText: string; attribution: string };
  content: PortableTextBlock[];
  listLayout: string;
  listDirection: string;
};

type ImageAndTextListSerializerProps = {
  value: {
    heading?: string;
    headingIcon?: string;
    description?: string;
    items: ImageAndTextProps[];
    layout: "image-then-text" | "text-then-image";
    direction: "horizontal" | "vertical";
  };
};

export const ImageAndTextListSerializer = ({
  value,
}: ImageAndTextListSerializerProps) => {
  return (
    <ImageAndTextList
      heading={value?.heading}
      description={value?.description}
      headingIcon={value?.headingIcon}
      items={value.items}
      layout={value.layout}
      direction={value.direction}
    />
  );
};
