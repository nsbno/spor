import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";
import { animationStyles } from "./tokens/animation-styles";
import { breakpoints } from "./tokens/breakpoints";
import { globalCss } from "./tokens/global-css";
import { keyframes } from "./tokens/keyframes";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { slotRecipes } from "./slot-recipes";
import { textStyles } from "./tokens/text-styles";
import { tokens } from "./tokens";
import { Brand } from "./brand";
import { config } from "./tokens/config";

const generateTheme = (brand: Brand) => {
  return defineConfig({
    ...config,
    globalCss,
    theme: {
      breakpoints,
      keyframes,
      tokens,
      semanticTokens: semanticTokens[brand],
      recipes,
      slotRecipes,
      textStyles,
      animationStyles,
    },
  });
};

function transformColors<T extends Record<string, any>>(
  input: T,
  mode: "light" | "dark" = "light",
): Record<string, Record<string, string>> {
  const modeKey = mode === "dark" ? "_dark" : "_light";

  function extractColors(
    obj: Record<string, any>,
    prefix = "",
  ): Record<string, string> {
    return Object.entries(obj).reduce(
      (acc: Record<string, string>, [key, value]) => {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (value?.value?.[modeKey]) {
          acc[newKey] = value.value[modeKey].replace("colors.", "");
        } else if (typeof value === "object" && !Array.isArray(value)) {
          Object.assign(acc, extractColors(value, newKey));
        }

        return acc;
      },
      {},
    );
  }

  return Object.keys(input).reduce(
    (acc: Record<string, Record<string, string>>, category) => {
      acc[category] = extractColors(input[category], "");
      return acc;
    },
    {},
  );
}

export const themes = {
  [Brand.VyDigital]: createSystem(
    defaultBaseConfig,
    generateTheme(Brand.VyDigital),
  ),
  [Brand.CargoNet]: createSystem(
    defaultBaseConfig,
    generateTheme(Brand.CargoNet),
  ),
  [Brand.VyUtvikling]: createSystem(
    defaultBaseConfig,
    generateTheme(Brand.VyUtvikling),
  ),
};

export const system = themes[Brand.VyDigital];
