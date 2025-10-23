import { createClient } from "@sanity/client";

import { sanityConfig } from "./config";

const sanityClient = createClient(sanityConfig);

export const previewClient = sanityClient.withConfig({
  perspective: "previewDrafts",
});

/** Get the correct Sanity client */
export const getClient = (usePreview = false) =>
  usePreview ? previewClient : sanityClient;
