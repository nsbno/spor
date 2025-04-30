import {
  Pagination as ChakraPagination,
  RecipeVariantProps,
} from "@chakra-ui/react";

import { paginationSlotRecipe } from "@/theme/slot-recipes/pagination";

export type PaginationVariantProps = RecipeVariantProps<
  typeof paginationSlotRecipe
>;

export type ButtonVariantContext = {
  getHref?: (page: number) => string;
};

export type PaginationProps = Omit<
  ChakraPagination.RootProps,
  "type" | "translations"
> &
  ButtonVariantContext & {};

export type PaginationRootProps = Omit<ChakraPagination.RootProps, "type"> &
  React.PropsWithChildren<PaginationVariantProps> &
  ButtonVariantContext & {};
