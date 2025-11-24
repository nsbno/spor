import {
  DropdownLeftOutline24Icon,
  DropdownRightOutline24Icon,
} from "@vygruppen/spor-icon-react";
import {
  Box,
  Flex,
  IconButton,
  NativeSelect,
  Text,
} from "@vygruppen/spor-react";
import { useLocation, useNavigate } from "react-router";

type Props = {
  total: number;
  page: number;
  pageSize: number;
};

export const Pagination = ({ total, page, pageSize }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageSize = e.target.value;
    params.set("pageSize", pageSize);
    navigate(`?${params.toString()}`, {
      replace: true,
      preventScrollReset: true,
    });
  };

  const startItem = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, total);

  const handlePrevPage = () => {
    const currentPage = Number(params.get("page") ?? "1");
    if (currentPage > 1) {
      params.set("page", String(currentPage - 1));
      navigate(`?${params.toString()}`, {
        replace: true,
        preventScrollReset: true,
      });
    }
  };

  const handleNextPage = () => {
    const currentPage = Number(params.get("page") ?? "1");
    const maxPage = Math.ceil(total / pageSize);
    if (currentPage < maxPage) {
      params.set("page", String(currentPage + 1));
      navigate(`?${params.toString()}`, {
        replace: true,
        preventScrollReset: true,
      });
    }
  };

  return (
    <Flex
      justifyContent={{ base: "center", md: "space-between" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      gap="2"
    >
      <Box width={{ base: "100%", md: "20rem" }} mb={{ base: "2", md: "0" }}>
        <NativeSelect
          label="Per page"
          value={params.get("pageSize") ?? "all"}
          onChange={handlePageSizeChange}
          variant="floating"
          disabled={total === 0}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
          <option value="all">All</option>
        </NativeSelect>
      </Box>
      <Flex
        gap="2"
        alignItems="center"
        justifyContent={{ base: "center", md: "flex-end" }}
        width={{ base: "100%", md: "auto" }}
      >
        <IconButton
          onClick={handlePrevPage}
          disabled={page <= 1}
          variant="tertiary"
          size="sm"
          icon={<DropdownLeftOutline24Icon />}
          title="Previous page"
        />
        <Text minWidth="fit-content" variant="xs">
          {total === 0
            ? "No items found"
            : `${startItem}–${endItem} of ${total} items shown`}
        </Text>
        <IconButton
          onClick={handleNextPage}
          disabled={page >= Math.ceil(total / pageSize)}
          variant="tertiary"
          size="sm"
          icon={<DropdownRightOutline24Icon />}
          title="Next page"
        />
      </Flex>
    </Flex>
  );
};
