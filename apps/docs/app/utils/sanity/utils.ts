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

/**
 * Returns the correct item based on whether or not we're in preview mode
 **/
export const filterDataToSingleItem = <T extends { _id: string }>(
  data: T[] = [],
  isPreview = false
): T => {
  if (!Array.isArray(data)) {
    return data;
  }

  if (isPreview) {
    return (
      (data.find((item) => item._id.startsWith(`drafts.`)) as T) ||
      (data[0] as T)
    );
  }

  return data[0] as T;
};
