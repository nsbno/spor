const projectId = import.meta.env.VITE_SANITY_TOKEN || "r4xpzxak";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const environment = import.meta.env.VITE_ENVIRONMENT; // Funker ikke atm

const getCurrentUrl = (): string => {
  const hasLocation = typeof globalThis !== "undefined" && globalThis.location;
  return hasLocation ? globalThis.location.href : "";
};
export const checkIsProd = (url = getCurrentUrl()) =>
  url.includes("://test.design.vy.no");
export const checkIsStage = (url = getCurrentUrl()) => url.includes("stage");

const dataset = checkIsProd() || checkIsStage() ? "production" : "test";

export const sanityConfig = {
  apiVersion: "2022-02-25",
  projectId,
  dataset,
  useCdn: true,
};
