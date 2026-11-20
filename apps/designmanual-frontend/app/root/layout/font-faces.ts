/** A string of CSS that should be injected in the global CSS space */
export const fontFaces = `
@font-face {
  font-family: "Vy Sans";
  src: url("https://www.vy.no/styles/font/VySansVariable-Regular.woff2") format("woff2");
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
}
@font-face {
  font-family: "Vy Display";
  src: url("https://www.vy.no/styles/font/VyDisplay-Medium.woff2") format("woff2");
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}
  body {
    font-family: "Vy Sans", sans-serif;
  }
`;
