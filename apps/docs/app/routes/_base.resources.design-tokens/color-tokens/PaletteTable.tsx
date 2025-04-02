import {
  Badge,
  Box,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableColumnHeader,
  TableHeader,
  TableRow,
  useColorMode,
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";

import tokensJSON from "@vygruppen/spor-design-tokens/dist/tokens.json";
import { useEffect, useState } from "react";

type Palette = {
  [key: string]: string | { [shade: string]: string };
};

export const PaletteTable = () => {
  const { colorMode } = useColorMode();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const aliases = Object.entries(tokensJSON.color.alias).map(
    ([name, value]) => ({ name, value }),
  );

  const palette: Palette = tokensJSON.color.palette;

  const getPaletteValue = (key: string) => {
    const [color, shade] = key.split(".");
    const paletteColor = palette[color];

    if (typeof paletteColor === "object" && paletteColor !== null) {
      return paletteColor[shade] || null;
    }

    return paletteColor || null;
  };

  return (
    <Table size="md" colorPalette="white">
      <TableHeader>
        <TableRow>
          <TableColumnHeader>
            <LinkableHeading as="h3" variant="sm">
              Name
            </LinkableHeading>
          </TableColumnHeader>
          <TableColumnHeader>Alias</TableColumnHeader>
          <TableColumnHeader>Hex</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {aliases?.map(({ name, value }) => {
          const paletteValue = getPaletteValue(value.replace("colors.", ""));

          return (
            <TableRow key={name} color="text">
              <TableCell>
                <Flex gap="2" alignItems="center">
                  <Box
                    bg={name}
                    borderRadius="xs"
                    width="7"
                    height="7"
                    border={
                      value.includes("white")
                        ? "1px solid rgba(0,0,0,0.40)"
                        : "none"
                    }
                  ></Box>
                  {name}
                </Flex>
              </TableCell>
              <TableCell>{value.replace("colors.", "")}</TableCell>
              <TableCell>
                <Badge colorPalette="grey">{paletteValue}</Badge>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
