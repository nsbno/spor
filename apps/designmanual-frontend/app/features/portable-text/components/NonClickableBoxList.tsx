import type { PortableTextBlock } from "@portabletext/types";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  StaticCard,
  tokens,
} from "@vygruppen/spor-react";

import type { SanityImage } from "~/features/cms/sanity/query";
import { BlockHeading } from "~/features/portable-text/components/BlockHeading";
import { ResponsiveImage } from "~/features/portable-text/components/ResponsiveImage";
import { PortableText } from "~/features/portable-text/PortableText";
import type { LinkButtonSerializerProps } from "~/features/portable-text/serializers/LinkButtonSerializer";
import { LinkButtonSerializer } from "~/features/portable-text/serializers/LinkButtonSerializer";
import { BoxAndCardGrid } from "~/features/site/grid/BoxAndCardGrid";
import { getIcon } from "~/utils/getIcon";

export type BoxList = {
  title?: string;
  headingIcon?: string;
  description?: string;
  backgroundColor?: string;
  readMoreButton?: LinkButtonSerializerProps["value"];
  boxes: Box[];
};

export type Box = {
  _key?: string;
  title?: string;
  description?: PortableTextBlock[];
  illustration?: SanityImage;
  icon?: string;
  color: "white" | "grey" | "green";
  headingLevel: "h2" | "h3";
  fillHeight?: boolean;
  links?: {
    text: string;
    href: string;
    icon?: string;
    linkType: "external" | "internal";
  }[];
};

export const NonClickableBox = ({
  _key,
  title,
  description,
  illustration,
  icon,
  color,
  headingLevel = "h2",
  fillHeight = false,
  links,
}: Box) => {
  const mediaQuery = `@media screen and (min-width: ${tokens.default.size.breakpoint.lg})`;

  return (
    <StaticCard
      key={_key}
      colorPalette={color}
      padding={4}
      height={fillHeight ? "100%" : "auto"}
    >
      <Stack gap={2} css={{ hyphens: "auto" }}>
        {title && (
          <Flex gap={2}>
            {illustration && (
              <Box height="4rem" width="5rem">
                <ResponsiveImage
                  image={illustration}
                  size="sm"
                  maxHeight="4rem"
                  width="100%"
                  format="svg"
                />
              </Box>
            )}
            {icon && (
              <Flex
                marginTop={[0, null, null, 1.5]}
                height={[5, null, null, 8]}
                width={[8, null, null, 8]}
                justifyContent="center"
                alignItems="flex-start"
                css={{
                  [mediaQuery]: {
                    svg: {
                      height: 40,
                      width: 50,
                    },
                  },
                }}
              >
                {getIcon({
                  iconName: icon,
                })}
              </Flex>
            )}
            <Center flexDirection="column">
              <Heading as={headingLevel} variant="md" fontWeight="bold" autoId>
                {title}
              </Heading>
            </Center>
          </Flex>
        )}
        {description && <PortableText value={description} />}
        {links && (
          <Flex gap={2} wrap="wrap">
            {links.map((link) => (
              // Override margin from button serializer
              <Box
                marginTop={0}
                marginBottom={-3}
                marginRight={-2}
                key={link.text}
              >
                <LinkButtonSerializer value={link} />
              </Box>
            ))}
          </Flex>
        )}
      </Stack>
    </StaticCard>
  );
};

export const NonClickableBoxList = ({
  title,
  headingIcon,
  description,
  backgroundColor,
  readMoreButton,
  boxes,
}: BoxList) => {
  const headingLevel = title ? "h3" : "h2";
  const gridItems = boxes.map((box) => (
    <NonClickableBox
      _key={box._key}
      key={box._key}
      title={box.title}
      description={box.description}
      icon={box.icon}
      illustration={box.illustration}
      color={box.color}
      headingLevel={headingLevel}
      fillHeight
      links={box.links}
    />
  ));

  if (backgroundColor === "green") {
    return (
      <Box
        width="100vw"
        background="mint"
        position="relative"
        left="50%"
        transform="translateX(-50%)"
        paddingY={[4, 6, null, 8]}
        data-testid="non-clickable-box-list"
      >
        <Grid
          templateColumns={{
            base: "repeat(6, 1fr)",
            lg: "repeat(12, 1fr)",
          }}
          data-testid="card-block"
          width="100%"
          maxWidth="container.xl"
          marginX="auto"
          paddingX={[3, 6, 8]}
        >
          <GridItem colStart={1} colSpan={{ base: 6, lg: 12 }}>
            {title && (
              <BlockHeading
                heading={title}
                subheading={description}
                icon={headingIcon}
              />
            )}
            <BoxAndCardGrid gridItems={gridItems} />
          </GridItem>
        </Grid>
      </Box>
    );
  }

  return (
    <Box data-testid="non-clickable-box-list" as="section" marginTop={8}>
      {title && (
        <BlockHeading
          heading={title}
          subheading={description}
          icon={headingIcon}
        />
      )}
      <BoxAndCardGrid gridItems={gridItems} />
      {readMoreButton && (
        <Box marginY={4} marginTop={[1, null, 2, null]}>
          <LinkButtonSerializer value={readMoreButton} />
        </Box>
      )}
    </Box>
  );
};
