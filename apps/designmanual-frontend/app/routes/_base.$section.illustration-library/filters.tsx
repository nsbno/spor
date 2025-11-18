import {
  GridItem,
  NativeSelect,
  SearchInput,
  SimpleGrid,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@vygruppen/spor-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDebouncedCallback } from "use-debounce";

export const Filters = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const [serachQuery, setSearchQuery] = useState(params.get("search") ?? "");

  const updateParams = ({
    searchValue,
    illustrationTypeValue,
    sizeValue,
    sortValue,
  }: {
    searchValue?: string;
    illustrationTypeValue?: string;
    sizeValue?: string;
    sortValue?: string;
  }) => {
    if (searchValue || searchValue === "") {
      params.set("search", searchValue);
    }
    if (illustrationTypeValue) {
      params.set("illustrationType", illustrationTypeValue);
    }
    if (sizeValue) {
      params.set("size", sizeValue);
    }

    if (sortValue) {
      params.set("sort", sortValue);
    }

    params.set("page", "1");
    navigate(`?${params.toString()}`, {
      replace: true,
      preventScrollReset: true,
    });
  };

  const debouncedSearchNavigate = useDebouncedCallback(
    (searchValue: string) => {
      updateParams({ searchValue });
    },
    500,
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchQuery(searchValue);
    debouncedSearchNavigate(searchValue);
  };

  const handleIllustrationTypeChange = (illustrationTypeValue: string) => {
    updateParams({ illustrationTypeValue });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sizeValue = e.target.value;
    updateParams({ sizeValue });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    updateParams({ sortValue });
  };

  return (
    <SimpleGrid gap={2} columns={12}>
      <GridItem colSpan={[12, 12, 12, 6, 8]}>
        <SearchInput
          label="Find illustration"
          width="100%"
          value={serachQuery}
          onChange={handleSearchChange}
        />
      </GridItem>

      <GridItem colSpan={[12, 6, 6, 3, 2]}>
        <NativeSelect
          label="Size"
          value={params.get("size") ?? "all"}
          onChange={handleSizeChange}
        >
          <option value="all">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </NativeSelect>
      </GridItem>

      <GridItem colSpan={[12, 6, 6, 3, 2]}>
        <NativeSelect
          label="Sort by"
          value={params.get("sort") ?? "added"}
          onChange={handleSortChange}
        >
          <option value="name">Name</option>
          <option value="added">When added</option>
        </NativeSelect>
      </GridItem>

      <GridItem colSpan={[12, 12, 12, 12]} overflowX="auto">
        <Tabs
          value={params.get("illustrationType") ?? "all"}
          size="sm"
          variant="accent"
          onValueChange={({ value }) => handleIllustrationTypeChange(value)}
        >
          <TabsList>
            <TabsTrigger value="transparent-bg">Illustration</TabsTrigger>
            <TabsTrigger value="sticker-white-bg">
              Sticker without peel-off
            </TabsTrigger>
            <TabsTrigger value="sticker-peel-off">
              Sticker with peel-off
            </TabsTrigger>
            <TabsTrigger value="monochrome">monochrome</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </GridItem>
    </SimpleGrid>
  );
};
