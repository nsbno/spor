import {
  Box,
  BoxProps,
  Flex,
  HStack,
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
    <HStack gap={2} display="flex" flexWrap="wrap" {...rest}>
      {colors.map((color, i) => (
        <ColorToken
          key={i}
          token={color.token}
          alias={color.alias}
          isVertical={isVertical}
        />
      ))}
    </HStack>
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
  const isTranslucent =
    alias?.includes("Alpha") || paletteName?.includes("Alpha");
  const isWhite = aliasName?.includes("White");

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
      width={
        isVertical
          ? ["100%", "calc(50% - 1.5rem)", "calc(50% - 1.5rem)", "250px"]
          : ["100%", "100%", "31%", "16.666%"]
      }
      display={isVertical ? "flex" : "block"}
      {...rest}
    >
      <Box
        height="60px"
        minWidth="44px"
        borderRight={isVertical ? "1px solid" : "none"}
        borderBottom={!isVertical ? "1px solid" : "none"}
        borderColor={!isVertical && isWhite ? "silver" : colorValue}
        borderTopLeftRadius="sm"
        borderTopRightRadius={!isVertical ? "sm" : "none"}
        borderBottomLeftRadius={isVertical ? "sm" : "none"}
        position="relative"
        backgroundColor={!isTranslucent ? colorValue : undefined}
        backgroundPosition="center center"
        backgroundRepeat="repeat"
      >
        {isTranslucent && (
          <>
            <Box
              height="60px"
              minWidth="100%"
              borderTopLeftRadius="sm"
              borderTopRightRadius={!isVertical ? "sm" : "none"}
              borderBottomLeftRadius={isVertical ? "sm" : "none"}
              position="absolute"
              zIndex={1}
              bgGradient={
                isTranslucent
                  ? `linear(to-r, ${colorValue}, ${colorValue})`
                  : undefined
              }
              backgroundPosition="center center"
              backgroundRepeat="repeat"
            />
            <Box
              height="60px"
              minWidth="100%"
              borderTopLeftRadius="sm"
              borderTopRightRadius={!isVertical ? "sm" : "none"}
              borderBottomLeftRadius={isVertical ? "sm" : "none"}
              position="absolute"
              backgroundImage={
                isTranslucent ? `${translucentBackgroundUrl}` : undefined
              }
              backgroundPosition="center center"
              backgroundRepeat="repeat"
            />
          </>
        )}
      </Box>
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
            <Text variant="xs" fontWeight="bold" whiteSpace="wrap">
              {aliasName}
            </Text>
            {aliasName !== paletteName && (
              <Text variant="xs">{paletteName}</Text>
            )}

            <Text variant="xs" marginTop={1} marginBottom={2}>
              {colorValue}
            </Text>
          </>
        )}
      </Flex>
    </StaticCard>
  );
};
