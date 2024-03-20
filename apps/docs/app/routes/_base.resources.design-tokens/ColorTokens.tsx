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
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { toTitleCase } from "~/utils/stringUtils";
import { SharedTokenLayout } from "./SharedTokenLayout";
import translucentBackgroundUrl from "./translucent-background.svg";

export function ColorTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Colors"
      description={
        <Text>
          Our main colors are the ones we use the most. These are used for,
          among other things, background colors, in core functionality,
          navigation, and buttons – to create a framework for our services. By
          using mostly these colors, we create a unity and recognizability
          across our digital platforms.
        </Text>
      }
    >
      <Stack spacing={3}>
        <LinkableHeading as="h3" variant="md">
          Main colors
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

        <LinkableHeading as="h3" variant="md">
          Background colors
        </LinkableHeading>
        <ColorGrid
          colors={[tokens.color.alias.white, tokens.color.alias.lightGrey]}
        />

        <LinkableHeading as="h3" variant="md">
          Text colors
        </LinkableHeading>
        <ColorGrid
          colors={[
            tokens.color.alias.darkGrey,
            tokens.color.alias.white,
            tokens.color.alias.darkTeal,
            tokens.color.alias.pine,
          ]}
        />

        <LinkableHeading as="h3" variant="md">
          Detail colors
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

        <LinkableHeading as="h3" variant="md">
          Outline colors
        </LinkableHeading>
        <ColorGrid
          colors={[
            tokens.color.palette.blackAlpha["200"],
            tokens.color.palette.blackAlpha["400"],
            tokens.color.alias.greenHaze,
            tokens.color.alias.osloGrey,
            tokens.color.alias.white,
          ]}
        />

        <LinkableHeading as="h3" variant="md">
          Complete palette
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
  const isWhite = aliasName?.includes("White");
  const isTranslucent = paletteName?.includes("Alpha");

  const colorBackground = isTranslucent
    ? `linear-gradient(to right, ${colorValue}, ${colorValue}), url(${translucentBackgroundUrl})`
    : colorValue;

  return (
    <Card colorScheme="white" borderRadius="sm" overflow="hidden" {...rest}>
      <Box
        height="60px"
        border="1px solid"
        borderColor={isWhite ? "silver" : colorValue}
        borderTopRadius="sm"
        position="relative"
        background={colorBackground}
        backgroundPosition="center center"
        backgroundRepeat="repeat"
      />
      <Flex flexDirection="column" justifyContent="space-between" paddingX={2}>
        <Box>
          <Text variant="xs" fontWeight="bold" whiteSpace="nowrap">
            {aliasName}
          </Text>
          <Text variant="xs">
            {aliasName !== paletteName ? paletteName : " "}
          </Text>
        </Box>
        <Text variant="xs" marginTop={3} marginBottom={2}>
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
    ([_, value]) => colorValue === value,
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
