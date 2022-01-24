import { createContext, useContext } from "react";

export type ColorScheme = "light" | "dark";
const ColorSchemeContext = createContext<ColorScheme>("light");
type ColorSchemeProviderProps = {
  children: React.ReactNode;
  colorScheme: ColorScheme;
};

/**
 * Wraps your code, enabling you to get the passed "colorScheme" prop from context in any subtree by using the `useColorScheme` hook.
 *
 * This has nothing to do with dark mode or light mode – it has to do with the fact that we have two different color schemes for backgrounds - light and dark ones. We need to adapt a ton of colors based on the background, which in turn makes us pass the color scheme variable to every conceivable component.
 *
 * Instead of doing that, you can use the ColorSchemeProvider!
 *
 * ```
 * <ColorSchemeProvider colorScheme="dark">
 *  <MyDarkThemedComponentTree />
 * </ColorSchemeProvider>
 * ```
 */
export const ColorSchemeProvider = ({
  children,
  colorScheme,
}: ColorSchemeProviderProps) => (
  <ColorSchemeContext.Provider value={colorScheme}>
    {children}
  </ColorSchemeContext.Provider>
);

/** Gets the current color scheme.
 *
 * If you have wrapped a sub-section of your application with the `ColorSchemeProvider`, you can use this hook to get the current color scheme. If you haven't wrapped it, you'll get `"light"` as the default.
 *
 * The hook returns an object with the `colorScheme` property, as well as `isLight` and `isDark` properties, which are `true` if the color scheme is `"light"` or `"dark"`, respectively.
 */
export const useColorScheme = () => {
  const colorScheme = useContext(ColorSchemeContext);
  return {
    colorScheme,
    isLight: colorScheme === "light",
    isDark: colorScheme === "dark",
  };
};
