import React, { forwardRef, PropsWithChildren } from "react";
import { BoxProps } from "../layout";
import { breadcrumbRecipe } from "../theme/components";
import { RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import { useColorModeValue } from "../color-mode";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbLink as ChakraBreadcrumbLink,
  BreadcrumbCurrentLink as ChakraBreadcrumbCurrentLink,
  BreadcrumbEllipsis as ChakraBreadcrumbEllipsis,
} from "@chakra-ui/react";

type BreadcrumbVariants = RecipeVariantProps<typeof breadcrumbRecipe>;

export type BreadcrumbProps = BoxProps &
  PropsWithChildren<BreadcrumbVariants> & {
    children: React.ReactNode;
    variant?: "base" | "ghost";
    separator?: React.ReactNode;
    separatorGap?: string | number;
  };

/**
 * A breadcrumb component.
 *
 * Used to create customizable breadcrumbs.
 *
 * ```tsx
 * <Breadcrumb separator=">" separatorGap="4">
 *   <BreadcrumbItem>
 *     <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *   </BreadcrumbItem>
 *   <BreadcrumbItem isCurrentPage>
 *    <BreadcrumbCurrentLink href="/about">About</BreadcrumbCurrentLink>
 *  </BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ variant = "base", separator, separatorGap = "0.5rem", children, ...props }, ref) => {
    const recipe = useRecipe({ recipe: breadcrumbRecipe });
    const styles = recipe({});
    const iconColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400");

    const chakraVariant = variant === "ghost" ? "plain" : "underline";

    const validChildren = React.Children.toArray(children).filter(React.isValidElement);

    return (
      <ChakraBreadcrumb.Root ref={ref} variant={chakraVariant} css={styles} {...props}>
        <ChakraBreadcrumb.List gap={separatorGap}>
          {validChildren.map((child, index) => {
            const isLast = index === validChildren.length - 1;
            return (
              <React.Fragment key={index}>
                <ChakraBreadcrumb.Item>{child}</ChakraBreadcrumb.Item>
                {!isLast && (
                  <ChakraBreadcrumb.Separator>
                    {separator || <span>/</span>}
                  </ChakraBreadcrumb.Separator>
                )}
              </React.Fragment>
            );
          })}
        </ChakraBreadcrumb.List>
      </ChakraBreadcrumb.Root>
    );
  }
);


export const BreadcrumbLink = ChakraBreadcrumbLink;
export const BreadcrumbCurrentLink = ChakraBreadcrumbCurrentLink;
export const BreadcrumbEllipsis = ChakraBreadcrumbEllipsis;