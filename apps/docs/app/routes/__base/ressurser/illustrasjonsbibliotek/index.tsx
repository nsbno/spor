import { PortableText } from "@portabletext/react";
import { json } from "@remix-run/node";
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
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  NativeSelect,
  SearchInput,
  SimpleGrid,
  SimplePopover,
  Text,
} from "@vygruppen/spor-react";
import { useMemo, useState } from "react";
import { getClient } from "~/utils/sanity/client";
import { urlBuilder } from "~/utils/sanity/utils";
import { slugify } from "~/utils/stringUtils";

type LoaderData = {
  illustrations: {
    _id: string;
    title: string;
    imageLightBackground: SanityAsset;
    imageDarkBackground: SanityAsset;
    tags: string[];
    description: string;
  }[];
  article: {
    title: string;
    slug: string;
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
      description
    },
  "article": *[_type == "article" && slug.current == "illustrasjonsbibliotek"][0] {
    _id,
    title,
    "slug": slug.current,
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
  const { illustrations, article } = await client.fetch(query);
  return json({ illustrations, article } as LoaderData);
};

export default function IllustrasjonerPage() {
  const { illustrations, article } = useLoaderData<typeof loader>();
  const [searchValue, setSearchValue] = useState("");
  const [background, setBackground] = useState("light");

  const matchingIllustrations = useMemo(() => {
    const normalizedSearchValue = searchValue.toLowerCase().trim();
    return illustrations.filter(
      (illustration) =>
        illustration.title.toLowerCase().includes(normalizedSearchValue) ||
        illustration.tags.includes(normalizedSearchValue)
    );
  }, [illustrations, searchValue]);

  return (
    <Box>
      <Badge colorScheme="light-green">{article.category?.title}</Badge>
      <Heading as="h1" size="2xl">
        {article.title}
      </Heading>
      <Box marginBottom={4}>
        <PortableText value={article.content} />
      </Box>
      <Button
        variant="primary"
        size="lg"
        as="a"
        download="illustrasjoner.zip"
        href="/ressurser/illustrasjonsbibliotek/alle"
        leftIcon={<DownloadOutline24Icon />}
      >
        Last ned alle illustrasjoner
      </Button>
      <Divider my={3} />
      <Flex mb={5} gap={2}>
        <Box flex={1}>
          <SearchInput
            label="Finn illustrasjon"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            width="100%"
          />
        </Box>
        <Box>
          <NativeSelect
            label="Bakgrunn"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            width="fit-content"
          >
            <option value="light">Lys bakgrunn</option>
            <option value="dark">Mørk bakgrunn</option>
          </NativeSelect>
        </Box>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} gap={2}>
        {matchingIllustrations.map((illustration) => (
          <Card
            colorScheme={background === "light" ? "white" : "teal"}
            background={background === "light" ? "white" : "darkTeal"}
            color={background === "light" ? "darkGrey" : "white"}
            variant="outline"
            key={illustration._id}
            p={2}
          >
            <Flex flexDirection="column" height="100%">
              <Flex gap={1} alignItems="center">
                <Text variant="sm">{illustration.title}</Text>
                <SimplePopover
                  placement="top"
                  arrowPadding={2}
                  triggerElement={
                    <InformationOutline18Icon aria-label="Informasjon" />
                  }
                >
                  {illustration.description}
                </SimplePopover>
              </Flex>
              <Image
                src={
                  urlBuilder
                    .image(
                      background === "light"
                        ? illustration.imageLightBackground
                        : illustration.imageDarkBackground
                    )
                    .url() || ""
                }
                alt={illustration.description}
                width="100%"
                maxHeight="10rem"
                objectFit="contain"
                objectPosition="center"
                flex={1}
              />
              <Flex justifyContent="flex-end">
                <IconButton
                  variant="ghost"
                  size="sm"
                  color={background === "light" ? "darkGrey" : "white"}
                  _hover={{
                    backgroundColor: "mint",
                    color: "darkGrey",
                  }}
                  icon={<DownloadOutline18Icon />}
                  as="a"
                  download={`${slugify(illustration.title)}.svg`}
                  href={urlBuilder
                    .image(
                      background === "light"
                        ? illustration.imageLightBackground
                        : illustration.imageDarkBackground
                    )
                    .forceDownload(`${slugify(illustration.title)}.svg`)
                    .url()}
                  aria-label="Last ned SVG"
                />
              </Flex>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
