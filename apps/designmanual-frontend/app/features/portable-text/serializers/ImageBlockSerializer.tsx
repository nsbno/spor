import type { SanityImage } from "~/features/cms/sanity/query";
import { ImageBlock } from "~/features/portable-text/components/ImageBlock";

export type ImageGroupSerializerProps = {
  value: { images: SanityImage[]; caption?: string };
};

export function ImageBlockSerializer({ value }: ImageGroupSerializerProps) {
  return (
    <ImageBlock
      images={value.images.map((item) => ({ image: item }))}
      caption={value.caption}
    />
  );
}
