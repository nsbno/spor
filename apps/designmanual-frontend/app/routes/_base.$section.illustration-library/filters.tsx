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

  const parameters = new URLSearchParams(location.search);

  const [serachQuery, setSearchQuery] = useState(
    parameters.get("search") ?? "",
  );

  const updateParameters = ({
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
      parameters.set("search", searchValue);
    }
    if (illustrationTypeValue) {
      parameters.set("illustrationType", illustrationTypeValue);
    }
    if (sizeValue) {
      parameters.set("size", sizeValue);
    }

    if (sortValue) {
      parameters.set("sort", sortValue);
    }

    parameters.set("page", "1");
    navigate(`?${parameters.toString()}`, {
      replace: true,
      preventScrollReset: true,
    });
  };

  const debouncedSearchNavigate = useDebouncedCallback(
    (searchValue: string) => {
      updateParameters({ searchValue });
    },
    500,
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchQuery(searchValue);
    debouncedSearchNavigate(searchValue);
  };

  const handleIllustrationTypeChange = (illustrationTypeValue: string) => {
    updateParameters({ illustrationTypeValue });
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sizeValue = event.target.value;
    updateParameters({ sizeValue });
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value;
    updateParameters({ sortValue });
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
          value={parameters.get("size") ?? "all"}
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
          value={parameters.get("sort") ?? "added"}
          onChange={handleSortChange}
        >
          <option value="name">Name</option>
          <option value="added">When added</option>
        </NativeSelect>
      </GridItem>

      <GridItem colSpan={[12, 12, 12, 12]} overflowX="auto">
        <Tabs
          value={parameters.get("illustrationType") ?? "all"}
          size="sm"
          variant="accent"
          onValueChange={({ value }) => handleIllustrationTypeChange(value)}
        >
          <TabsList>
            <TabsTrigger value="transparent-bg">Illustration</TabsTrigger>
            <TabsTrigger value="sticker-white-bg">Sticker</TabsTrigger>
            <TabsTrigger value="monochrome">Monochrome</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </GridItem>
    </SimpleGrid>
  );
};
