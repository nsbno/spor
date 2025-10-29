export const handleExternalMenu = (link: string) => {
  const IS_INTERNAL_REGEX = /^(\/|https:\/\/design\.vy\.no)/;
  const isExternal = link.startsWith("https://");
  const isInternal = IS_INTERNAL_REGEX.test(link);
  const isDevEnvironment = link.includes("localhost") || link.includes("test");
  const isStageEnvironment = link.includes("stage");
  const domainToReplace = () => {
    if (isDevEnvironment) return "http://localhost:3008";
    if (isStageEnvironment) return "https://stage-design.vy.no";
    return "https://design.vy.no";
  };
  if (isExternal && !isInternal) return link;
  if (isInternal) return link.replace(domainToReplace(), "");
  return link;
};
