export const handleExternalMenu = (link: string) => {
  const IS_INTERNAL_REGEX = /^(\/|https:\/\/design\.vy\.no)/;
  const isExternal = link.startsWith("https://");
  const isInternal = IS_INTERNAL_REGEX.test(link);
  if (isExternal && !isInternal) return link;
  if (isInternal) return link.replace("https://design.vy.no", "");
  return link;
};
