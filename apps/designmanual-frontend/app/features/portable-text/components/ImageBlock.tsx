/* eslint-disable spor/use-semantic-tokens */
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useTranslation,
} from "@vygruppen/spor-react";

import type { SanityImage } from "~/features/cms/sanity/query";
import type { ImageSize } from "~/features/portable-text/components/ResponsiveImage";
import { ResponsiveImage } from "~/features/portable-text/components/ResponsiveImage";
import { getIcon } from "~/utils/getIcon";

export type ImageItem = {
  href?: string;
  title?: string;
  image: SanityImage;
  credits?: string;
};

export type ImageBlockProps = {
  images: ImageItem[];
  caption?: string;
};

export const ImageBlock = ({ images, caption }: ImageBlockProps) => {
  const { t } = useTranslation();
  const imageCount = images.length;

  const credits = [
    ...new Set(images.map((image) => image.image?.credits).filter(Boolean)),
  ];

  const captionAndCredits = `${caption || ""}${
    caption && credits.length > 0 ? " " : ""
  }${credits.length > 0 ? t(texts.photo) : ""} ${credits.join(", ")}`;

  if (imageCount === 1 && images[0].image?.asset?._ref.includes("-svg")) {
    return (
      <Grid templateColumns={["repeat(6, 1fr)", null, null, "repeat(12, 1fr)"]}>
        <GridItem colStart={[1, 2, null, 3]} colSpan={[6, 4, null, 8]}>
          <ResponsiveImage image={images[0].image} size="lg" width="100%" />
        </GridItem>
        {captionAndCredits && (
          <GridItem colStart={[1, 2, null, 3]} colSpan={[6, 4, null, 8]}>
            <Text variant="sm" fontStyle="italic">
              {captionAndCredits}
            </Text>
          </GridItem>
        )}
      </Grid>
    );
  }
  if (imageCount === 1) {
    return (
      <Box marginTop={8}>
        <GridLayout
          imageCount={imageCount}
          captionAndCredits={captionAndCredits}
        >
          <ImageGridItem
            colStart={[1, 2, null, 1]}
            colSpan={[6, 4, null, 12]}
            rowStart={[1, 1, null, 1]}
            rowSpan={[2, 2, null, 2]}
            image={images[0]}
            imageSize="lg"
          />
        </GridLayout>
      </Box>
    );
  }

  if (imageCount === 2) {
    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem
          colStart={[1]}
          rowStart={[1]}
          colSpan={[3, 4, null, 8]}
          rowSpan={[2]}
          image={images[0]}
          imageSize="lg"
        />
        <ImageGridItem
          colStart={[4, 5, null, 9]}
          colSpan={[3, 2, null, 4]}
          rowStart={[1]}
          rowSpan={[2]}
          borderRadius="200px"
          image={images[1]}
          imageSize="lg"
        />
      </GridLayout>
    );
  }

  if (imageCount === 3) {
    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem
          colStart={[1]}
          colSpan={[6, 3, null, 8]}
          rowStart={[1]}
          rowSpan={[9, 2, null, null]}
          image={images[0]}
          imageSize="lg"
        />

        <ImageGridItem
          colStart={[1, 4, null, 9]}
          colSpan={[3, 3, null, 4]}
          rowStart={[10, 1, null, null]}
          rowSpan={[14, 1, null, null]}
          borderRadius="144px"
          image={images[1]}
          imageSize="md"
        />
        <ImageGridItem
          colStart={[4, 4, null, 9]}
          colSpan={[3, 3, null, 4]}
          rowStart={[10, 2, 2]}
          rowSpan={[14, 1, null, null]}
          image={images[2]}
          imageSize="md"
        />
      </GridLayout>
    );
  }

  if (imageCount === 4) {
    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem
          colStart={[1, 3, null, 5]}
          colSpan={[6, 4, null, 8]}
          rowStart={[1, 1, null, 1]}
          rowSpan={[9, 1, null, 1]}
          borderRadius="143px"
          image={images[0]}
          imageSize="lg"
        />
        <ImageGridItem
          colStart={[1, 1, null, 1]}
          colSpan={[3, 2, null, 4]}
          rowStart={[10, 1, null, 1]}
          rowSpan={[14, 2, null, 2]}
          image={images[1]}
          imageSize="lg"
        />
        <ImageGridItem
          colStart={[4, 3, null, 5]}
          colSpan={[3, 2, null, 5]}
          rowStart={[10, 2, null, 2]}
          rowSpan={[14, 1, null, 1]}
          image={images[2]}
          imageSize="md"
        />
        <ImageGridItem
          colStart={[1, 5, null, 10]}
          colSpan={[6, 2, null, 3]}
          rowStart={[24, 2, null, 2]}
          rowSpan={[9, 1, null, 1]}
          image={images[3]}
          imageSize="sm"
        />
      </GridLayout>
    );
  }

  if (imageCount === 5) {
    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem
          colStart={[1, 3, null, 8]}
          colSpan={[6, 4, null, 6]}
          rowStart={[1, 1, null, 2]}
          rowSpan={[9, 1, null, 1]}
          image={images[0]}
          borderRadius={["143px"]}
          imageSize="md"
        />
        <ImageGridItem
          colStart={[1, 1, null, 1]}
          colSpan={[3, 2, null, 4]}
          rowStart={[10, 1, null, 1]}
          rowSpan={[14, 1, null, 2]}
          image={images[1]}
          imageSize="lg"
        />
        <ImageGridItem
          colStart={[4, 1, null, 5]}
          colSpan={[3, 2, null, 5]}
          rowStart={[10, 2, null, 1]}
          rowSpan={[7, 1, null, 1]}
          image={images[2]}
          imageSize="md"
        />
        <ImageGridItem
          colStart={[4, 3, null, 10]}
          colSpan={[3, 2, null, 3]}
          rowStart={[17, 2, null, 1]}
          rowSpan={[7, 1, null, 1]}
          borderRadius={["143px", "18px"]}
          image={images[3]}
          imageSize="sm"
        />
        <ImageGridItem
          colStart={[1, 5, null, 5]}
          colSpan={[6, 2, null, 3]}
          rowStart={[24, 2, null, 2]}
          rowSpan={[9, 1, null, 1]}
          image={images[4]}
          imageSize="sm"
        />
      </GridLayout>
    );
  }

  if (imageCount >= 6) {
    return (
      <GridLayout imageCount={imageCount} captionAndCredits={captionAndCredits}>
        <ImageGridItem
          colStart={[1, 3, null, 5]}
          colSpan={[6, 4, null, 8]}
          rowStart={[1, 1, null, 1]}
          rowSpan={[9, 1, null, 1]}
          borderRadius="143px"
          image={images[0]}
          imageSize="lg"
        />
        <ImageGridItem
          colStart={[1, 1, null, 1]}
          colSpan={[3, 2, null, 4]}
          rowStart={[10, 1, null, 1]}
          rowSpan={[7, 1, null, 2]}
          image={images[1]}
          imageSize="lg"
        />
        <ImageGridItem
          colStart={[4, 1, null, 5]}
          colSpan={[3, 4, null, 5]}
          rowStart={[10, 2, null, 2]}
          rowSpan={[7, 1, null, 1]}
          image={images[2]}
          imageSize="md"
        />
        <ImageGridItem
          colStart={[1, 5, null, 10]}
          colSpan={[6, 2, null, 3]}
          rowStart={[17, 2, null, 2]}
          rowSpan={[9, 2, null, 1]}
          image={images[3]}
          imageSize="sm"
        />
        <ImageGridItem
          colStart={[1, 1, null, 1]}
          colSpan={[3, 2, null, 7]}
          rowStart={[26, 3, null, 3]}
          rowSpan={[7, 1, null, 1]}
          image={images[4]}
          imageSize="md"
        />
        <ImageGridItem
          colStart={[4, 3, null, 8]}
          colSpan={[3, 2, null, 5]}
          rowStart={[26, 3, null, 3]}
          rowSpan={[7, 1, null, 1]}
          image={images[5]}
          imageSize="md"
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
  borderRadius?: string[] | string;
  image: ImageItem;
  imageSize?: ImageSize;
};

const ImageGridItem = ({
  colStart,
  colSpan,
  rowStart,
  rowSpan,
  borderRadius,
  image,
  imageSize,
}: ImageGridItemProps) => {
  const activeStyle = {
    boxShadow: "0 0 0 2px white, 0 0 0 4px var(--spor-colors-coralGreen)",
    outline: "none",
  };
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
        borderRadius={borderRadius ?? "md"}
        height="100%"
        width="100%"
        position="relative"
        overflow="hidden"
        display="block"
        _active={image.href ? activeStyle : undefined}
        _focusVisible={{
          boxShadow: "0 0 0 2px white, 0 0 0 4px var(--spor-colors-greenHaze)",
          outline: "none",
        }}
        aria-label={image.title}
      >
        {image.href ? (
          <a
            href={image.href}
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              textDecoration: "none",
              color: "inherit",
            }}
            tabIndex={0}
            aria-label={image.title}
          >
            <ResponsiveImage
              objectFit={isSvg ? "none" : "cover"}
              height="100%"
              width="100%"
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              image={image.image}
              size={imageSize ?? "lg"}
              transition="transform 0.3s cubic-bezier(0, 0.1, 0.3, 1)"
              _groupHover={{ transform: "scale(1.07)" }}
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              background={
                image.title
                  ? "linear-gradient(transparent, 80%, var(--spor-colors-black-alpha-600))"
                  : undefined
              }
              backgroundColor=""
              _groupHover={{
                backgroundColor: "var(--spor-colors-black-alpha-400)",
              }}
              _groupFocus={{
                backgroundColor: "var(--spor-colors-black-alpha-400)",
              }}
              transition="background-color 0.3s cubic-bezier(0, 0.1, 0.3, 1)"
            />
            {image.title && (
              <Flex
                position="absolute"
                bottom="14px"
                width="100%"
                justifyContent="center"
                padding="4px"
              >
                <Flex
                  className="focus-move"
                  paddingX={1}
                  paddingY={0.5}
                  gap={1}
                  alignItems="center"
                  color="white"
                  borderRadius="xs"
                  textShadow="0 2px 2px var(--spor-colors-blackAlpha-400);"
                >
                  <Text fontWeight="bold" variant="sm">
                    {image.title}
                  </Text>
                  <Box width={3} height={3}>
                    {getIcon({ iconName: "ArrowRight", size: 18 })}
                  </Box>
                </Flex>
              </Flex>
            )}
          </a>
        ) : (
          <>
            <ResponsiveImage
              objectFit={isSvg ? "none" : "cover"}
              height="100%"
              width="100%"
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              image={image.image}
              size={imageSize ?? "lg"}
              transition="transform 0.3s cubic-bezier(0, 0.1, 0.3, 1)"
              _groupHover={{ transform: "scale(1.07)" }}
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              background={
                image.title
                  ? "linear-gradient(transparent, 80%, var(--spor-colors-blackAlpha-600))"
                  : undefined
              }
              backgroundColor=""
              _groupHover={{
                backgroundColor: "var(--spor-colors-blackAlpha-400)",
              }}
              _groupFocus={{
                backgroundColor: "var(--spor-colors-blackAlpha-400)",
              }}
              transition="background-color 0.3s cubic-bezier(0, 0.1, 0.3, 1)"
            />
            {image.title && (
              <Flex
                position="absolute"
                bottom="14px"
                width="100%"
                justifyContent="center"
                padding="4px"
              >
                <Flex
                  className="focus-move"
                  paddingX={1}
                  paddingY={0.5}
                  gap={1}
                  alignItems="center"
                  color="white"
                  borderRadius="xs"
                  textShadow="0 2px 2px var(--spor-colors-blackAlpha-400);"
                >
                  <Text fontWeight="bold" variant="sm">
                    {image.title}
                  </Text>
                  <Box width={3} height={3}>
                    {getIcon({ iconName: "ArrowRight", size: 18 })}
                  </Box>
                </Flex>
              </Flex>
            )}
          </>
        )}
      </Box>
    </GridItem>
  );
};

type GridLayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
  imageCount: number;
  captionAndCredits?: string;
};

const GridLayout = ({
  children,
  imageCount,
  captionAndCredits,
}: GridLayoutProps) => {
  // eslint-disable-next-line no-nested-ternary
  const rowsMobile = imageCount <= 2 ? 2 : imageCount <= 3 ? 24 : 32;
  const rowOthers = imageCount <= 5 ? 2 : 3;

  const templateRowsMobile = `repeat(${rowsMobile}, 1fr)`;
  const templateRowsOthers = `repeat(${rowOthers}, 1fr)`;

  const isSingleImage = imageCount === 1;

  return (
    <Grid
      templateColumns={["repeat(6, 1fr)", null, null, "repeat(12, 1fr)"]}
      templateRows={[templateRowsMobile, templateRowsOthers]}
      gap={[2, 3, null, 4]}
      aspectRatio={[
        calculateAspectRatio(imageCount, "phone"),
        calculateAspectRatio(imageCount, "tablet"),
        null,
        calculateAspectRatio(imageCount, "desktop"),
      ]}
      width="100%"
      data-testid="image-block"
      marginTop={isSingleImage ? 0 : 10}
    >
      {children}
      {captionAndCredits && (
        <GridItem
          colStart={[
            1,
            imageCount === 1 ? 2 : null,
            null,
            imageCount === 1 ? 3 : 1,
          ]}
          colSpan={[
            6,
            imageCount === 1 ? 4 : null,
            null,
            imageCount === 1 ? 8 : 12,
          ]}
          marginTop={[null, -1, null, -2]} //Offset gap in grid
        >
          <Text variant="sm" fontStyle="italic">
            {captionAndCredits}
          </Text>
        </GridItem>
      )}
    </Grid>
  );
};

