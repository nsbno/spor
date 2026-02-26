import { stegaClean } from "@sanity/client/stega";
import { LinkOutOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  PressableCard,
  Stack,
  Text,
} from "@vygruppen/spor-react";

import { type SanityImage } from "~/features/cms/sanity/query";
import { BlockHeading } from "~/features/portable-text/components/BlockHeading";
import type { ImageSize } from "~/features/portable-text/components/ResponsiveImage";
import { ResponsiveImage } from "~/features/portable-text/components/ResponsiveImage";
import type { LinkButtonSerializerProps } from "~/features/portable-text/serializers/LinkButtonSerializer";
import { LinkButtonSerializer } from "~/features/portable-text/serializers/LinkButtonSerializer";
import {
  BoxAndCardGrid,
  getGridImageSize,
} from "~/features/site/grid/BoxAndCardGrid";
import { useLinkProps } from "~/utils/link";

export type ImageCardList = {
  heading?: string;
  headingIcon?: string;
  subheading?: string;
  items: ImageCardProps[];
  readMoreButton?: LinkButtonSerializerProps["value"];
};

export type ImageCardProps = {
  _key: string;
  title: string;
  headingLevel: "h2" | "h3";
  description: string;
  image: SanityImage;
  href: string;
  anchor?: string;
  imageSize?: ImageSize;
  aspectRatio?: number;
};

type ImageCardTextProps = {
  title: string;
  description?: string;
  isExternal: boolean;
  headingLevel: "h2" | "h3";
};

const ImageCardLinkText = ({
  title,
  description,
  isExternal,
  headingLevel,
}: ImageCardTextProps) => {
  return (
    <Stack
      height="100%"
      padding={3}
      gap={3}
      css={{ hyphens: "auto" }}
      as="section"
    >
      <Flex>
        <Heading
          as={headingLevel}
          variant="md"
          fontWeight="bold"
          color="text.secondary"
          flex={1}
          autoId
        >
          {title}
        </Heading>
        {isExternal && <LinkOutOutline24Icon />}
      </Flex>
      <Text variant="sm">{description}</Text>
    </Stack>
  );
};

export const ImageCard = ({
  title,
  headingLevel,
  description,
  image,
  href,
  anchor,
  imageSize,
  aspectRatio,
}: ImageCardProps) => {
  const cleandedHref = href && href.includes("http") ? href : stegaClean(href);
  const { linkProps, isExternal } = useLinkProps(cleandedHref, anchor);

  return (
    <PressableCard
      variant="floating"
      {...linkProps}
      height="100%"
      as={linkProps.as as React.ElementType}
    >
      <Box>
        <Box width="100%">
          {image && (
            <ResponsiveImage
              aspectRatio={aspectRatio || undefined}
              image={image}
              width="100%"
              objectFit="cover"
              size={imageSize ?? "md"}
            />
          )}
        </Box>
        <ImageCardLinkText
          title={title}
          description={description}
          isExternal={isExternal}
          headingLevel={headingLevel}
        />
      </Box>
    </PressableCard>
  );
};

export const ImageCardList = ({
  heading,
  headingIcon,
  subheading,
  items,
  readMoreButton,
}: ImageCardList) => {
  const aspectRatio =
    items.length === 1 || items.length === 2 || items.length === 4
      ? 2.35 / 1
      : 16 / 9;

  const imageSize = getGridImageSize(items.length);

  const gridItems = items.map((item) => (
    <ImageCard
      key={item._key}
      {...item}
      aspectRatio={aspectRatio}
      headingLevel={heading ? "h3" : "h2"}
      imageSize={imageSize}
    />
  ));
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(6, 1fr)",
        lg: "repeat(12, 1fr)",
      }}
      data-testid="image-card-list"
      as="section"
      marginTop={[8, null, null, 10]}
    >
      {heading && (
        <GridItem
          colStart={gridItems.length == 1 ? { base: 1, sm: 2, lg: 3 } : 1}
          colSpan={
            gridItems.length == 1
              ? { base: 6, sm: 4, lg: 8 }
              : { base: 6, lg: 12 }
          }
        >
          <BlockHeading
            heading={heading}
            subheading={subheading}
            icon={headingIcon}
          />
        </GridItem>
      )}
      <GridItem colStart={1} colSpan={{ base: 6, lg: 12 }}>
        <BoxAndCardGrid gridItems={gridItems} />
      </GridItem>
      {readMoreButton && (
        <GridItem colStart={1} colSpan={{ base: 6, lg: 12 }} marginTop={2}>
          <LinkButtonSerializer value={readMoreButton} />
        </GridItem>
      )}
    </Grid>
  );
};
