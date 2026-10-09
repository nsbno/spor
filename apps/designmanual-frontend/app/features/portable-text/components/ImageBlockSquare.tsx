import {
  Box,
  Grid,
  GridItem,
  Text,
  useTranslation,
} from "@vygruppen/spor-react";

import type { SanityImage } from "~/features/cms/sanity/query";
import type { ImageSize } from "~/features/portable-text/components/ResponsiveImage";
import { ResponsiveImage } from "~/features/portable-text/components/ResponsiveImage";

export type ImageItem = {
  href?: string;
  title?: string;
  image: SanityImage;
  credits?: string;
};

export type ImageBlockProps = {
  images: ImageItem[];
  caption?: string;
  layout?: "left-heavy" | "right-heavy" | "equally-sized";
};

type GridItemLayout = {
  colStart: (number | null)[];
  colSpan: (number | null)[];
  rowStart: (number | null)[];
  rowSpan: (number | null)[];
};

export const ImageBlockSquare = ({
  images,
  caption,
  layout,
}: ImageBlockProps) => {
  const { t } = useTranslation();
  const imageCount = images.length;

  const credits = [
    ...new Set(images.map((image) => image.image?.credits).filter(Boolean)),
  ];

  const captionAndCredits = `${caption || ""}${
    caption && credits.length > 0 ? " " : ""
  }${credits.length > 0 ? t(texts.photo) : ""} ${credits.join(", ")}`;

  if (imageCount === 2) {
    const layoutGridMap: Record<
      string,
      { image1: GridItemLayout; image2: GridItemLayout }
    > = {
      "left-heavy": {
        image1: {
          colStart: [1],
          rowStart: [1],
          colSpan: [6, 6, null, 7],
          rowSpan: [2],
        },
        image2: {
          colStart: [7, 7, null, 8],
          colSpan: [4, 4, null, 5],
          rowStart: [1],
          rowSpan: [2],
        },
      },
      "right-heavy": {
        image1: {
          colStart: [1],
          rowStart: [1],
          colSpan: [4, 4, null, 5],
          rowSpan: [2],
        },
        image2: {
          colStart: [5, 5, null, 6],
          colSpan: [6, 6, null, 7],
          rowStart: [1],
          rowSpan: [2],
        },
      },
      "equally-sized": {
        image1: {
          colStart: [1],
          rowStart: [1],
          colSpan: [5, 5, null, 6],
          rowSpan: [2],
        },
        image2: {
          colStart: [6, 6, null, 7],
          colSpan: [5, 5, null, 6],
          rowStart: [1],
          rowSpan: [2],
        },
      },
    };

    const positions =
      layoutGridMap[layout ?? "equally-sized"] ??
      layoutGridMap["equally-sized"];

    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem {...positions.image1} image={images[0]} />
        <ImageGridItem {...positions.image2} image={images[1]} />
      </GridLayout>
    );
  }

  if (imageCount === 3) {
    const layoutGridMap: Record<
      string,
      { image1: GridItemLayout; image2: GridItemLayout; image3: GridItemLayout }
    > = {
      "left-heavy": {
        image1: {
          colStart: [1],
          colSpan: [5, 5, null, 6],
          rowStart: [1],
          rowSpan: [24, 2, null, 2],
        },
        image2: {
          colStart: [6, 6, null, 7],
          colSpan: [5, 5, null, 6],
          rowStart: [1],
          rowSpan: [12, 1, null, 1],
        },
        image3: {
          colStart: [6, 6, null, 7],
          colSpan: [5, 5, null, 6],
          rowStart: [13, 2, null, 2],
          rowSpan: [12, 1, null, 1],
        },
      },
      "right-heavy": {
        image1: {
          colStart: [1],
          colSpan: [5, 5, null, 6],
          rowStart: [1],
          rowSpan: [12, 1, null, 1],
        },
        image2: {
          colStart: [6, 6, null, 7],
          colSpan: [5, 5, null, 6],
          rowStart: [1],
          rowSpan: [24, 2, null, 2],
        },
        image3: {
          colStart: [1],
          colSpan: [5, 5, null, 6],
          rowStart: [13, 2, null, 2],
          rowSpan: [12, 1, null, 1],
        },
      },
    };

    const positions =
      layoutGridMap[layout ?? "left-heavy"] ?? layoutGridMap["left-heavy"];

    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem {...positions.image1} image={images[0]} imageSize="lg" />
        <ImageGridItem {...positions.image2} image={images[1]} imageSize="md" />
        <ImageGridItem {...positions.image3} image={images[2]} imageSize="md" />
      </GridLayout>
    );
  }

  if (imageCount === 4) {
    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem
          colStart={[1]}
          colSpan={[5, 5, null, 6]}
          rowStart={[1]}
          rowSpan={[1]}
          image={images[0]}
        />
        <ImageGridItem
          colStart={[6, 6, null, 7]}
          colSpan={[5, 5, null, 6]}
          rowStart={[1]}
          rowSpan={[1]}
          image={images[1]}
        />
        <ImageGridItem
          colStart={[1]}
          colSpan={[5, 5, null, 6]}
          rowStart={[2]}
          rowSpan={[1]}
          image={images[2]}
        />
        <ImageGridItem
          colStart={[6, 6, null, 7]}
          colSpan={[5, 5, null, 6]}
          rowStart={[2]}
          rowSpan={[1]}
          image={images[3]}
        />
      </GridLayout>
    );
  }
  return null;
};

type ImageGridItemProps = {
  colStart: (number | null)[];
  colSpan: (number | null)[];
  rowStart: (number | null)[];
  rowSpan: (number | null)[];
  image: ImageItem;
  imageSize?: ImageSize;
};

const ImageGridItem = ({
  colStart,
  colSpan,
  rowStart,
  rowSpan,
  image,
  imageSize,
}: ImageGridItemProps) => {
  const isSvg =
    (image.image as SanityImage).asset?._ref?.includes("-svg") ?? false;
  return (
    <GridItem
      colStart={colStart}
      colSpan={colSpan}
      rowStart={rowStart}
      rowSpan={rowSpan}
    >
      <Box
        borderRadius="md"
        height="100%"
        width="100%"
        position="relative"
        overflow="hidden"
        display="block"
        aria-label={image.title}
      >
        <>
          <ResponsiveImage
            objectFit={isSvg ? "none" : "cover"}
            height="100%"
            width="100%"
            position="absolute"
            image={image.image}
            size={imageSize ?? "lg"}
          />
        </>
      </Box>
    </GridItem>
  );
};

type GridLayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
  imageCount: number;
  captionAndCredits?: string;
};

const GridLayout = ({ children, captionAndCredits }: GridLayoutProps) => {
  return (
    <Grid
      templateColumns={["repeat(10, 1fr)", null, null, "repeat(12, 1fr)"]}
      templateRows="repeat(2, 1fr)"
      gap={[2, 3, null, 4]}
      aspectRatio="3 / 2"
      width="100%"
      data-testid="image-block"
    >
      {children}
      {captionAndCredits && (
        <GridItem
          colStart={[1, null, null, 1]}
          colSpan={[6, null, null, 12]}
          marginTop={[null, -1, null, -2]} //Offset gap in grid
        >
          <Text variant="xs" fontStyle="italic">
            {captionAndCredits}
          </Text>
        </GridItem>
      )}
    </Grid>
  );
};

const texts = {
  photo: {
    nb: "Foto:",
    nn: "Foto:",
    sv: "Foto:",
    en: "Photo:",
  },
};
