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

const getSortOrder = (searchParams: URLSearchParams) => {
  const sortParam = searchParams.get("sort")?.trim();
  if (sortParam === "added") {
    return "order(_createdAt desc)";
  }
  return "order(title asc)";
};

const getFilter = (searchParams: URLSearchParams) => {
  let filter = `_type == "illustration"`;

  const search = searchParams.get("search")?.trim();
  if (search) {
    const escaped = search.replaceAll('"', String.raw`\"`);
    filter += ` && (title match "*${escaped}*" || tags[] match "*${escaped}*")`;
  }

  const illustrationType = searchParams.get("illustrationType")?.trim();
  if (illustrationType && illustrationType !== "all") {
    const escaped = illustrationType.replaceAll('"', String.raw`\"`);
    filter += ` && illustrationType == "${escaped}"`;
  }

  const size = searchParams.get("size")?.trim();
  if (size && size !== "all") {
    const escaped = size.replaceAll('"', String.raw`\"`);
    filter += ` && size == "${escaped}"`;
  }

  return filter;
};

export const getPaginationParams = (searchParams: URLSearchParams) => {
  const pageParam = searchParams.get("page") || "1";
  const page = Math.max(1, Number.parseInt(pageParam, 10));

  const pageSizeParam = searchParams.get("pageSize") || "all";
  const pageSize =
    pageSizeParam === "all" ? 1000 : Number.parseInt(pageSizeParam, 10);

  return { page, pageSize, pageSizeParam };
};

export const getIllustrationsQuery = async (
  requestUrl: string,
  draftMode = false,
) => {
  const url = new URL(requestUrl);

  const filter = getFilter(url.searchParams);

  const perspective = draftMode ? "previewDrafts" : "published";

  const { page, pageSize, pageSizeParam } = getPaginationParams(
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
