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
} from "@vygruppen/spor-react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";

import tokensJSON from "@vygruppen/spor-design-tokens/dist/tokens.json";
import { useDesignTokens } from "../utils/useDesignTokens";
import { capitalizeFirstLetter } from "~/utils/stringUtils";

type Props = {
  colorKey: keyof typeof tokensJSON.color.palette;
  colorName?: string;
};

export const PaletteTable = ({
  colorKey,
  colorName = capitalizeFirstLetter(colorKey),
}: Props) => {
  const designTokens = useDesignTokens();

  if (!designTokens) return null;

  const { tokens, getPaletteValue } = designTokens;

  const palette = tokens.color.palette;

  const aliases = tokens.aliases.filter(({ value }) =>
    value.includes(colorKey),
  );

  return (
    <Table size="md" colorPalette="white">
      <TableHeader>
        <TableRow>
          <TableColumnHeader>
            <LinkableHeading as="h3" variant="sm">
              {colorName}
            </LinkableHeading>
          </TableColumnHeader>
          <TableColumnHeader>Value</TableColumnHeader>
          <TableColumnHeader>Hex</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {aliases?.map(({ name, value }) => {
          const paletteValue = getPaletteValue(palette, value);

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
