import imageUrlBuilder from "@sanity/image-url";

import { sanityConfig } from "~/utils/sanity/config";

export const useImageUrlBuilder = (format: "svg" | "webp" = "webp") => {
  const baseUrl = "https://cdn.sanity.io";

  const builder = imageUrlBuilder({
    ...sanityConfig,
  }).withOptions({ baseUrl: baseUrl });

  if (format === "webp") {
    builder.format("webp");
  }

  return builder;
};
