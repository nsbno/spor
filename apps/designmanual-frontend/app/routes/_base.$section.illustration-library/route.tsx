import { DownloadOutline24Icon } from "@vygruppen/spor-icon-react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Separator,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@vygruppen/spor-react";
import React from "react";
import {
  Await,
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useLocation,
} from "react-router";

import { PortableText } from "~/features/portable-text/PortableText";

import { Filters } from "./filters";
import { IllustationGrid } from "./illustration-grid";
import { Pagination } from "./pagination";
import { getArticlesQuery, getIllustrationsQuery } from "./queries";

function getUrlWithIllustrationSearchParams(url: URL): URL | null {
  let changed = false;
  if (!url.searchParams.has("illustrationType")) {
    url.searchParams.set("illustrationType", "transparent-bg");
    changed = true;
  }
  if (!url.searchParams.has("size")) {
    url.searchParams.set("size", "all");
    changed = true;
  }

  if (!url.searchParams.has("page")) {
    url.searchParams.set("page", "1");
    changed = true;
  }

  if (!url.searchParams.has("pageSize")) {
    url.searchParams.set("pageSize", "12");
    changed = true;
  }

  if (!url.searchParams.has("sort")) {
    url.searchParams.set("sort", "name");
    changed = true;
  }

  return changed ? url : null;
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  const updatedUrl = getUrlWithIllustrationSearchParams(new URL(request.url));
  if (updatedUrl) {
    return redirect(
      updatedUrl.pathname + "?" + updatedUrl.searchParams.toString(),
    );
  }

  const draftMode =
    url.searchParams.get("sanity-preview-perspective") === "drafts";

  const illustrationsPromise = getIllustrationsQuery(url.toString(), draftMode);
  const article = await getArticlesQuery(draftMode);

  return {
    illustrationsPromise,
    article,
  };
};

export default function IllustrationLibraryPage() {
  const { article, illustrationsPromise } = useLoaderData<typeof loader>();

  const location = useLocation();

  const allParams = new URLSearchParams(location.search);
  allParams.set("pageSize", "all");
  allParams.set("page", "1");
  const allHref = `/resources/illustration-library/all?${allParams.toString()}`;

  return (
    <Box>
      <Heading as="h1" variant="xl-display">
        {article.title}
      </Heading>
      {article.introduction && (
        <Box marginBottom={2}>
          <PortableText value={article.introduction} />
        </Box>
      )}
      {article.content && (
        <Box marginBottom={4}>
          <PortableText value={article.content} />
        </Box>
      )}

      <React.Suspense fallback={<SkeletonGrid />}>
        <Await resolve={illustrationsPromise}>
          {(illustrations) => (
            <Stack gap="2">
              <Flex gap="2">
                <Button
                  variant="primary"
                  width="fit-content"
                  as="a"
                  download="illustrations.zip"
                  href="/resources/illustration-library/all"
                  leftIcon={<DownloadOutline24Icon />}
                >
                  Download entire illustration library
                </Button>

                <Button
                  variant="primary"
                  width="fit-content"
                  as="a"
                  download="illustrations.zip"
                  href={allHref}
                  leftIcon={<DownloadOutline24Icon />}
                >
                  Download illustrations shown ({illustrations.total})
                </Button>
              </Flex>

              <Separator marginY={4} />

              <Filters />
              <SimpleGrid columns={[1, 2, 3]} gap={2}>
                <IllustationGrid illustrations={illustrations.items} />
              </SimpleGrid>
              <Pagination
                total={illustrations.total}
                page={illustrations.page}
                pageSize={illustrations.pageSize}
              />
            </Stack>
          )}
        </Await>
      </React.Suspense>
    </Box>
  );
}

function SkeletonGrid({ count = 12 }: { count?: number }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} gap={2}>
      {Array.from({ length: count }).map((_, n) => (
        <Skeleton key={n} height="260px" borderRadius="md" />
      ))}
    </SimpleGrid>
  );
}
