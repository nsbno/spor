import urlBuilderBuilder from "@sanity/image-url";
import { sanityConfig } from "./config";

/** Builds URLs hosted on Sanity */
export const urlBuilder = urlBuilderBuilder(sanityConfig);

export const isValidPreviewRequest = (request: Request) => {
  const requestUrl = new URL(request?.url);
  return (
    requestUrl?.searchParams?.get("preview") ===
    process.env.SANITY_PREVIEW_SECRET
  );
};

type SanityDocument = { _id: string };
/**
 * Returns the correct item based on whether or not we're in preview mode
 **/
export const filterDataToSingleItem = <T extends SanityDocument>(
  data: T | T[] = [],
  preview = false
) => {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
};
