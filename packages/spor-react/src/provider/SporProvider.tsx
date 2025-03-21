"use client";
import { Global } from "@emotion/react";
import React from "react";
import {
  Language,
  LanguageProvider,
  Nudge,
  NudgeContent,
  NudgeTrigger,
  NudgeWizardBody,
  NudgeWizardStep,
  system,
  themes,
} from "..";

import { Toaster } from "../toast/toast";

import { Brand, fontFaces } from "../theme/brand";
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { ColorModeProvider } from "../color-mode";

type SporProviderProps = Omit<ChakraProviderProps, "value"> & {
  language?: Language;
  brand?: Brand;
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
  language = Language.NorwegianBokmal,
  brand = Brand.VyDigital,
  children,
}: SporProviderProps) => {
  return (
    <LanguageProvider language={language}>
      <ChakraProvider value={themes[brand] ?? system}>
        <ColorModeProvider>
          <Toaster />
          <Global styles={fontFaces} />

          {children}
        </ColorModeProvider>
      </ChakraProvider>
    </LanguageProvider>
  );
};
