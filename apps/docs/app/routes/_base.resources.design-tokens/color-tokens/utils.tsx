import tokens from "@vygruppen/spor-design-tokens";
import { useTheme } from "@vygruppen/spor-react";
import { toTitleCase } from "~/utils/stringUtils";

export type Palette = {
  [key: string]: string[];
};

export const useTokenInfo = (colorValue: string) => {
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

export const useTokenAlias = (token: string) => {
  const theme = useTheme();
  const tokenParts = token.split(".");
  let alias = "";

  if (tokenParts.length === 3) {
    const [category, subcategory, mode] = tokenParts;
    const colorValue = theme.colors[category]?.[subcategory]?.[mode] || "";

    const aliasName = getAliasName(colorValue);
    alias = aliasName || getPaletteName(colorValue) || "";
  } else if (tokenParts.length === 4 && tokenParts[2] === "Alpha") {
    // Handle Alpha colors
    const [category, subcategory, alpha, mode] = tokenParts;
    const colorValue =
      theme.colors[category]?.[subcategory]?.[alpha]?.[mode] || "";

    const aliasName = getAliasName(colorValue);
    alias = aliasName || getPaletteName(colorValue) || "";
  } else if (tokenParts.length === 4) {
    // Handle base colors with an extra value
    const [category, subcategory, state, mode] = tokenParts;
    const colorValue =
      theme.colors[category]?.[subcategory]?.[state]?.[mode] || "";

    const aliasName = getAliasName(colorValue);
    alias = aliasName || getPaletteName(colorValue) || "";
  }

  return alias;
};

export const generateColorArray = (tokens: string[]) =>
  tokens.map((token) => ({
    token,
    alias: useTokenAlias(token),
  }));
