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
import { useColors } from "./ColorTokens";

import tokensJSON from "@vygruppen/spor-design-tokens/dist/tokens.json";

interface ColorTableProps {
  colorKey: keyof typeof tokensJSON.color.vyDigital;
  name: string;
}

interface FlattenedColor {
  name: string;
  value: string;
}

const flattenColors = (
  obj: Record<string, any>,
  colorMode: any,
  path: string[] = [],
): FlattenedColor[] => {
  return Object.entries(obj).reduce<FlattenedColor[]>((acc, [key, value]) => {
    if (typeof value === "object" && value !== null) {
      return [...acc, ...flattenColors(value, colorMode, [...path, key])];
    }
    if (key === `_${colorMode}`) {
      return [
        ...acc,
        {
          name: `${""}${path.join(".")}`,
          value: value.replace("colors.", ""),
        },
      ];
    }
    return acc;
  }, []);
};

export const ColorTable: React.FC<ColorTableProps> = ({ name, colorKey }) => {
  const { colorMode } = useColorMode();

  const colors = useColors();

  const color = colors?.[colorKey];

  if (!color) return null;

  const aliases = tokensJSON.color.alias;

  const colorList = flattenColors(color, colorMode);

  return (
    <Table size="md" colorPalette="white">
      <TableHeader>
        <TableRow>
          <TableColumnHeader>
            <LinkableHeading as="h3" variant="sm">
              {name}
            </LinkableHeading>
          </TableColumnHeader>
          <TableColumnHeader>Name</TableColumnHeader>
          <TableColumnHeader>Value</TableColumnHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {colorList?.map(({ name, value }) => {
          const alias = aliases[value as keyof typeof aliases]?.replace(
            "colors.",
            "",
          );

          return (
            <TableRow key={name} color="text">
              <TableCell>
                <Flex gap="2" alignItems="center">
                  <Box
                    bg={value}
                    borderRadius="xs"
                    width="7"
                    height="7"
                    border={
                      value.includes("white")
                        ? "1px solid rgba(0,0,0,0.40)"
                        : "none"
                    }
                  ></Box>
                  {`${colorKey}.${name}`.replace(".DEFAULT", "")}
                </Flex>
              </TableCell>
              <TableCell>{alias ? value : null}</TableCell>
              <TableCell>
                <Badge colorPalette="grey">{alias ?? value}</Badge>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ColorTable;
