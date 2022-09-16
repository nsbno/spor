import { useClipboard } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Card,
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

type Color = keyof typeof tokens.color;
type ColorToken = {
  value: string;
  name: string;
  original: { value: string };
  attributes: { item: string; subitem?: string };
};

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
      <Stack spacing={3}>
        <LinkableHeading as="h3" textStyle="md">
          Full fargepalett
        </LinkableHeading>
        <ColorGrid colors={tokens.color} />
      </Stack>
    </SharedTokenLayout>
  );
}

type ColorGridProps = BoxProps & {
  colors: typeof tokens.color;
};
const ColorGrid = ({ colors, ...rest }: ColorGridProps) => {
  return (
    <SimpleGrid gap={3} columns={[2, 3, 4]} {...rest}>
      {Object.values(colors).map((token, i) => (
        <ColorToken key={i} token={token} />
      ))}
    </SimpleGrid>
  );
};

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
    <Card colorScheme="white" borderRadius="sm" overflow="hidden" {...rest}>
      <Box
        height="60px"
        backgroundColor={value}
        borderBottom="1px solid"
        borderColor={isWhite ? "osloGrey" : value}
      />
      <Box px={2}>
        <Text textStyle="xs" fontWeight="bold" whiteSpace="nowrap">
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
            size="sm"
            borderRadius="sm"
          />
        </Flex>
      </Box>
    </Card>
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
