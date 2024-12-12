"use client";
import { Global } from "@emotion/react";
import deepmerge from "deepmerge";
import React from "react";
import { Language, LanguageProvider } from "..";
import { Brand, brandTheme, fontFaces } from "../theme/brand";
import { system as sporSystem } from "../theme";
import {
  ChakraProvider,
  ChakraProviderProps,
  defaultSystem,
} from "@chakra-ui/react";
import { ColorModeProvider } from "../color-mode";

type SporProviderProps = Exclude<ChakraProviderProps, "value"> & {
  language?: Language;
  brand?: Brand;
  theme?: typeof sporSystem;
  value?: typeof sporSystem;
};

/**
 * This component is used to provide the specified theme of colors and other
 * design tokens to the remainder of the application, as well as the current language.
 *
 * Please place it as close to the root of your application as possible -
 * at least before rendering any UI.
 *
 * You can pass your own theme to this component. If you don't (and most of the time you won't), the default Spor theme will be used.
 *
 * You should specify the current language of your application. This is specified to provide any built-in microcopy and labels for any Spor components. The default is Norwegian (bokmål).
 *
 * ```tsx
 * * import { SporProvider, Language } from "@vygruppen/spor-react";
 * const root = React.createRoot(document.getElementById("root"))
 * root.render(
 *  <SporProvider language={Language.English}>
 *    <App />
 *  </SporProvider>
 * );
 * ```
 *
 * You can pass specific overrides to the theme if you need to. Adding application specific design tokens, for example could be a useful thing to do.
 *
 * ```tsx
 * import { extendTheme, SporProvider } from "@vygruppen/spor-react";
import { theme } from '../../../../apps/docs/app/features/portable-text/code-block/codeTheme';
 * const theme = extendTheme({
 *  colors: { myApp: { primary: "tomato" } }
 * });
 * const root = React.createRoot(document.getElementById("root"))
 * root.render(
 *  <SporProvider language={Language.Swedish} theme={theme}>
 *    <App />
 *  </SporProvider>
 * );
 * ```
 */
export const SporProvider = ({
  theme = sporSystem,
  language = Language.NorwegianBokmal,
  brand = Brand.VyDigital,
  children,
  ...props
}: SporProviderProps) => {
  const brandCustomizations = brandTheme[brand] ?? {};

  const extendedTheme = deepmerge(theme, brandCustomizations);

  return (
    <LanguageProvider language={language}>
      <ChakraProvider {...props} value={extendedTheme}>
        <ColorModeProvider>
          <Global styles={fontFaces} />
          {children}
        </ColorModeProvider>
      </ChakraProvider>
    </LanguageProvider>
  );
};
