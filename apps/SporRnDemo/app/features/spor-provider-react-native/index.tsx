import { ThemeProvider } from "@shopify/restyle";
import { Language, LanguageProvider } from "@vygruppen/spor-i18n-react";
import React from "react";
import { theme } from "../spor-theme-react-native";

type SporProviderProps = {
  /** The app */
  children: React.ReactNode;
  /** The current language. Defaults to Norwegian (bokmål) */
  language?: Language;
};
/**
 * This component is used to provide the specified theme of colors and other
 * design tokens to the remainder of the application, as well as the current language.
 *
 * Please place it as close to the root of your application as possible -
 * at least before rendering any UI.
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
 */
export const SporProvider = ({
  children,
  language = Language.NorwegianBokmal,
}: SporProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider value={language}>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
