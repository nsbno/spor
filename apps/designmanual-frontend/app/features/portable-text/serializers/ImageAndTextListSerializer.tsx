import {
  ImageAndTextList,
  type ImageAndTextProps,
} from "~/features/portable-text/components/ImageAndTextList";

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
