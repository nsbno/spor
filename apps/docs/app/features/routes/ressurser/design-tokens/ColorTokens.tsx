import { useClipboard } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  CopyOutline24Icon,
  Flex,
  IconButton,
  SimpleGrid,
  Stack,
  SuccessOutline24Icon,
  Text,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";
import { toTitleCase } from "~/utils/stringUtils";
import { SharedTokenLayout } from "./SharedTokenLayout";

console.log(tokens.color);

type ColorToken = {
  value: string;
  name: string;
  original: { value: string };
};

type ColorCategory = {
  title: string;
  colors: ColorToken[];
};
const colorCategories: ColorCategory[] = [
  {
    title: "Hovedfarger",
    colors: [
      tokens.color.darkTeal,
      tokens.color.primaryGreen,
      tokens.color.greenHaze,
      tokens.color.coralGreen,
      tokens.color.mint,
      tokens.color.darkGrey,
      tokens.color.osloGrey,
      tokens.color.platinum,
      tokens.color.lightGrey,
      tokens.color.white,
    ],
  },
  {
    title: "Bakgrunnsfarger",
    colors: [tokens.color.white, tokens.color.lightGrey],
  },
  {
    title: "Tekstfarger",
    colors: [
      tokens.color.darkGrey,
      tokens.color.white,
      tokens.color.darkTeal,
      tokens.color.pine,
    ],
  },
  {
    title: "Detaljfarger",
    colors: [
      tokens.color.darkBlue,
      tokens.color.ocean,
      tokens.color.golden,
      tokens.color.burntYellow,
      tokens.color.wood,
      tokens.color.orange[500],
      tokens.color.pumpkin,
    ],
  },
  {
    title: "Outlinefarger",
    colors: [
      tokens.color.blackAlpha[200],
      tokens.color.blackAlpha[400],
      tokens.color.greenHaze,
      tokens.color.osloGrey,
      tokens.color.whiteAlpha[300],
    ],
  },
];

export function ColorTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Farger"
      description={
        <Text>
          Hovedfargene våre er de fargene vi bruker mest. Disse brukes som bla.
          bakgrunnsfarger, i hovedfunksjonalitet, navigasjon og knapper – for å
          lage et rammeverk for våre tjenester. Ved å bruke mest av disse
          fargene, skaper vi en helhet og gjenkjennbarhet på tvers av våre
          digitale flater.
        </Text>
      }
    >
      <Stack spacing={7}>
        {colorCategories.map((category) => (
          <ColorCategorySection key={category.title} {...category} />
        ))}
        <Stack spacing={3}>
          <LinkableHeading as="h3" textStyle="md">
            Full fargepalett
          </LinkableHeading>
          <ColorGrid colors={[tokens.color.white, tokens.color.black]} />
          {Object.values(tokens.color)
            .filter((color) => !color.value)
            .map((color, i) => {
              return <ColorGrid key={i} colors={color} />;
            })}
        </Stack>
      </Stack>
    </SharedTokenLayout>
  );
}

type ColorGridProps = BoxProps & {
  colors: ColorCategory["colors"];
};
const ColorGrid = ({ colors, ...rest }: ColorGridProps) => {
  return (
    <SimpleGrid gap={3} columns={[2, 3, 6, 7]} {...rest}>
      {Object.values(colors).map((token, i) => (
        <ColorToken key={i} token={token} />
      ))}
    </SimpleGrid>
  );
};

const ColorCategorySection = ({ title, colors }: ColorCategory) => (
  <Stack>
    <LinkableHeading as="h3" textStyle="md">
      {title}
    </LinkableHeading>
    <ColorGrid colors={colors} />
  </Stack>
);

type ColorTokenProps = BoxProps & { token: ColorToken };
const ColorToken = ({ token, ...rest }: ColorTokenProps) => {
  const isWhite = token.value.toLowerCase() === "#ffffff";
  const { hasCopied, onCopy } = useClipboard(token.original.value);
  const value = token.original.value.startsWith("rgba")
    ? token.original.value
    : token.value.toUpperCase();

  const paletteName = toTitleCase(getPaletteName(value));
  const aliasName = toTitleCase(getAliasName(value) || paletteName);
  return (
    <Box
      border="1px solid"
      borderColor="osloGrey"
      borderRadius="sm"
      overflow="hidden"
      {...rest}
    >
      <Box
        height="60px"
        backgroundColor={value}
        borderBottom="1px solid"
        borderColor={isWhite ? "osloGrey" : value}
      />
      <Box px={2} pt={1} pb={2}>
        <Text textStyle="xs" fontWeight="bold">
          {aliasName}
        </Text>
        {aliasName !== paletteName && <Text textStyle="xs">{paletteName}</Text>}
        <Flex justifyContent="space-between" alignItems="center">
          <Text textStyle="xs">{value}</Text>
          <IconButton
            variant="ghost"
            icon={hasCopied ? <SuccessOutline24Icon /> : <CopyOutline24Icon />}
            title="Kopier fargekode"
            aria-label="Kopier fargekode"
            onClick={onCopy}
          />
        </Flex>
      </Box>
    </Box>
  );
};

/**
 * Accepts a color value, and returns the palette name of that color
 */
const getPaletteName = (value: string) => {
  const normalizedValue = value.toLowerCase();
  const token = Object.values(tokens.color)
    .flatMap((scale) => (scale.value ? [scale] : Object.values(scale)))
    .find(
      (token) =>
        token.original.value === normalizedValue ||
        token.value === normalizedValue
    );

  return token
    ? `${token.attributes.item} ${token.attributes.subitem ?? ""}`
    : value;
};

/**
 * Accepts a color value, and returns the alias name of that color - if there is an alias for that color.
 */
const getAliasName = (value: string) => {
  const token = Object.values(tokens.color).find(
    (token) => token.value.toLowerCase() === value.toLowerCase()
  );
  return token ? token.attributes.item : null;
};
