const projectId = import.meta.env.VITE_SANITY_TOKEN || "r4xpzxak";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const environment = import.meta.env.VITE_ENVIRONMENT; // Funker ikke atm

export const checkIsProd = (url = ""): boolean => {
  // Check if URL does NOT contain "test" to determine if prod, should also check for localhost when prod dataset is copied to test
  // In future, should be based on environment variables only
  const urlToCheck =
    url || (globalThis.window === undefined ? "" : globalThis.location.href);

  return !urlToCheck.includes("test");
};

console.log(checkIsProd());

const dataset = checkIsProd() ? "production" : "test";

export const sanityConfig = {
  apiVersion: "2022-02-25",
  projectId,
  dataset,
  useCdn: true,
};
