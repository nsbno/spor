import {
  Badge,
  FilterChip,
  Flex,
  Heading,
  Pagination,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  Stack,
  StaticCard,
  Text,
  TextLink,
} from "@vygruppen/spor-react";
import {
  data,
  ShouldRevalidateFunction,
  useLoaderData,
  useSearchParams,
} from "react-router";

const PAGE_SIZE = 15;

type GitHubRelease = {
  id: number;
  tag_name: string;
  name: string | null;
  body: string | null;
  html_url: string;
  published_at: string | null;
  draft: boolean;
  prerelease: boolean;
};

/** "@vygruppen/spor-react@9.6.2" → "spor-react" */
function extractPackageName(name: string | null): string | null {
  if (!name) return null;
  const match = name.match(/^(?:@[^/]+\/)?([^@]+)@/);
  return match ? match[1] : null;
}

type ReleaseType = "major" | "minor" | "patch";

const RELEASE_TYPE_CONFIG: Record<
  ReleaseType,
  { label: string; colorPalette: "red" | "blue" | "green" }
> = {
  major: { label: "Major", colorPalette: "red" },
  minor: { label: "Minor", colorPalette: "blue" },
  patch: { label: "Patch", colorPalette: "green" },
};

function extractReleaseTypes(body: string | null): ReleaseType[] {
  if (!body) return [];
  const types: ReleaseType[] = [];
  if (/^#{1,3}\s+Major Changes/im.test(body)) types.push("major");
  if (/^#{1,3}\s+Minor Changes/im.test(body)) types.push("minor");
  if (/^#{1,3}\s+Patch Changes/im.test(body)) types.push("patch");
  return types;
}

function formatReleaseBody(body: string): string {
  return body
    .split("\n")
    .map((line) => {
      if (/^#+\s/.test(line)) {
        return line.replace(/^#+\s+/, "");
      }
      return line.replace(/^(\s*-\s+)[0-9a-f]{7,40}:\s+/, "$1");
    })
    .join("\n");
}

export const loader = async () => {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.CHANGELOG_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.CHANGELOG_TOKEN}`;
  }

  // Fetch page 1 to get the total number of pages from the Link header
  const firstResponse = await fetch(
    "https://api.github.com/repos/nsbno/spor/releases?per_page=100&page=1",
    { headers },
  );

  if (!firstResponse.ok) {
    throw new Response("Failed to fetch releases", {
      status: firstResponse.status,
    });
  }

  const firstBatch: GitHubRelease[] = await firstResponse.json();

  const linkHeader = firstResponse.headers.get("Link");
  const lastPageMatch = linkHeader?.match(
    /<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/,
  );
  const totalPages = lastPageMatch ? Number(lastPageMatch[1]) : 1;

  // Fetch all remaining pages in parallel
  const remainingBatches = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      fetch(
        `https://api.github.com/repos/nsbno/spor/releases?per_page=100&page=${index + 2}`,
        { headers },
      ).then((response) => {
        if (!response.ok) {
          throw new Response("Failed to fetch releases", {
            status: response.status,
          });
        }
        return response.json() as Promise<GitHubRelease[]>;
      }),
    ),
  );

  const allReleases = [firstBatch, ...remainingBatches].flat();

  return data(
    {
      releases: allReleases
        .filter((release) => !release.draft)
        .map((release) => ({
          ...release,
          releaseTypes: extractReleaseTypes(release.body),
        })),
    },
    {
      headers: {
        "Cache-Control":
          "public, max-age=300, s-maxage=3600, stale-while-revalidate=60",
      },
    },
  );
};

// Prevent the loader from re-running when only filter/page params change —
// all filtering is done client-side so there is nothing new to fetch.
export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentUrl,
  nextUrl,
}) => currentUrl.pathname !== nextUrl.pathname;

