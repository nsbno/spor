export const remToPx = (remValue: string) => {
  const rem = Number.parseFloat(remValue.replace("rem", ""));
  const rootFontSize = Number.parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );

  return `${rem * rootFontSize}px`;
};
