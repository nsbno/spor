/**
 * Optional CSS that sets the default font-family on the body element.
 * This is provided as a convenience, but applications should provide their own @font-face rules.
 *
 * To use this in your application, import and inject it with Emotion's Global component:
 *
 * ```tsx
 * import { Global } from "@emotion/react";
 * import { fontFaces } from "@vygruppen/spor-react";
 *
 * <Global styles={fontFaces} />
 * ```
 *
 * Or disable it in SporProvider:
 *
 * ```tsx
 * <SporProvider useSporFonts={false}>
 *   <App />
 * </SporProvider>
 * ```
 *
 * See the documentation for guidance on hosting and loading fonts.
 */
export const fontFaces = `
  body {
    font-family: "Vy Sans", sans-serif;
  }
`;
