import { DownloadOutline18Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  ClientOnly,
  Flex,
  IconButton,
  Image,
  Skeleton,
  slugify,
  StaticCard,
  Text,
  useColorMode,
} from "@vygruppen/spor-react";

import { urlBuilder } from "~/utils/sanity/utils";

import { SanityIllustration } from "./queries";

export const IllustationGrid = ({
  illustrations,
}: {
  illustrations: SanityIllustration[];
}) => {
  const { colorMode } = useColorMode();

  return illustrations.map((illustration) => {
    const imageUrl =
      colorMode === "light"
        ? illustration.imageLightBackground
        : illustration.imageDarkBackground;

    const downloadUrl = urlBuilder
      .image(imageUrl)
      .forceDownload(`${slugify(illustration.title)}.svg`)
      .url();

    return (
      <ClientOnly
        fallback={<Skeleton height="236px" borderRadius="md" />}
        key={illustration._id}
      >
        <StaticCard
          colorScheme="white"
          bg="bg"
          padding={2}
          border="1px solid"
          borderColor="outline"
          position="relative"
        >
          <Flex flexDirection="column" height="100%">
            <Flex gap={1} alignItems="center" flexDirection={"column"}>
              <Text variant="sm">{illustration.title}</Text>
              <Image
                src={urlBuilder.image(imageUrl).url()}
                alt={illustration.description}
                width="100%"
                minHeight={12}
                maxHeight={15}
                objectFit="contain"
                objectPosition="center"
                flex={1}
              />
            </Flex>
          </Flex>
          <Box position="absolute" bottom="1" right="1">
            <IconButton
              variant="ghost"
              size="sm"
              icon={<DownloadOutline18Icon />}
              as="a"
              download={`${slugify(illustration.title)}.svg`}
              href={downloadUrl}
              aria-label="Download SVG"
              title="Download SVG"
            />
          </Box>
        </StaticCard>
      </ClientOnly>
    );
  });
};
