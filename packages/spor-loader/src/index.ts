export * from "./animation-data/content-loader";
export * from "./animation-data/content-loader-pride";
export * from "./animation-data/full-screen-loader-black";
export * from "./animation-data/full-screen-loader-white";
export * from "./animation-data/inline-loader-color";
export * from "./animation-data/inline-loader-color-pride";
export * from "./animation-data/inline-loader-dark";
export * from "./animation-data/inline-loader-light";
export * from "./animation-data/inline-loader-light-color";
export * from "./animation-data/spinner-color";
export * from "./animation-data/spinner-color-pride";
export * from "./animation-data/spinner-dark";
export * from "./animation-data/spinner-light";
export * from "./animation-data/vy-logo-pride";

export const lottieAssets = {
  contentLoader: 'content-loader.lottie',
  contentLoaderPride: 'content-loader-pride.lottie',
  fullScreenLoaderBlack: 'full-screen-loader-black.lottie',
  fullScreenLoaderWhite: 'full-screen-loader-white.lottie',
  inlineLoaderColor: 'inline-loader-color.lottie',
  inlineLoaderColorPride: 'inline-loader-color-pride.lottie',
  inlineLoaderDark: 'inline-loader-dark.lottie',
  inlineLoaderLight: 'inline-loader-light.lottie',
  inlineLoaderLightColor: 'inline-loader-light-color.lottie',
  spinnerColor: 'spinner-color.lottie',
  spinnerColorPride: 'spinner-color-pride.lottie',
  spinnerDark: 'spinner-dark.lottie',
  spinnerLight: 'spinner-light.lottie',
  vyLogoPride: 'vy-logo-pride.lottie'
} as const;

// Works in dev, but it wont build with this URL stuff
// Not sure how to include the lottie files in a meaningful way. Perhaps store them on a cdn instead of as a npm package?
export function getLottiePath(filename: string) {
  return new URL(`../assets/${filename}`, import.meta.url).href;
}

export const lottieFiles = Object.fromEntries(
  Object.entries(lottieAssets).map(
    ([key, filename]) => [key, getLottiePath(filename)]
  )
) as Record<keyof typeof lottieAssets, string>;
