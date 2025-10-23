const projectId = import.meta.env.VITE_SANITY_TOKEN || "r4xpzxak";
const sanitySecret = import.meta.env.VITE_SANITY_SECRET || "";

const environment = import.meta.env.VITE_ENVIRONMENT || "prod"; // Midlertidig, bør endres når vi har staging og dev miljøer

export const isProd = (): boolean => {
  // Check if URL does NOT contain "test" to determine if prod, should also check for localhost when prod dataset is copied to test
  // In future, should be based on environment variables only
  const urlDoesNotContainTest =
    globalThis.window === undefined ||
    !globalThis.location.href.includes("test");

  return urlDoesNotContainTest && environment === "prod";
};

const dataset = isProd() ? "production" : "test";

export const sanityConfig = {
  apiVersion: "2022-02-25",
  projectId,
  dataset,
  useCdn: true,
  token: sanitySecret,
  stega: {
    enabled: true,
    studioUrl: "http://localhost:4444", // env.VITE_PUBLIC_SANITY_STUDIO_URL || "http://localhost:4444",
  },
};
