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
  Grid,
  GridItem,
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
  Skeleton,
  slugify,
  StaticCard,
  Text,
  useColorMode,
} from "@vygruppen/spor-react";
import React from "react";
import { useMemo, useState } from "react";
import { Await, LoaderFunctionArgs, useLoaderData } from "react-router";

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
    illustrationType:
      | "transparent-bg"
      | "sticker-white-bg"
      | "sticker-peel-off";
    tags: string[];
    description: string;
  }[];
  article: {
    title: string;
    slug: string;
    introduction?: unknown[];
    category?: {
      title: string;
      slug: string;
    };
    resourceLinks?: {
      linkType: "figma";
      url: string;
    };
    content: unknown[];
  };
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const client = getClient();
  const draftMode =
    new URL(request.url).searchParams.get("sanity-preview-perspective") ===
    "drafts";

  const illustrationsQuery = `*[_type == "illustration"] | order(title asc) {
    _id,
    title,
    imageLightBackground,
    imageDarkBackground,
    tags,
    size,
    description,
    illustrationType
  }`;

  const articleQuery = `*[_type == "article" && slug.current == "illustration-library"][0] {
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
  }`;

  const article = (await client.fetch(
    articleQuery,
    {},
    { perspective: draftMode ? "previewDrafts" : "published" },
  )) as SanityResponse["article"];

  const illustrationsPromise = client.fetch(
    illustrationsQuery,
    {},
    { perspective: draftMode ? "previewDrafts" : "published" },
  ) as Promise<SanityResponse["illustrations"]>;

  return {
    illustrationsPromise,
    article,
  };
};

export default function IllustrationLibraryPage() {
  const { article, illustrationsPromise } = useLoaderData<typeof loader>();
  const [searchValue, setSearchValue] = useState("");
  const [size, setSize] = useState("all");
  const [category, setCategory] = useState("all");
  const brand = useBrand();

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
      <SimpleGrid marginBottom={5} gap={2} columns={12}>
        <GridItem colSpan={[12, 12, 12, 6]}>
          <SearchInput
            label="Find illustration"
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            width="100%"
          />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 4]}>
          <NativeSelect
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="transparent-bg">Illustration</option>
            <option value="sticker-white-bg">
              Sticker with white background
            </option>
            <option value="sticker-peel-off">Sticker with peel-off</option>
          </NativeSelect>
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 2]}>
          <NativeSelect
            label="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="all">All</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </NativeSelect>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2, 3]} gap={2}>
        <React.Suspense
          fallback={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <Skeleton key={n} height="260px" borderRadius="md" />
          ))}
        >
          <Await resolve={illustrationsPromise}>
            {(illustrations) => (
              <IllustationGird
                illustrations={illustrations}
                searchValue={searchValue}
                size={size}
                category={category}
              />
            )}
          </Await>
        </React.Suspense>
      </SimpleGrid>
    </Box>
  );
}

const IllustationGird = ({
  illustrations,
  searchValue,
  size,
  category,
}: {
  illustrations: SanityResponse["illustrations"];
  searchValue: string;
  size: string;
  category: string;
}) => {
  const { colorMode } = useColorMode();

  const matchingIllustrations = useMemo(() => {
    const normalizedSearchValue = searchValue.toLowerCase().trim();
    return illustrations
      .filter((illustration) => {
        // Remove all non-printable characters and normalize (hvorfor er dette nødvendig???)
        const cleanSize =
          illustration.size?.replace(/[^\u0020-\u007E]/g, "").trim() || "";

        return size === "all" || cleanSize === size;
      })

      .filter(
        (illustration) =>
          category === "all" || illustration.illustrationType === category,
      )

      .filter(
        (illustration) =>
          illustration.title.toLowerCase().includes(normalizedSearchValue) ||
          illustration.tags?.some((tag) =>
            tag.toLowerCase().includes(normalizedSearchValue),
          ),
      );
  }, [illustrations, searchValue, size, category]);

  return matchingIllustrations.map((illustration) => (
    <StaticCard
      colorScheme="white"
      key={illustration._id}
      padding={2}
      border="1px solid"
      borderColor="outline"
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
                ? urlBuilder.image(illustration.imageLightBackground).url() ||
                  ""
                : urlBuilder.image(illustration.imageDarkBackground).url() || ""
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
  ));
};
