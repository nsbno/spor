import { PortableTextBlock } from "@portabletext/types";
import { groq } from "@sanity/groq-store";
import { LinkOutOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  PressableCard,
  Stack,
} from "@vygruppen/spor-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { resolveLinkGroq, SanityImage } from "~/features/cms/sanity/query";
import { ResponsiveImage } from "~/features/portable-text/components/ResponsiveImage";
import { PortableText } from "~/features/portable-text/PortableText";
import { getIcon } from "~/utils/getIcon";
import { useLinkProps } from "~/utils/link";
import { sanitizeInternalHref } from "~/utils/sanitize";
import { getClient } from "~/utils/sanity/client";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  invariant(params.section, "Expected params.section");
  const url = new URL(request.url);
  const draftId = url.searchParams.get("preview") ?? null;
  const draftMode =
    url.searchParams.get("sanity-preview-perspective") === "drafts";

  const query = groq`*[_id == $draftId || (_type == "section" && slug.current == $section)][0] {
    _id,
    title,
    "slug": slug.current,
    "page": reference->{
      _id,
      title,
      introduction,
      image,
      promotedLinks[]{
        text,
        icon,
        ${resolveLinkGroq("link")}, 
      },
      cardLinks[]{
        _key,
        title,
        textContent,
        "linkType": link.type,
        image,
        ${resolveLinkGroq("link")},       
      }
    }
  }`;

  const data = await getClient().fetch(
    query,
    {
      section: params.section,
      draftId,
    },
    {
      perspective: draftMode ? "previewDrafts" : "published",
      stega: draftMode,
    },
  );

  if (!data) {
    return { section: params.section, data: null };
  }
  return { section: params.section, data, draftId, query, draftMode };
};

type ImageCard = {
  _key: string;
  title: string;
  textContent?: PortableTextBlock[];
  linkType?: string;
  image: SanityImage;
  href: string;
  anchor?: string;
};

type PromotedLink = {
  text: string;
  icon?: string;
  href: string;
  anchor?: string;
};

export default function Index() {
  const { data } = useLoaderData<typeof loader>();

  if (!data) {
    return null;
  }

  const page = data.page;
  const hasImage = !!page?.image;
  const introductionWidth = hasImage
    ? ["100%", "100%", "100%", "55%"]
    : ["100%", "100%", "100%", "70%"];
  const paddingTop = hasImage ? [0, 0, 0, 11] : [4, 4, 4, 9];
  const gradientToTop =
    "linear-gradient(to top, var(--spor-colors-bg-accent), transparent)";

  return (
    <Box backgroundColor="bg" width="100%">
      <Flex
        direction="column"
        backgroundColor={hasImage ? "bg.accent" : "bg"}
        paddingBottom={11}
        paddingTop={paddingTop}
        width="100%"
        position="relative"
        overflow="hidden"
      >
        {page?.image && (
          <Box
            position={["static", "static", "static", "absolute"]}
            right={0}
            top={0}
            bottom={0}
            marginBottom={[4, 4, 4, 0]}
            maxWidth={["100%", "100%", "100%", "40%"]}
          >
            <Box position="relative" height="100%">
              <ResponsiveImage
                image={page.image}
                size="lg"
                height={["12rem", "12rem", "12rem", "100%"]}
              />
              <Box
                position="absolute"
                inset={0}
                background={[
                  gradientToTop,
                  gradientToTop,
                  gradientToTop,
                  "linear-gradient(to right, var(--spor-colors-bg-accent), transparent)",
                ]}
              />
            </Box>
          </Box>
        )}
        <Stack
          gap="3"
          maxWidth={introductionWidth}
          paddingLeft={[4, 5, 8, 10]}
          paddingRight={[4, 5, 8, 2]}
        >
          <Heading as="h1">{page?.title}</Heading>
          <PortableText value={page?.introduction} />
          <Flex gap="1.5" flexWrap="wrap">
            {page?.promotedLinks?.map((link: PromotedLink, index: number) => {
              return (
                <Button
                  variant="tertiary"
                  size="sm"
                  key={index}
                  leftIcon={
                    link.icon
                      ? getIcon({ iconName: link.icon, size: 24 })
                      : undefined
                  }
                  asChild
                >
                  <a href={link.href}>{link.text}</a>
                </Button>
              );
            })}
          </Flex>
        </Stack>
      </Flex>
      <Box
        paddingX={[2, 4, 4, 8]}
        position="relative"
        top="-5rem"
        justifyContent="center"
        display="flex"
      >
        {page?.cardLinks?.length > 0 && (
          <Grid
            gap={5}
            justifyContent="space-between"
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              null,
              "repeat(3, 1fr)",
            ]}
          >
            {page?.cardLinks?.map((card: ImageCard) => (
              <GridItem key={card._key}>
                <ImageCard
                  _key={card._key}
                  title={card.title}
                  textContent={card.textContent}
                  image={card.image}
                  href={card.href}
                  anchor={card.anchor}
                />
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}

const ImageCard = ({ title, textContent, image, href, anchor }: ImageCard) => {
  const cleandedHref =
    href && href.includes("http") ? href : sanitizeInternalHref(href);
  const { linkProps, isExternal } = useLinkProps(cleandedHref, anchor);

  return (
    <PressableCard
      maxWidth={["100%", "100%", "100%", "270px"]}
      backgroundColor="surface"
      padding="3"
      variant="floating"
      textAlign="left"
      display="flex"
      flexDirection="column"
      gap={3}
      height="100%"
      {...linkProps}
      as={linkProps.as as React.ElementType}
    >
      {image && (
        <ResponsiveImage
          image={image}
          objectFit="cover"
          size="sm"
          width="60px"
        />
      )}
      <Stack gap={0.5}>
        <Flex>
          <Heading
            as="h2"
            variant="md"
            fontWeight="bold"
            color="text.highlight"
            flex={1}
            autoId
          >
            {title}
          </Heading>
          {isExternal && <LinkOutOutline24Icon />}
        </Flex>
        {textContent && <PortableText value={textContent} />}
      </Stack>
    </PressableCard>
  );
};
