import { SanityAsset } from "@sanity/image-url/lib/types/types";

import { getClient } from "~/utils/sanity/client";

const sanityClient = getClient();

export type SanityIllustration = {
  _id: string;
  title: string;
  imageLightBackground: SanityAsset;
  imageDarkBackground: SanityAsset;
  size: "small" | "medium" | "large";
  illustrationType: "transparent-bg" | "sticker-white-bg" | "sticker-peel-off";
  tags: string[];
  description: string;
};

const getSortOrder = (searchParameters: URLSearchParams) => {
  const sortParameter = searchParameters.get("sort")?.trim();
  if (sortParameter === "added") {
    return "order(_createdAt desc)";
  }
  return "order(title asc)";
};

const getFilter = (searchParameters: URLSearchParams) => {
  let filter = `_type == "illustration"`;

  const search = searchParameters.get("search")?.trim();
  if (search) {
    const escaped = search.replaceAll('"', String.raw`\"`);
    filter += ` && (title match "*${escaped}*" || tags[] match "*${escaped}*")`;
  }

  const illustrationType = searchParameters.get("illustrationType")?.trim();
  if (illustrationType && illustrationType !== "all") {
    const escaped = illustrationType.replaceAll('"', String.raw`\"`);
    filter += ` && illustrationType == "${escaped}"`;
  }

  const size = searchParameters.get("size")?.trim();
  if (size && size !== "all") {
    const escaped = size.replaceAll('"', String.raw`\"`);
    filter += ` && size == "${escaped}"`;
  }

  return filter;
};

const getPaginationParameters = (searchParameters: URLSearchParams) => {
  const pageParameter = searchParameters.get("page") || "1";
  const page = Math.max(1, Number.parseInt(pageParameter, 10));

  const pageSizeParameter = searchParameters.get("pageSize") || "all";
  const pageSize =
    pageSizeParameter === "all" ? 1000 : Number.parseInt(pageSizeParameter, 10);

  return { page, pageSize, pageSizeParam: pageSizeParameter };
};

export const getIllustrationsQuery = async (
  requestUrl: string,
  draftMode = false,
) => {
  const url = new URL(requestUrl);

  const filter = getFilter(url.searchParams);

  const perspective = draftMode ? "previewDrafts" : "published";

  const { page, pageSize, pageSizeParam } = getPaginationParameters(
    url.searchParams,
  );

  const groqQuery = `
  {
    "total": count(*[${filter}]),
    "items": *[${filter}] | ${getSortOrder(url.searchParams)} ${
      pageSizeParam === "all"
        ? ""
        : `[${(page - 1) * pageSize}...${page * pageSize}]`
    } {
      _id,
      title,
      imageLightBackground,
      imageDarkBackground,
      imageDarkBackground,
      tags,
      size,
      description,
      illustrationType
    }
  }
  `;

  const result = await sanityClient.fetch<{
    total: number;
    items: SanityIllustration[];
  }>(groqQuery, {}, { perspective });

  return {
    items: result.items,
    total: result.total,
    page,
    pageSize: pageSizeParam === "all" ? result.items.length : pageSize,
    hasMore:
      pageSizeParam !== "all" &&
      result.items.length === pageSize &&
      page * pageSize < result.total,
  };
};

type SanityArticle = {
  title: string;
  slug: string;
  introduction?: unknown[];
  category?: {
    title: string;
    slug: string;
  };
  resourceLinks?: {
    linkType: "figma";
    url: string;
  };
  content: unknown[];
};

export const getArticlesQuery = (draftMode: boolean) => {
  return sanityClient.fetch<SanityArticle>(
    `*[_type == "article" && slug.current == "illustration-library"][0] {
        _id,
        title,
        "slug": slug.current,
        introduction,
        category->{
          title,
          "slug": slug.current
        },
        resourceLinks[linkType == "figma"],
        content[]{
          _type == 'reference' => @->,
          _type != 'reference' => @,
        }
      }`,
    {},
    { perspective: draftMode ? "previewDrafts" : "published" },
  );
};
