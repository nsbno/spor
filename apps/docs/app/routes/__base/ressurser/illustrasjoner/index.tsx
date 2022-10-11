import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  DownloadOutline18Icon,
  DownloadOutline24Icon,
  Flex,
  Heading,
  IconButton,
  Image,
  InformationOutline18Icon,
  SearchInput,
  Select,
  SimpleGrid,
  SimplePopover,
  Text,
} from "@vygruppen/spor-react";
import { useMemo, useState } from "react";
import { getClient } from "~/utils/sanity/client";
import { urlBuilder } from "~/utils/sanity/utils";

type LoaderData = {
  illustrations: {
    _id: string;
    title: string;
    imageLightBackground: SanityAsset;
    imageDarkBackground: SanityAsset;
    tags: string[];
    description: string;
  }[];
};

export const loader: LoaderFunction = async () => {
  const client = getClient();
  const query = `*[_type == "illustration"] | order(title asc) {
    _id,
    title,
    imageLightBackground,
    imageDarkBackground,
    tags,
    description
  }`;
  const illustrations = await client.fetch(query);
  return json<LoaderData>({ illustrations });
};

export default function IllustrasjonerPage() {
  const { illustrations } = useLoaderData<LoaderData>();
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
      <Badge colorScheme="green">Ressurser</Badge>
      <Heading as="h1" size="2xl">
        Illustrasjoner
      </Heading>
      <Text mb={3}>
        Vy-illustrasjoner skaper et felles språk som skal hjelpe våre ansatte,
        kunder, brukere eller samarbeidspartnere når de skal interagere med
        merkevaren og tjenestene våre. Illustrasjonene gjenspeiler våre verdier
        og mål i en strek og tone.
      </Text>
      <Button
        variant="primary"
        size="lg"
        as="a"
        download="illustrasjoner.zip"
        href="/ressurser/illustrasjoner/alle"
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
          <Select
            label="Bakgrunn"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            width="fit-content"
          >
            <option value="light">Lys bakgrunn</option>
            <option value="dark">Mørk bakgrunn</option>
          </Select>
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
                  triggerElement={<InformationOutline18Icon />}
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
                  download={illustration.title}
                  href={urlBuilder
                    .image(
                      background === "light"
                        ? illustration.imageLightBackground
                        : illustration.imageDarkBackground
                    )
                    .forceDownload(true)
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
