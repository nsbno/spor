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
  isPreview = false,
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

/** Turns portable text into a string
 *
 * Borrowed from https://www.sanity.io/docs/presenting-block-text#ac67a867dd69
 */
export function blockContentToPlainText(blocks: any[] = []) {
  if (!blocks || !blocks.length) {
    return "";
  }
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child: any) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
}
