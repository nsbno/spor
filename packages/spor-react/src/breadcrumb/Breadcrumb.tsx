import { DropdownRightFill18Icon } from "@vygruppen/spor-icon-react";
import React, { forwardRef, PropsWithChildren } from "react";
import { BoxProps } from "../layout";
import { breadcrumbRecipe } from "../theme/components";
import { RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import { useColorModeValue } from "../color-mode";
import { Breadcrumb as ChakraBreadcrumb } from "@chakra-ui/react";
import { BreadcrumbRoot } from "../components/ui/breadcrumb";

type BreadcrumbVariants = RecipeVariantProps<typeof breadcrumbRecipe>;

export type BreadcrumbProps = BoxProps &
  PropsWithChildren<BreadcrumbVariants> & {
    children: React.ReactNode;
    variant?: "base" | "ghost";
  };

/**
 * A breadcrumb component.
 *
 * Used to create customizable breadcrumbs.
 *
 * ```tsx
 * <BreadcrumbRoot>
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *   </BreadcrumbItem>
 *   <BreadcrumbCurrentLink>
 *    <BreadcrumbLink href="/about">About</BreadcrumbLink>
 *  </BreadcrumbCurrentLink>
 * </BreadcrumbRoot>
 * ```
 */
export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ colorPalette = "white", children, ...props }, ref) => {
    const recipe = useRecipe({ recipe: breadcrumbRecipe });
    const styles = recipe({ colorPalette });
    const iconColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");

    return (
      <BreadcrumbRoot  >
        {children}
      </BreadcrumbRoot>
    );
  }
);
