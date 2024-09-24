import {
  Box,
  BoxProps,
  Flex,
  Stack,
  StaticCard,
  Text,
} from "@vygruppen/spor-react";

import translucentBackgroundUrl from "../translucent-background.svg";
import { useTokenInfo } from "./utils";

type ColorGridProps = BoxProps & {
  colors: string[];
};
export const ColorGridDefault = ({ colors, ...rest }: ColorGridProps) => {
  return (
    <Stack gap={2} display="flex" flexDirection="row" flexWrap="wrap" {...rest}>
      {colors.map((color, i) => (
        <ColorToken key={i} token={color} />
      ))}
    </Stack>
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
    <StaticCard
      colorScheme="white"
      border="1px solid"
      borderColor={"silver"}
      borderRadius="sm"
      overflow="hidden"
      /* width={[1, 1 / 2, 1 / 4, 1 / 6]} */
      width={["100%", "50%", "25%", "16.666%"]}
      {...rest}
    >
      <Box
        height="60px"
        borderBottom="1px solid"
        borderColor={isWhite ? "silver" : colorValue}
        borderTopRadius="sm"
        position="relative"
        background={colorBackground}
        backgroundPosition="center center"
        backgroundRepeat="repeat"
      />
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        paddingX={2}
        paddingTop={1}
      >
        <Box>
          <Text variant="xs" fontWeight="bold" whiteSpace="wrap">
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
    </StaticCard>
  );
};
