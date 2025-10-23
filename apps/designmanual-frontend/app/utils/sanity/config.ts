const projectId = import.meta.env.VITE_SANITY_TOKEN || "r4xpzxak";

const environment = process.env.APP_ENV;

const dataset =
  environment === "prod" || environment === "stage" ? "production" : "test";

console.log(dataset);

export const sanityConfig = {
  apiVersion: "2022-02-25",
  projectId,
  dataset,
  useCdn: true,
};
