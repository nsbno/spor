import type { PortableTextBlock } from "@portabletext/types";
import {
  Box,
  createTexts,
  Flex,
  Grid,
  GridItem,
  Text,
  useTranslation,
} from "@vygruppen/spor-react";

import type { SanityImage } from "~/features/cms/sanity/query";
import { BlockHeading } from "~/features/portable-text/components/BlockHeading";
import { ResponsiveImage } from "~/features/portable-text/components/ResponsiveImage";
import { PortableText } from "~/features/portable-text/PortableText";

type ImageAndTextProps = {
  _key?: string;
  image: SanityImage;
  content: PortableTextBlock[];
  listLayout: string;
  listDirection: string;
};

const ImageAndText = ({
  image,
  content,
  listLayout,
  listDirection,
}: ImageAndTextProps) => {
  const { t } = useTranslation();

  const imageConst = (
    <Box as="figure" flex={6 / 12} overflow="hidden">
      {image && (
        <ResponsiveImage
          image={image}
          alt={image?.altText || ""}
          objectFit="cover"
          aspectRatio={12 / 9}
          borderRadius="md"
          size="md"
          quality={60}
          width="100%"
        />
      )}
      {(image.caption || image.credits) && (
        <Text
          as="figcaption"
          marginTop={4}
          fontStyle="italic"
          variant="xs"
          marginY={1}
        >
          {image.caption}
          {image.caption && image.credits && " "}
          {image.credits && `${t(texts.credits)}${image.credits}`}
        </Text>
      )}
    </Box>
  );
  return (
    <Flex
      gap={4}
      flexDirection={
        listDirection === "horizontal"
          ? ["column", null, null, "row"]
          : "column"
      }
      data-testid="image-and-text-block"
      as="section"
    >
      {listLayout === "image-then-text" ? imageConst : null}

      <Box flex={6 / 12}>
        <PortableText value={content} />
      </Box>
      {listLayout === "text-then-image" ? imageConst : null}
    </Flex>
  );
};

type ImageAndTextListProps = {
  heading?: string | undefined;
  headingIcon?: string;
  description?: string;
  items: ImageAndTextProps[];
  layout: "image-then-text" | "text-then-image";
  direction: "horizontal" | "vertical";
};

export const ImageAndTextList = ({
  heading,
  description,
  headingIcon,
  items,
  layout,
  direction,
}: ImageAndTextListProps) => {
  const listLayout = items.length > 1 ? "image-then-text" : layout;
  const listDirection = items.length > 1 ? "vertical" : direction;
  const gridItems = items.map((item) => (
    <ImageAndText
      key={item._key}
      image={item.image}
      content={item.content}
      listLayout={listLayout}
      listDirection={listDirection}
    />
  ));

  if (gridItems.length === 1) {
    return (
      <GridContainer>
        {heading && (
          <GridItem colStart={[1, 2, null, 3]} colSpan={[6, 4, null, 8]}>
            <BlockHeading
              heading={heading}
              subheading={description}
              icon={headingIcon}
            />
          </GridItem>
        )}
        <GridItem
          colStart={
            direction == "horizontal" ? [1, 2, null, 1] : [1, 2, null, 3]
          }
          colSpan={
            direction == "horizontal" ? [6, 4, null, 12] : [6, 4, null, 8]
          }
        >
          {gridItems[0]}
        </GridItem>
      </GridContainer>
    );
  }

  if (gridItems.length === 2 || gridItems.length === 4) {
    return (
      <GridContainer>
        {heading && (
          <GridItem colStart={1} colSpan={[6, null, null, 12]}>
            <BlockHeading
              heading={heading}
              subheading={description}
              icon={headingIcon}
            />
          </GridItem>
        )}
        {gridItems.map((gridItem) => (
          <GridItem key={gridItem.key} colStart={1} colSpan={[6, 3, null, 4]}>
            {gridItem}
          </GridItem>
        ))}
      </GridContainer>
    );
  }

  return (
    <GridContainer>
      {heading && (
        <GridItem colStart={1} colSpan={[6, null, null, 12]}>
          <BlockHeading
            heading={heading}
            subheading={description}
            icon={headingIcon}
          />
        </GridItem>
      )}
      {gridItems.map((gridItem) => (
        <GridItem key={gridItem.key} colSpan={[6, 3, null, 4]}>
          {gridItem}
        </GridItem>
      ))}
    </GridContainer>
  );
};

type GridContainerProps = {
  children: React.ReactNode;
};

const GridContainer = ({ children }: GridContainerProps) => (
  <Grid
    templateColumns={[
      "repeat(1, 1fr)",
      "repeat(6, 1fr)",
      null,
      "repeat(12, 1fr)",
    ]}
    gap={[2, 3, null, 4]}
  >
    {children}
  </Grid>
);

const texts = createTexts({
  credits: {
    nb: "Foto: ",
    en: "Credits: ",
    sv: "Foto: ",
    nn: "Foto: ",
  },
});
