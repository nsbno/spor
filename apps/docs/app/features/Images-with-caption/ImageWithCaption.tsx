import { Stack, Image, Text } from "@vygruppen/spor-react";

type ImageWithCaptionProps = {
  src: string;
  alt: string;
  caption?: React.ReactNode;
};

export const ImageWithCaption = ({
  src,
  alt,
  caption,
}: ImageWithCaptionProps) => {
  return (
    <Stack spacing={1.5}>
      <Image src={src} alt={alt} borderRadius="sm" boxShadow="sm" />
      <Text textStyle="xs">{caption}</Text>
    </Stack>
  );
};
