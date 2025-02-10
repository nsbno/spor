import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ChakraProvider,
  createSystem,
  defaultSystem,
  defaultConfig,
} from "@chakra-ui/react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
} from "next-themes";
import { Brand, brandTheme } from "../theme/semantic-tokens/brand";
import deepmerge from "deepmerge";
import { system as sporSystem, themeConfig } from "../theme";

const ThemeContext = createContext({
  switchTheme: (brand: Brand) => {},
});

type ThemeProviderProps = {
  initialBrand?: Brand;
  children: React.ReactNode;
};

export const ThemeProvider = ({
  initialBrand = Brand.VyDigital,
  children,
}: ThemeProviderProps) => {
  const { setTheme: setNextTheme } = useNextTheme();
  const [theme, setTheme] = useState(
    createSystem(defaultConfig, brandTheme[initialBrand]),
  );

  const switchTheme = (brand: Brand) => {
    const newTheme = createSystem(defaultConfig, brandTheme[brand]);
    setTheme(newTheme);
    setNextTheme(brand.toLowerCase());
    if (typeof window !== "undefined") {
      document.cookie = `brand=${brand}; path=/`;
    }
  };

  useEffect(() => {
    const cookieBrand = document.cookie
      .split("; ")
      .find((row) => row.startsWith("brand="))
      ?.split("=")[1] as Brand | undefined;
    if (cookieBrand && brandTheme[cookieBrand]) {
      const newTheme = createSystem(defaultConfig, brandTheme[cookieBrand]);
      setTheme(newTheme);
      setNextTheme(cookieBrand.toLowerCase());
    }
  }, [setNextTheme]);

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <NextThemesProvider attribute="class">
        <ChakraProvider value={theme}>{children}</ChakraProvider>
      </NextThemesProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeSwitcher = () => useContext(ThemeContext);
