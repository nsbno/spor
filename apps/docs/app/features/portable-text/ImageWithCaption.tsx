import { Flex, Image, Stack, useColorModeValue } from "@vygruppen/spor-react";
import { PortableText } from "./PortableText";

type ImageWithCaptionProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  alignment?: "left" | "center" | "right" | "none";
  caption?: any;
};

export const ImageWithCaption = ({
  src,
  alt,
  caption,
  aspectRatio,
  alignment,
}: ImageWithCaptionProps) => {
  const color = useColorModeValue("text.detail.light", "text.detail.dark");
  return (
    <Flex
      as="figure"
      marginTop={[3, 6]}
      flexDirection="column"
      alignItems={mapAlignmentToAlignItems(alignment)}
    >
      {src && <Image src={src} alt={alt || ""} sx={{ aspectRatio }} />}
      {caption && (
        <Stack
          as="figcaption"
          textStyle="xs"
          color={color}
          marginTop={1.5}
          textAlign={mapAlignmentToTextAlign(alignment)}
        >
          <PortableText value={caption} />
        </Stack>
      )}
    </Flex>
  );
};

const mapAlignmentToAlignItems = (
  alignment: ImageWithCaptionProps["alignment"],
) => {
  switch (alignment) {
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    case "center":
    default:
      return "center";
  }
};
const mapAlignmentToTextAlign = (
  alignment: ImageWithCaptionProps["alignment"],
) => {
  switch (alignment) {
    case "left":
      return "left";
    case "right":
      return "right";
    case "center":
    default:
      ["left", "center"];
  }
};
