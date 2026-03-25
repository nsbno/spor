import {
  Box,
  RecipeVariantProps,
  Tag as ChakraTag,
  TagRootProps,
  useRecipe,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";
import React from "react";

import { tagRecipe } from "@/theme/recipes/tag";

type TagVariants = RecipeVariantProps<typeof tagRecipe>;

export type TagProps = TagRootProps &
  TagVariants & {
    startIcon?: IconComponent;
    endIcon?: IconComponent;
    onClick?: VoidFunction;
  };

export const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    startIcon,
    endIcon,
    variant = "core",
    size = "sm",
    onClick,
    children,
    ...rest
  } = props;
  const recipe = useRecipe({ key: "tag" });
  const styles = recipe({ variant, size });

  return (
    <ChakraTag.Root
      ref={ref}
      {...rest}
      css={styles}
      onClick={onClick}
      as="button"
    >
      {startIcon && (
        <ChakraTag.StartElement>
          <Box as={startIcon} />
        </ChakraTag.StartElement>
      )}
      <ChakraTag.Label>{children}</ChakraTag.Label>
      {endIcon && (
        <ChakraTag.EndElement>
          <Box as={endIcon} />
        </ChakraTag.EndElement>
      )}
    </ChakraTag.Root>
  );
});

Tag.displayName = "Tag";
