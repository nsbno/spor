// These are the most used fonts in the design system.
// There are more fonts, but they are not used often enough

import React from "react";

// to warrant preloading
const fontNames = [
  "VyDisplay-Medium",
  "VySans-Regular",
  "VySans-Light",
  "VySans-Bold",
];
/** Preloads the most popular fonts */
export const FontPreloading = () => {
  return (
    <>
      {fontNames.map((fontName) => (
        <link
          key={fontName}
          rel="preload"
          href={`https://www.vy.no/styles/font/${fontName}.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      ))}
    </>
  );
};
