import type { SanityImage } from "~/features/cms/sanity/query";

import { ImageBlockSquare } from "../components/ImageBlockSquare";

export type ImageGroupSerializerProps = {
  value: {
    images: SanityImage[];
    caption?: string;
    layout?: "left-heavy" | "right-heavy" | "equally-sized";
  };
};

export function ImageBlockSquareSerializer({
  value,
}: ImageGroupSerializerProps) {
  return (
    <ImageBlockSquare
      images={value.images.map((item) => ({ image: item }))}
      caption={value.caption}
      layout={value.layout}
    />
  );
}
