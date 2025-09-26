import {
  ImageCardList,
  type ImageCardProps,
} from "~/features/portable-text/components/ImageCardList";
import type { LinkButtonSerializerProps } from "~/features/portable-text/serializers/LinkButtonSerializer";

export type ImageCardListSerializerProps = {
  value: {
    heading?: string;
    headingIcon?: string;
    subheading?: string;
    items: ImageCardProps[];
    readMoreButton?: LinkButtonSerializerProps["value"];
  };
};

export const ImageCardListSerializer = ({
  value,
}: ImageCardListSerializerProps) => (
  <ImageCardList
    heading={value.heading}
    headingIcon={value.headingIcon}
    subheading={value.subheading}
    items={value.items}
    readMoreButton={value.readMoreButton}
  />
);
