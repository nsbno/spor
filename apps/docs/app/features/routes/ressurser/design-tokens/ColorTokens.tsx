import { useClipboard } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  CopyOutline24Icon,
  Flex,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  SuccessOutline24Icon,
  Text,
} from "@vygruppen/spor-react";
import { toTitleCase } from "~/utils/string-utils";
import { SharedTokenLayout } from "./SharedTokenLayout";

type ColorName = keyof typeof tokens.color.alias;
type ColorToken = {
  value: string;
  name: string;
  original: { value: string };
  attributes: { item: string; subitem?: string };
};

type ColorCategory = {
  title: string;
  colors: Partial<{ [key in ColorName]: ColorToken }>;
};
const colorCategories: ColorCategory[] = [
  { title: "Hovedfarger", colors: tokens.color.main },
  { title: "Bakgrunnsfarger", colors: tokens.color.background },
  { title: "Tekstfarger", colors: tokens.color.text },
  { title: "Detaljfarger", colors: tokens.color.detail },
  { title: "Outlinefarger", colors: tokens.color.outline },
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
          <Heading as="h3" textStyle="md">
            Full fargepalett
          </Heading>
          <ColorGrid
            colors={{
              white: tokens.color.alias.white,
              black: tokens.color.alias.black,
            }}
          />
          {Object.values(tokens.color.palette)
            .filter((palette) => !palette.value)
            .map((palette, i) => {
              return <ColorGrid key={i} colors={palette} />;
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
    <Heading as="h3" textStyle="md">
      {title}
    </Heading>
    <ColorGrid colors={colors} />
  </Stack>
);

type ColorTokenProps = BoxProps & { token: ColorToken };
const ColorToken = ({ token, ...rest }: ColorTokenProps) => {
  const isWhite = token.value.toLowerCase() === "#ffffff";
  const { hasCopied, onCopy } = useClipboard(token.original.value);
  const name = `${token.attributes.item} ${
    token.attributes.subitem || ""
  }`.trim();
  const value = token.original.value.startsWith("rgba")
    ? token.original.value
    : token.value.toUpperCase();

  const paletteName = toTitleCase(getPaletteName(value));
  const aliasName = toTitleCase(getAliasName(value) || paletteName);
  return (
    <Box
      border="1px solid"
      borderColor="alias.osloGrey"
      borderRadius="sm"
      overflow="hidden"
      {...rest}
    >
      <Box
        height="60px"
        backgroundColor={value}
        borderBottom="1px solid"
        borderColor={isWhite ? "alias.osloGrey" : value}
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
  const token = Object.values(tokens.color.palette)
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
  const token = Object.values(tokens.color.alias).find(
    (token) => token.value.toLowerCase() === value.toLowerCase()
  );
  return token ? token.attributes.item : null;
};
