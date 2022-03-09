import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type SearchFilter = {
  searchString: string;
  size: string;
  variant: string;
};
type SearchFilterContextType = {
  searchFilter: SearchFilter;
  setSearchFilter: Dispatch<SetStateAction<SearchFilter>>;
  resetSearchFilter: () => void;
};
const SearchFilterContext = createContext<SearchFilterContextType | null>(null);
type SearchFilterProviderProps = {
  children: React.ReactNode;
};
export const SearchFilterProvider = (props: SearchFilterProviderProps) => {
  const initialSearchFilter = {
    searchString: "",
    size: "30",
    variant: "outline",
  };
  const [searchFilter, setSearchFilter] =
    useState<SearchFilter>(initialSearchFilter);

  return (
    <SearchFilterContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
        resetSearchFilter: () => setSearchFilter(initialSearchFilter),
      }}
    >
      {props.children}
    </SearchFilterContext.Provider>
  );
};
/**
 * Hook for getting and updating all icon search filters
 */
export const useSearchFilter = () => {
  const context = useContext(SearchFilterContext);
  if (!context) {
    throw new Error(
      "useSearchFilter must be used within a SearchFilterProvider"
    );
  }
  const { searchFilter, setSearchFilter, resetSearchFilter } = context;
  return {
    searchFilter,
    setSearchString: (searchString: string) =>
      setSearchFilter((prev) => ({ ...prev, searchString })),
    setSize: (size: string) => setSearchFilter((prev) => ({ ...prev, size })),
    setVariant: (variant: string) =>
      setSearchFilter((prev) => ({ ...prev, variant })),
    reset: resetSearchFilter,
  };
};
