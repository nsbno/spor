import { createClient } from "@sanity/client";

import { sanityConfig } from "./config";

/** Standard Sanity client for fetching data */
//const sanityClient = new PicoSanity(sanityConfig);

const sanityClient = createClient(sanityConfig);

/** Authenticated Sanity client for fetching drafts */
/* const previewClient = new PicoSanity({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_PREVIEW_API_TOKEN ?? "",
}); */

export const previewClient = sanityClient.withConfig({
  perspective: "previewDrafts",
});

/** Get the correct Sanity client */
export const getClient = (usePreview = false) =>
  usePreview ? previewClient : sanityClient;
