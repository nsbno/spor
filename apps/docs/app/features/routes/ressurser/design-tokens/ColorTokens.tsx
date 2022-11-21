import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Card,
  Flex,
  SimpleGrid,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/linkable-heading/LinkableHeading";
import { toTitleCase } from "~/utils/stringUtils";
import { SharedTokenLayout } from "./SharedTokenLayout";

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
          Hovedfarger
        </LinkableHeading>
        <ColorGrid
          colors={[
            tokens.color.alias.darkTeal,
            tokens.color.alias.primaryGreen,
            tokens.color.alias.greenHaze,
            tokens.color.alias.coralGreen,
            tokens.color.alias.mint,
            tokens.color.alias.white,
            tokens.color.alias.darkGrey,
            tokens.color.alias.osloGrey,
            tokens.color.alias.platinum,
            tokens.color.alias.lightGrey,
          ]}
        />

        <LinkableHeading as="h3" textStyle="md">
          Bakgrunnsfarger
        </LinkableHeading>
        <ColorGrid
          colors={[tokens.color.alias.white, tokens.color.alias.lightGrey]}
        />

        <LinkableHeading as="h3" textStyle="md">
          Tekstfarger
        </LinkableHeading>
        <ColorGrid
          colors={[
            tokens.color.alias.darkGrey,
            tokens.color.alias.white,
            tokens.color.alias.darkTeal,
          ]}
        />

        <LinkableHeading as="h3" textStyle="md">
          Detaljfarger
        </LinkableHeading>
        <ColorGrid
          colors={[
            tokens.color.alias.darkBlue,
            tokens.color.alias.ocean,
            tokens.color.alias.golden,
            tokens.color.alias.burntYellow,
            tokens.color.alias.wood,
            tokens.color.alias.chocolate,
            tokens.color.alias.pumpkin,
          ]}
        />

        <LinkableHeading as="h3" textStyle="md">
          Outlinefarger
        </LinkableHeading>
        <ColorGrid
          colors={[
            tokens.color.palette.blackAlpha["400"],
            tokens.color.alias.osloGrey,
            tokens.color.alias.greenHaze,
            tokens.color.alias.darkGrey,
            tokens.color.alias.black,
          ]}
        />

        <LinkableHeading as="h3" textStyle="md">
          Full fargepalett
        </LinkableHeading>
        {Object.entries(tokens.color.palette)
          .filter(([scaleName]) => !["white", "black"].includes(scaleName))
          .map(([scaleName, scale]) => (
            <ColorGrid key={scaleName} colors={Object.values(scale)} />
          ))}
        <ColorGrid
          colors={[tokens.color.alias.white, tokens.color.alias.black]}
        />
      </Stack>
    </SharedTokenLayout>
  );
}

type ColorGridProps = BoxProps & {
  colors: string[];
};
const ColorGrid = ({ colors, ...rest }: ColorGridProps) => {
  return (
    <SimpleGrid gap={3} columns={[2, 3, 4]} {...rest}>
      {colors.map((color, i) => (
        <ColorToken key={i} token={color} />
      ))}
    </SimpleGrid>
  );
};

type ColorTokenProps = BoxProps & { token: string };
const ColorToken = ({ token, ...rest }: ColorTokenProps) => {
  const { aliasName, paletteName, colorValue } = useTokenInfo(token);
  const isWhite = colorValue.toLowerCase() === "#ffffff";

  return (
    <Card colorScheme="white" borderRadius="sm" overflow="hidden" {...rest}>
      <Box
        height="60px"
        backgroundColor={colorValue}
        border="1px solid"
        borderColor={isWhite ? "silver" : colorValue}
        borderTopRadius="sm"
      />
      <Flex flexDirection="column" justifyContent="space-between" px={2}>
        <Box>
          <Text textStyle="xs" fontWeight="bold" whiteSpace="nowrap">
            {aliasName}
          </Text>
          <Text textStyle="xs">
            {aliasName !== paletteName ? paletteName : " "}
          </Text>
        </Box>
        <Text textStyle="xs" mt={3} mb={2}>
          {colorValue}
        </Text>
      </Flex>
    </Card>
  );
};

/** Returns the relevant display information about a token */
const useTokenInfo = (colorValue: string) => {
  const normalizedColorValue = colorValue?.toLowerCase() ?? "";
  const aliasName = getAliasName(normalizedColorValue);
  const paletteName = getPaletteName(normalizedColorValue);
  return {
    aliasName: aliasName ?? paletteName,
    paletteName: paletteName ?? aliasName,
    colorValue: normalizedColorValue.startsWith("#")
      ? normalizedColorValue.toUpperCase()
      : normalizedColorValue,
  };
};

const getAliasName = (colorValue: string) => {
  const entry = Object.entries(tokens.color.alias).find(
    ([_, value]) => colorValue === value
  );
  return entry ? toTitleCase(entry[0]) : null;
};

/**
 * Accepts a color value, and returns the palette name of that color
 */
const getPaletteName = (colorValue: string) => {
  for (let [paletteName, scale] of Object.entries(tokens.color.palette)) {
    for (let [scaleNumber, value] of Object.entries(scale)) {
      if (value === colorValue) {
        return toTitleCase(`${paletteName} ${scaleNumber}`);
      }
    }
  }
  return null;
};
