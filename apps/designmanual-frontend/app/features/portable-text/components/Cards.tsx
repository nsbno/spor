import { LinkOutOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  createTexts,
  Flex,
  Grid,
  GridItem,
  Heading,
  PressableCard,
  Stack,
  Text,
  tokens,
  useTranslation,
} from "@vygruppen/spor-react";
import { Link } from "react-router";

import type { SanityImage } from "~/features/cms/sanity/query";
import { BlockHeading } from "~/features/portable-text/components/BlockHeading";
import { ResponsiveImage } from "~/features/portable-text/components/ResponsiveImage";
import { BoxAndCardGrid } from "~/features/site/grid/BoxAndCardGrid";
import { getIcon } from "~/utils/getIcon";
import { useLinkProps } from "~/utils/link";

type CardItem = {
  _key: string;
  icon: string;
  title: string;
  href: string;
  anchor?: string;
  text: string;
  illustration?: SanityImage;
};

export type Cards = {
  items: CardItem[];
  titleOfBlock: string;
  headingIcon?: string;
  backgroundColor?: string;
};

type SporColor = keyof typeof tokens.default.color.alias;
const colors: SporColor[] = [
  "blonde",
  "seaMist",
  "saffron",
  "lightRed",
  "glacier",
];
type CardItemProps = {
  item: CardItem;
  color: SporColor;
};