function calculateAspectRatio(imageCount: number, deviceType: string) {
  let aspectRatio;

  switch (deviceType) {
    case "desktop": {
      switch (imageCount) {
        case 1: {
          aspectRatio = "16/9";

          break;
        }
        case 2:
        case 4: {
          aspectRatio = "1/1";

          break;
        }
        case 3:
        case 5: {
          aspectRatio = "2/1";
          break;
        }
        case 6: {
          aspectRatio = "4/3";
          break;
        }
        default: {
          aspectRatio = "1/1";
          break;
        }
      }

      break;
    }
    case "tablet": {
      switch (imageCount) {
        case 1:
        case 2: {
          aspectRatio = "2";
          break;
        }
        case 3:
        case 4:
        case 5: {
          aspectRatio = "3/2";
          break;
        }
        case 6: {
          aspectRatio = "1";
          break;
        }
        default: {
          aspectRatio = "1/1";
          break;
        }
      }

      break;
    }
    case "phone": {
      switch (imageCount) {
        case 1:
        case 2: {
          aspectRatio = "1.3";
          break;
        }
        case 3: {
          aspectRatio = "0.75";
          break;
        }
        case 4:
        case 5:
        case 6: {
          aspectRatio = "2/4";
          break;
        }
        default: {
          aspectRatio = "1/1";
          break;
        }
      }

      break;
    }
    default: {
      aspectRatio = "1/1";
    }
  }

  return aspectRatio;
}

const texts = {
  photo: {
    nb: "Foto:",
    nn: "Foto:",
    sv: "Foto:",
    en: "Photo:",
  },
};
