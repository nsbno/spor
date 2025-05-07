import tokensJSON from "@vygruppen/spor-design-tokens/tokens.json";
import { Brand, useColorMode } from "@vygruppen/spor-react";
import { useEffect, useState } from "react";

import { useBrand } from "~/utils/brand";

export type Palette = {
  [key: string]: string | { [shade: string]: string };
};

export type TokenColorKey = keyof typeof tokensJSON.color.vyDigital;

const useGetThemeColorTokens = () => {
  const brand = useBrand();

  switch (brand) {
    case Brand.VyDigital: {
      return tokensJSON.color.vyDigital;
    }
    case Brand.CargoNet: {
      return tokensJSON.color.cargonet;
    }
    case Brand.VyUtvikling: {
      return tokensJSON.color.vyUtvikling;
    }
    default: {
      return tokensJSON.color.vyDigital;
    }
  }
};

type FlattenedColor = {
  name: string;
  value: string;
};

/**
 * Recursively extracts and flattens color tokens from a nested object based on the current color mode.
 *
 * @param obj - The nested object containing color tokens.
 * @param colorMode - The current color mode (e.g., "light" or "dark").
 * @param path - An array representing the current path in the object hierarchy (used for recursion).
 * @returns An array of flattened color objects, each containing a name and a value.
 */
const extractFlattenedColors = (
  obj: object,
  colorMode: string,
  path: string[] = [],
): FlattenedColor[] => {
  const result: FlattenedColor[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      result.push(...extractFlattenedColors(value, colorMode, [...path, key]));
    } else if (key === `_${colorMode}`) {
      result.push({
        name: `${""}${path.join(".")}`,
        value: value.replace("colors.", ""),
      });
    }
  }
  return result;
};

/**
 * This hook ensures that the tokensJSON is only accessed on the client side.
 * Since tokensJSON is unavailable during server-side rendering, we wait until
 * the component has mounted before returning it.
 * It also reformats the tokens for better use in docs and provides a function to get the palette value based on the color and shade.
 */
export const useDesignTokens = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const themeColorTokens = useGetThemeColorTokens();
  const { colorMode } = useColorMode();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const aliases = Object.entries(tokensJSON.color.alias)
    .map(([name, value]) => ({ name, value: value.replace("colors.", "") }))
    .reverse();

  const flattenedColorTokens = extractFlattenedColors(
    themeColorTokens,
    colorMode,
  );

  const getPaletteValue = (palette: Palette, paletteKey: string) => {
    const [color, shade] = paletteKey.split(".");
    const paletteColor = palette[color];

    if (typeof paletteColor === "object" && paletteColor !== null) {
      return paletteColor[shade] || null;
    }

    return paletteColor || null;
  };

  const palette: Palette = tokensJSON.color.palette;

  return {
    getPaletteValue,

    getFlattenedColors: (colorKey: TokenColorKey) =>
      extractFlattenedColors(themeColorTokens[colorKey], colorMode),

    tokens: {
      ...tokensJSON,
      themeColorTokens,
      palette,
      aliases,
      flattenedColorTokens,
    },
  };
};