const IconStyle = {
  maxWidth: 30,
  maxHeight: 30,
  minWidth: 30,
  minHeight: 30,
  borderRadius: "md",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const illustrationStyle = {
  display: "flex",
  maxWidth: 66,
  maxHeight: 47,
  minWidth: 66,
  minHeight: 47,
};

const isInternalLink = (href?: string) => {
  if (!href) {
    return false;
  }
  if (href.startsWith("/")) return true;
};

const linkOutIcon = (href: string) => {
  if (!isInternalLink(href)) {
    return <LinkOutOutline24Icon />;
  }
};

export const Cards = ({
  items,
  titleOfBlock,
  headingIcon,
  backgroundColor,
}: Cards) => {
  const gridItems = items.map((item, index) => (
    <CardItem
      key={item._key}
      item={item}
      color={colors[index % colors.length]}
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
        as="section"
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
          {titleOfBlock && (
            <GridItem colStart={1} colSpan={{ base: 6, lg: 12 }}>
              <BlockHeading
                heading={titleOfBlock}
                headingLevel="h2"
                icon={headingIcon}
              />
            </GridItem>
          )}
          <GridItem colStart={1} colSpan={{ base: 6, lg: 12 }}>
            <BoxAndCardGrid gridItems={gridItems} />
          </GridItem>
        </Grid>
      </Box>
    );
  }

  return (
    <Grid data-testid="card-block" marginTop={8}>
      {titleOfBlock && (
        <GridItem colStart={1} colSpan={[6, null, null, 12]}>
          <BlockHeading
            heading={titleOfBlock}
            headingLevel="h2"
            icon={headingIcon}
          />
        </GridItem>
      )}
      <GridItem>
        <BoxAndCardGrid gridItems={gridItems} />
      </GridItem>
    </Grid>
  );
};
const WithIllustration = ({ item }: { item: CardItem }) => {
  const { linkProps } = useLinkProps(item.href, item.anchor);
  const isExternalLink = !isInternalLink(item.href);
  const { t } = useTranslation();
  return (
    <PressableCard
      display="flex"
      variant="floating"
      padding={3}
      height="100%"
      {...linkProps}
      wordBreak="break-word"
      as={linkProps.as as React.ElementType}
    >
      <Stack gap={1.5} css={{ hyphens: "auto" }}>
        <Flex gap={2}>
          <Box {...illustrationStyle}>
            {item.illustration && (
              <ResponsiveImage
                image={item.illustration}
                size="sm"
                height="100%"
                alt={item.illustration.altText ?? ""}
                format="svg"
              />
            )}
          </Box>
          <Flex alignItems="center" width="100%">
            <Heading
              as="h3"
              variant="md"
              fontWeight="bold"
              color="text.secondary"
              autoId
              aria-label={
                isExternalLink
                  ? t(texts.ariaLabelExternalLink(item.title))
                  : `${item.title}`
              }
            >
              {item.title}
            </Heading>
          </Flex>
          {!isInternalLink(item.href) && (
            <Flex>
              <Box>{linkOutIcon(item.href)}</Box>
            </Flex>
          )}
        </Flex>
        <Box>
          <Text>{item.text}</Text>
        </Box>
      </Stack>
    </PressableCard>
  );
};

const WithIcon = ({ item, color }: { item: CardItem; color: SporColor }) => {
  const { linkProps } = useLinkProps(item.href, item.anchor);
  const { t } = useTranslation();
  const isExternalLink = !isInternalLink(item.href);
  return (
    <PressableCard
      variant="floating"
      display="flex"
      padding={3}
      height="100%"
      {...linkProps}
      as={linkProps.as as React.ElementType}
    >
      <Stack width="100%" {...(item.text ? { gap: 1.5 } : {})}>
        <Flex gap={2} {...(!item.text && { alignItems: "center" })}>
          <Box {...IconStyle} backgroundColor={color}>
            <Box minWidth="20px" minHeight="20px">
              {getIcon({ iconName: item.icon, style: "Outline" })}
            </Box>
          </Box>
          <Flex alignItems="center" width="100%">
            <Box>
              <Heading
                as="h3"
                fontWeight="bold"
                variant="sm"
                color="text.secondary"
                autoId
                aria-label={
                  isExternalLink
                    ? t(texts.ariaLabelExternalLink(item.title))
                    : `${item.title}.`
                }
              >
                {item.title}
              </Heading>
            </Box>
          </Flex>
          <Box>{linkOutIcon(item.href)}</Box>
        </Flex>
        <Box>
          <Text>{item.text}</Text>
        </Box>
      </Stack>
    </PressableCard>
  );
};

const NoIconOrIllustration = ({ item }: { item: CardItem }) => {
  const { t } = useTranslation();
  const isExternalLink = !isInternalLink(item.href);
  return (
    <PressableCard
      display="flex"
      variant="floating"
      padding={3}
      height="100%"
      asChild
    >
      <Link
        to={item.href + (item.anchor ? `#${item.anchor}` : "")}
        target={isInternalLink(item.href) ? undefined : "_blank"}
        rel="noreferrer"
      >
        <Stack gap={1.5}>
          <Flex gap={2} alignItems="center" width="100%">
            <Box width="100%">
              <Heading
                as="h3"
                variant="md"
                fontWeight="bold"
                color="text.secondary"
                autoId
                aria-label={
                  isExternalLink
                    ? t(texts.ariaLabelExternalLink(item.title))
                    : `${item.title}.`
                }
              >
                {item.title}
              </Heading>
            </Box>
            <Flex>
              <Box>{linkOutIcon(item.href)}</Box>
            </Flex>
          </Flex>
          <Box>
            <Text>{item.text}</Text>
          </Box>
        </Stack>
      </Link>
    </PressableCard>
  );
};

const WithIconNoTitle = ({
  item,
  color,
}: {
  item: CardItem;
  color: SporColor;
}) => {
  const { linkProps } = useLinkProps(item.href, item.anchor);
  const { t } = useTranslation();
  const isExternalLink = !isInternalLink(item.href);
  return (
    <PressableCard
      variant="floating"
      display="flex"
      padding={3}
      height="100%"
      {...linkProps}
      as={linkProps.as as React.ElementType}
    >
      <Box width="100%">
        <Flex gap={2} alignItems="center" width="100%">
          <Box {...IconStyle} backgroundColor={color} width="100%">
            <Box minWidth="20px" minHeight="20px">
              {getIcon({ iconName: item.icon })}
            </Box>
          </Box>
          <Box width="100%">
            <Heading
              as="h3"
              variant="sm"
              color="text.secondary"
              autoId
              aria-label={
                isExternalLink
                  ? t(texts.ariaLabelExternalLink(item.text))
                  : `${item.text}.`
              }
            >
              {item.text}
            </Heading>
          </Box>
          <Flex>
            <Box>{linkOutIcon(item.href)}</Box>
          </Flex>
        </Flex>
      </Box>
    </PressableCard>
  );
};

const CardItem = ({ item, color }: CardItemProps) => {
  if (item.illustration) {
    return <WithIllustration item={item} />;
  } else if (item.icon && item.title) {
    return <WithIcon item={item} color={color} />;
  } else if (item.icon && !item.title) {
    return <WithIconNoTitle item={item} color={color} />;
  } else {
    return <NoIconOrIllustration item={item} />;
  }
};

const texts = createTexts({
  ariaLabelExternalLink: (title) => ({
    en: `${title}. This is an external link that opens in a new tab.`,
    nb: `${title}. Dette er en ekstern lenke som åpnes i ny fane.`,
    nn: `${title}. Dette er ein ekstern lenke som opnar i ny fane.`,
    sv: `${title}. Detta är en extern länk som öppnas i en ny flik.`,
  }),
});
