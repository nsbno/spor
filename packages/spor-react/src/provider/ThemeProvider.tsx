import React, { createContext, useContext, useState, useEffect } from "react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Brand, brandTheme } from "@/theme/brand";
import deepmerge from "deepmerge";

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
  const [theme, setTheme] = useState(
    deepmerge(defaultSystem, brandTheme[initialBrand]),
  );

  const switchTheme = (brand: Brand) => {
    setTheme(deepmerge(defaultSystem, brandTheme[brand]));
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
      setTheme(deepmerge(defaultSystem, brandTheme[cookieBrand]));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <ChakraProvider value={theme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeSwitcher = () => useContext(ThemeContext);
