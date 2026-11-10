import tokens from "@vygruppen/spor-design-tokens";
import vySansDisplayMedium from "@vygruppen/spor-design-tokens/assets/fonts/VyDisplay-Medium.woff2";
import vySansItalic from "@vygruppen/spor-design-tokens/assets/fonts/VySans-MediumItalic.woff2";
import vySansVariable from "@vygruppen/spor-design-tokens/assets/fonts/VySansVariable-Regular.woff2";

/** A string of CSS that should be injected in the global CSS space */
export const fontFaces = `
@font-face {
  font-family: "${tokens.asset.font["vy-sans-variable"].name}";
  src: url("${vySansVariable}") format("woff2");
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
}
@font-face {
  font-family: "${tokens.asset.font["vy-sans-variable"].name}";
  src: url("${vySansItalic}") format("woff2");
  font-style: italic;
  font-weight: 300 700;
  font-display: swap;
}
@font-face {
  font-family: "${tokens.asset.font["vy-display-medium"].name}";
  src: url("${vySansDisplayMedium}") format("woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
  body {
    font-family: "${tokens.asset.font["vy-sans-variable"].name}", sans-serif;
  }
`;
