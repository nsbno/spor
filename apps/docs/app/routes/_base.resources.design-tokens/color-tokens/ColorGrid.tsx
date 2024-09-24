import {
  Box,
  BoxProps,
  Flex,
  SimpleGrid,
  Stack,
  StaticCard,
  Text,
} from "@vygruppen/spor-react";
import { useTokenInfo } from "./utils";
import translucentBackgroundUrl from "../translucent-background.svg";

type ColorGridProps = {
  colors: { token: string; alias?: string }[];
  isVertical?: boolean;
};

export const ColorGrid = ({ colors, isVertical, ...rest }: ColorGridProps) => {
  return (
    <Stack
      gap={2}
      display="flex"
      flexDirection="row"
      flexWrap={"wrap"}
      {...rest}
    >
      {colors.map((color, i) => (
        <ColorToken
          key={i}
          token={color.token}
          alias={color.alias}
          isVertical={isVertical}
        />
      ))}
    </Stack>
  );
};

type ColorTokenProps = BoxProps & {
  token: string;
  alias?: string;
  isVertical?: boolean;
};

export const ColorToken = ({
  token,
  alias,
  isVertical = true,
  ...rest
}: ColorTokenProps) => {
  const { aliasName, paletteName, colorValue } = useTokenInfo(token);
  const isWhite = aliasName?.includes("White");
  const isTranslucent = paletteName?.includes("Alpha");

  const colorBackground = isTranslucent
    ? `linear-gradient(to right, ${colorValue}, ${colorValue}), url(${translucentBackgroundUrl})`
    : colorValue;

  const tokenParts = token
    .split(".")
    .filter((part) => part !== "light" && part !== "dark");
  let formattedToken = tokenParts.join("-");

  if (tokenParts.length === 3) {
    formattedToken = `${tokenParts[0]}-${tokenParts[1]}:${tokenParts[2]}`;
  }

  return (
    <StaticCard
      colorScheme="white"
      border="1px solid"
      borderColor="silver"
      borderRadius="sm"
      width={[
        "100%",
        "calc(50% - 1.5rem)",
        "calc(50% - 1.5rem)",
        "250px",
      ]}
      display={isVertical ? "flex" : "block"}
      {...rest}
    >
      <Box
        height="60px"
        minWidth="44px"
        borderRight="1px solid"
        borderColor="silver"
        borderTopLeftRadius="sm"
        borderBottomLeftRadius="sm"
        position="relative"
        background={colorBackground}
        backgroundPosition="center center"
        backgroundRepeat="repeat"
      />
      <Flex flexDirection="column" paddingX={2} paddingTop={1} gap={0.5}>
        {isVertical ? (
          <>
            <Text variant="xs" fontWeight="bold" whiteSpace="nowrap">
              {formattedToken}
            </Text>
            <Text variant="xs">{alias}</Text>
          </>
        ) : (
          <>
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
          </>
        )}
      </Flex>
    </StaticCard>
  );
};
