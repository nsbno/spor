export const handleExternalMenu = (link: string, isPreview: boolean) => {
  const IS_INTERNAL_REGEX = /^(\/|https:\/\/design\.vy\.no)/;
  const isExternal = link.startsWith("https://");
  const isInternal = IS_INTERNAL_REGEX.test(link);
  const isDevelopmentEnvironment =
    link.includes("localhost") || link.includes("test");
  const isStageEnvironment = link.includes("stage");
  const domainToReplace = () => {
    if (isDevelopmentEnvironment) return "http://localhost:3008";
    if (isStageEnvironment) return "https://stage-design.vy.no";
    return "https://design.vy.no";
  };
  if (isExternal && !isInternal) return link;
  if (isInternal)
    return `${link.replace(domainToReplace(), "")}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`;
  return `${link}${isPreview ? "?sanity-preview-perspective=drafts" : ""}`;
};
