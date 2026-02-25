import { CheckmarkFill18Icon } from "@vygruppen/spor-icon-react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { useState } from "react";

export type ColorCard = {
  variableName: string;
  valueName?: string;
  hexValue: string;
};

export type ColorCards = {
  items: ColorCard[];
  titleOfBlock: string;
  headingIcon: string;
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Failed to copy:", error);
  }
};
function cleanHex(hex: string) {
  return hex.replaceAll(/[\u200B-\u200D\uFEFF]/g, "");
}

const ColorCard = ({ variableName, valueName, hexValue }: ColorCard) => {
  const [hasCopied, setHasCopied] = useState(false);
  return (
    <Flex
      direction="column"
      width={["100px", "110px"]}
      border="1px solid"
      borderRadius={8}
      bg="bg"
    >
      <Box
        bg={cleanHex(hexValue)}
        height="70px"
        width="100%"
        borderTopRadius={8}
      />

      <Flex direction="column" p={1}>
        <Stack gap={0}>
          <Text fontWeight="bold" fontSize="2xs">
            {variableName}
          </Text>
          {valueName ? <Text fontSize="2xs">{valueName}</Text> : null}
        </Stack>

        <Button
          variant="ghost"
          size="xs"
          p={0}
          onClick={() => {
            copyToClipboard(hexValue);
            setHasCopied(true);
            setTimeout(() => {
              setHasCopied(false);
            }, 2000);
          }}
          _hover={{ textDecoration: "underline", bg: "transparent" }}
        >
          {hexValue.toUpperCase()}
          {hasCopied && <CheckmarkFill18Icon />}
        </Button>
      </Flex>
    </Flex>
  );
};

export const ColorCards = ({ items }: ColorCards) => {
  const gridItems = items.map((item, index) => (
    <ColorCard
      key={index}
      variableName={item.variableName}
      valueName={item.valueName}
      hexValue={item.hexValue}
    />
  ));

  return (
    <Grid
      templateColumns={[
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(5, 1fr)",
        "repeat(6, 1fr)",
      ]}
      rowGap={2}
      width="100%"
      maxWidth="container.xl"
    >
      {gridItems.map((g) => (
        <GridItem key={g.key} justifyContent="center" display="flex">
          {g}
        </GridItem>
      ))}
    </Grid>
  );
};
