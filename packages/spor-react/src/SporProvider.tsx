import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { theme as defaultSporTheme } from "@vygruppen/spor-theme-react";
import React from "react";

/**
 * This component is used to provide the specified theme of colors and other
 * design tokens to the remainder of the application
 *
 * Please place it as close to the root of your application as possible -
 * at least before rendering any UI.
 *
 * You can pass your own theme to this component. If you don't (and most of the time you won't), the default Spor theme will be used.
 *
 * ```tsx
 * * import { SporProvider } from "@spor-react";
 * const root = React.createRoot(document.getElementById("root"))
 * root.render(
 *  <SporProvider>
 *    <App />
 *  </SporProvider>
 * );
 * ```
 *
 * You can also pass specific overrides to the theme if you need to. Adding application specific design tokens, for example could be a useful thing to do.
 *
 * ```tsx
 * import { extendTheme, SporProvider } from "@spor-react";
 * const theme = extendTheme({
 *  colors: { myApp: { primary: "tomato" } }
 * });
 * const root = React.createRoot(document.getElementById("root"))
 * root.render(
 *  <SporProvider theme={theme}>
 *    <App />
 *  </SporProvider>
 * );
 * ```
 */
export const SporProvider = ({
  theme = defaultSporTheme,
  ...props
}: ChakraProviderProps) => {
  return <ChakraProvider theme={theme} {...props} />;
};
