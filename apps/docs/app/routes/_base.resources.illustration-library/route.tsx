import { useLoaderData } from "@remix-run/react";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import {
  DownloadOutline18Icon,
  DownloadOutline24Icon,
  InformationOutline18Icon,
} from "@vygruppen/spor-icon-react";
import {
  Badge,
  Box,
  Brand,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  NativeSelect,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SearchInput,
  Separator,
  SimpleGrid,
  slugify,
  StaticCard,
  Text,
  useColorMode,
} from "@vygruppen/spor-react";
import { useMemo, useState } from "react";

import { PortableText } from "~/features/portable-text/PortableText";
import { useBrand } from "~/utils/brand";
import { getClient } from "~/utils/sanity/client";
import { urlBuilder } from "~/utils/sanity/utils";

type SanityResponse = {
  illustrations: {
    _id: string;
    title: string;
    imageLightBackground: SanityAsset;
    imageDarkBackground: SanityAsset;
    size: "small" | "medium" | "large";
    tags: string[];
    description: string;
  }[];
  article: {
    title: string;
    slug: string;
    introduction?: any[];
    category?: {
      title: string;
      slug: string;
    };
    resourceLinks?: {
      linkType: "figma";
      url: string;
    };
    content: any[];
  };
};

export const loader = async () => {
  const client = getClient();
  const query = `
  {
    "illustrations": *[_type == "illustration"] | order(title asc) {
      _id,
      title,
      imageLightBackground,
      imageDarkBackground,
      tags,
      size,
      description
    },
  "article": *[_type == "article" && slug.current == "illustration-library"][0] {
    _id,
    title,
    "slug": slug.current,
    introduction,
    category->{
      title,
      "slug": slug.current
    },
    resourceLinks[linkType == "figma"],
    content[]{
      _type == 'reference' => @->,
      _type != 'reference' => @,
    }
  }
}`;
  const { illustrations, article } = (await client.fetch(
    query,
  )) as SanityResponse;
  return { illustrations, article };
};

export default function IllustrationLibraryPage() {
  const { illustrations, article } = useLoaderData<typeof loader>();
  const [searchValue, setSearchValue] = useState("");
  const { colorMode } = useColorMode();
  const [size, setSize] = useState("all");
  const brand = useBrand();

  const matchingIllustrations = useMemo(() => {
    const normalizedSearchValue = searchValue.toLowerCase().trim();
    return illustrations
      .filter((illustration) => size === "all" || illustration.size === size)
      .filter(
        (illustration) =>
          illustration.title.toLowerCase().includes(normalizedSearchValue) ||
          illustration.tags?.includes(normalizedSearchValue),
      );
  }, [illustrations, searchValue, size]);

  return (
    <Box>
      <Badge colorPalette={brand === Brand.CargoNet ? "yellow" : "green"}>
        {article.category?.title}
      </Badge>
      <Heading as="h1" variant="xxl" marginBottom={1}>
        {article.title}
      </Heading>
      {article.introduction && (
        <Box marginBottom={2}>
          <PortableText value={article.introduction} />
        </Box>
      )}
      {article.content && (
        <Box marginBottom={4}>
          <PortableText value={article.content} />
        </Box>
      )}
      <Button
        variant="primary"
        size="lg"
        width="fit-content"
        as="a"
        download="illustrations.zip"
        href="/resources/illustration-library/all"
        leftIcon={<DownloadOutline24Icon />}
      >
        Download all illustrations
      </Button>
      <Separator marginY={4} />
      <Flex marginBottom={5} gap={2}>
        <Box flex={1}>
          <SearchInput
            label="Find illustration"
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
            width="100%"
          />
        </Box>
        <Box>
          <NativeSelect
            label="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            width="fit-content"
          >
            <option value="all">All</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </NativeSelect>
        </Box>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} gap={2}>
        {matchingIllustrations.map((illustration) => (
          <StaticCard
            colorScheme="white"
            key={illustration._id}
            padding={2}
            border="1px solid"
            borderColor="silver"
            position={"relative"}
          >
            <Flex flexDirection="column" height="100%">
              <Flex gap={1} alignItems="center" flexDirection={"column"}>
                <Text variant="sm">{illustration.title}</Text>
                <Popover>
                  <PopoverTrigger>
                    <InformationOutline18Icon aria-label="Informasjon" />
                  </PopoverTrigger>
                  <PopoverContent>{illustration.description}</PopoverContent>
                </Popover>
                <Image
                  src={
                    colorMode === "light"
                      ? urlBuilder
                          .image(illustration.imageLightBackground)
                          .url() || ""
                      : urlBuilder
                          .image(illustration.imageDarkBackground)
                          .url() || ""
                  }
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
            <Box position={"absolute"} bottom="0" right="0">
              <IconButton
                variant="ghost"
                size="sm"
                icon={<DownloadOutline18Icon />}
                as="a"
                download={`${slugify(illustration.title)}.svg`}
                href={
                  colorMode === "light"
                    ? urlBuilder
                        .image(illustration.imageLightBackground)
                        .forceDownload(`${slugify(illustration.title)}.svg`)
                        .url()
                    : urlBuilder
                        .image(illustration.imageDarkBackground)
                        .forceDownload(`${slugify(illustration.title)}.svg`)
                        .url()
                }
                aria-label="Download SVG"
                title="Download SVG"
              />
            </Box>
          </StaticCard>
        ))}
      </SimpleGrid>
    </Box>
  );
}
