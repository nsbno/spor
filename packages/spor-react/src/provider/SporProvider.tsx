"use client";
import { Global } from "@emotion/react";
import React, { useEffect } from "react";
import {
  Button,
  DarkSpinner,
  dismissToast,
  Language,
  LanguageProvider,
  system,
  themes,
  triggerToast,
} from "..";

import { Toaster } from "../toast/toast";

import { Brand, fontFaces } from "../theme/brand";
import { ChakraProvider, ChakraProviderProps, For } from "@chakra-ui/react";
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
  // create toasts for each type

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerToast({
        text: "This is a success toast",
        variant: "success",
        duration: 50_000,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider language={language}>
      <ChakraProvider value={themes[brand] ?? system}>
        <ColorModeProvider>
          <Toaster />
          <Global styles={fontFaces} />
          {children}

          <For each={["success", "error", "info"]}>
            {(type: string) => (
              <Button
                key={type}
                variant="primary"
                onClick={() =>
                  triggerToast({
                    text: `Toast status is ${type}`,
                    variant: type,
                    duration: 50_000,
                  })
                }
              >
                {type}
              </Button>
            )}
          </For>

          <DarkSpinner width="48px" />

          <Button variant="primary" onClick={() => dismissToast()}>
            Close all toasts
          </Button>
        </ColorModeProvider>
      </ChakraProvider>
    </LanguageProvider>
  );
};