export default function ChangelogPage() {
  const { releases } = useLoaderData<typeof loader>();
  const [searchParameters, setSearchParameters] = useSearchParams();

  const selectedPackages = searchParameters.getAll("package");
  const selectedYears = searchParameters.getAll("year");
  const selectedTypes = searchParameters.getAll("type") as ReleaseType[];
  const page = Math.max(1, Number(searchParameters.get("page") || "1"));

  const allPackages = [
    "spor-react",
    "spor-icon",
    "spor-mcp-server",
    "spor-codemods",
    "spor-design-tokens",
  ];

  const allYears = [
    ...new Set(
      releases
        .filter((r) => r.published_at)
        .map((r) => new Date(r.published_at!).getFullYear().toString()),
    ),
  ]
    .toSorted()
    .toReversed();

  const filteredReleases = releases.filter((release) => {
    const package_ = extractPackageName(release.name);
    const matchesPackage =
      selectedPackages.length === 0 ||
      (package_ !== null && selectedPackages.includes(package_));
    const matchesYear =
      selectedYears.length === 0 ||
      (release.published_at &&
        selectedYears.includes(
          new Date(release.published_at).getFullYear().toString(),
        ));
    const matchesType =
      selectedTypes.length === 0 ||
      release.releaseTypes.some((type) => selectedTypes.includes(type));
    return matchesPackage && matchesYear && matchesType;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredReleases.length / PAGE_SIZE),
  );
  const currentPage = Math.min(page, totalPages);
  const paginatedReleases = filteredReleases.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const togglePackage = (package_: string) => {
    const next = new URLSearchParams(searchParameters);
    next.delete("page");
    next.delete("package");
    const updated = selectedPackages.includes(package_)
      ? selectedPackages.filter((p) => p !== package_)
      : [...selectedPackages, package_];
    for (const p of updated) next.append("package", p);
    setSearchParameters(next);
  };

  const toggleYear = (year: string) => {
    const next = new URLSearchParams(searchParameters);
    next.delete("page");
    next.delete("year");
    const updated = selectedYears.includes(year)
      ? selectedYears.filter((y) => y !== year)
      : [...selectedYears, year];
    for (const y of updated) next.append("year", y);
    setSearchParameters(next);
  };

  const toggleType = (type: ReleaseType) => {
    const next = new URLSearchParams(searchParameters);
    next.delete("page");
    next.delete("type");
    const updated = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    for (const t of updated) next.append("type", t);
    setSearchParameters(next);
  };

  const handlePageChange = (event_: { page: number }) => {
    const next = new URLSearchParams(searchParameters);
    next.set("page", event_.page.toString());
    setSearchParameters(next);
  };

  return (
    <>
      <Heading as="h1" variant="xl-display" marginBottom={8}>
        Changelog
      </Heading>

      <Stack gap={4} marginBottom={6}>
        <Stack gap={2}>
          <Text variant="sm">Filter on packages</Text>
          <Flex wrap="wrap" gap={1}>
            {allPackages.map((package_) => (
              <FilterChip
                key={package_}
                checked={selectedPackages.includes(package_)}
                onChange={() => togglePackage(package_)}
                size="xs"
              >
                {package_}
              </FilterChip>
            ))}
          </Flex>
        </Stack>

        <Stack gap={2}>
          <Text variant="sm">Filter on years</Text>
          <Flex wrap="wrap" gap={1}>
            {allYears.map((year) => (
              <FilterChip
                key={year}
                value={year}
                checked={selectedYears.includes(year)}
                onChange={() => toggleYear(year)}
                size="xs"
              >
                {year}
              </FilterChip>
            ))}
          </Flex>
        </Stack>

        <Stack gap={2}>
          <Text variant="sm">Filter on change type</Text>
          <Flex wrap="wrap" gap={1}>
            {(["major", "minor", "patch"] as ReleaseType[]).map((type) => (
              <FilterChip
                key={type}
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                size="xs"
              >
                {RELEASE_TYPE_CONFIG[type].label}
              </FilterChip>
            ))}
          </Flex>
        </Stack>
      </Stack>

      <Stack gap={3}>
        {paginatedReleases.length === 0 ? (
          <Text color="text.subtle">
            No releases match the selected filters.
          </Text>
        ) : (
          paginatedReleases.map((release) => (
            <StaticCard
              key={release.id}
              as="article"
              colorPalette="grey"
              padding="4"
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Heading as="h2" variant="md" marginBottom={1}>
                  {release.name || release.tag_name}
                </Heading>
                {release.releaseTypes.length > 0 && (
                  <Flex gap={1} marginBottom={2}>
                    {release.releaseTypes.map((type) => (
                      <Badge
                        key={type}
                        colorPalette={RELEASE_TYPE_CONFIG[type].colorPalette}
                      >
                        {RELEASE_TYPE_CONFIG[type].label}
                      </Badge>
                    ))}
                  </Flex>
                )}
              </Flex>

              {release.published_at && (
                <Stack direction="row">
                  <Text variant="sm" color="text.subtle" marginBottom={3}>
                    {new Date(release.published_at).toLocaleDateString(
                      "en-GB",
                      { year: "numeric", month: "long", day: "numeric" },
                    )}
                    ,
                  </Text>
                  <TextLink
                    external
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </TextLink>
                </Stack>
              )}
              {release.body && (
                <Text whiteSpace="pre-wrap">
                  {formatReleaseBody(release.body)}
                </Text>
              )}
            </StaticCard>
          ))
        )}
      </Stack>

      {totalPages > 1 && (
        <Pagination
          count={totalPages * PAGE_SIZE}
          pageSize={PAGE_SIZE}
          page={currentPage}
          onPageChange={handlePageChange}
          marginTop={10}
        >
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </Pagination>
      )}
    </>
  );
}
