import tokens from "@vygruppen/spor-design-tokens";

/** A string of CSS that should be injected in the global CSS space */
export const fontFaces = `
@font-face {
  font-family: ${tokens.asset.font["vy-sans"]["light"].name};
  src: url("https://www.vy.no/styles/font/VySans-Light.woff2") format("woff2"),
    url("https://www.vy.no/styles/font/VySans-Light.woff") format("woff");
  font-style: normal;
  font-weight: 300;
  font-display: swap
}
@font-face {
  font-family: ${tokens.asset.font["vy-sans"]["light-italic"].name};
  src: url("https://www.vy.no/styles/font/VySans-LightItalic.woff2")
      format("woff2"),
    url("https://www.vy.no/styles/font/VySans-LightItalic.woff") format("woff");
  font-style: italic;
  font-weight: 300;
  font-display: swap
}
@font-face {
  font-family: ${tokens.asset.font["vy-sans"]["medium"].name};
  src: url("https://www.vy.no/styles/font/VySans-Regular.woff2") format("woff2"),
    url("https://www.vy.no/styles/font/VySans-Regular.woff") format("woff");
  font-style: normal;
  font-weight: 400;
  font-display: swap
}
@font-face {
  font-family: ${tokens.asset.font["vy-sans"]["medium-italic"].name}
  src: url("https://www.vy.no/styles/font/VySans-RegularItalic.woff2")
      format("woff2"),
    url("https://www.vy.no/styles/font/VySans-RegularItalic.woff")
      format("woff");
  font-style: italic;
  font-weight: 400;
  font-display: swap
}
@font-face {
  font-family: ${tokens.asset.font["vy-sans"]["bold"].name};
  src: url("https://www.vy.no/styles/font/VySans-Bold.woff2") format("woff2"),
    url("https://www.vy.no/styles/font/VySans-Bold.woff") format("woff");
  font-style: normal;
  font-weight: 700;
  font-display: swap
}
@font-face {
  font-family: ${tokens.asset.font["vy-sans"]["bold-italic"].name};
  src: url("https://www.vy.no/styles/font/VySans-BoldItalic.woff2")
      format("woff2"),
    url("https://www.vy.no/styles/font/VySans-BoldItalic.woff") format("woff");
  font-style: italic;
  font-weight: 700;
  font-display: swap
}
@font-face {
  font-family: ${tokens.asset.font["vy-display"].name};
  src: url("https://www.vy.no/styles/font/VyDisplay-Medium.woff2")
      format("woff2"),
    url("https://www.vy.no/styles/font/VyDisplay-Medium.woff") format("woff");
  font-style: normal;
  font-weight: 400;
  font-display: swap
}
`;
