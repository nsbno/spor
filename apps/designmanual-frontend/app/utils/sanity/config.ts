const projectId = import.meta.env.VITE_SANITY_TOKEN || "r4xpzxak";

const environment =
  (typeof process === "undefined"
    ? import.meta.env.VITE_ENVIRONMENT
    : process?.env.ENVIRONMENT) || "dev";

const dataset =
  environment === "prod" || environment === "stage" ? "production" : "test";

export const sanityConfig = {
  apiVersion: "2022-02-25",
  projectId,
  dataset,
  useCdn: true,
};
