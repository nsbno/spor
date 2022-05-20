import tokens from "@vygruppen/spor-design-tokens";

const massageColorValues = () => {
  const newColors: Record<string, string | Record<string, string>> = {};
  for (let colorKey in tokens.color) {
    const colorOrColorScale =
      tokens.color[colorKey as keyof typeof tokens.color];
    if ("value" in colorOrColorScale) {
      newColors[colorKey] = colorOrColorScale.value;
    } else {
      const colorScale = colorOrColorScale;
      newColors[colorKey] = {};
      for (let colorScaleKey in colorScale) {
        (newColors[colorKey] as any)[colorScaleKey] =
          colorScale[colorScaleKey as keyof typeof colorScale].original?.value;
      }
    }
  }
  return newColors;
};

export const colors = massageColorValues();
