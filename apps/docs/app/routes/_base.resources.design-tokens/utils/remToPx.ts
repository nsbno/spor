export const remToPx = (remValue: string) => {
  const rem = parseFloat(remValue.replace("rem", ""));
  return `${rem * 16}px`;
};
