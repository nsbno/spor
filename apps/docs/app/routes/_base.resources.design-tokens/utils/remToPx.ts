export const remToPx = (remValue: string) => {
  const rem = parseFloat(remValue.replace("rem", ""));
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );

  return `${rem * rootFontSize}px`;
};
