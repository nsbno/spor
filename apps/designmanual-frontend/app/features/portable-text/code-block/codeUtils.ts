export const sanitizeCode = (code: string) => {
  return code
    .replaceAll("\u200B", "")
    .replaceAll("\u200C", "")
    .replaceAll("\u200D", "")
    .trim();
};
