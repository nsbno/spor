import {
  Box,
  RecipeVariantProps,
  Tag as ChakraTag,
  TagRootProps,
} from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";
import React from "react";

import { inputChipSlotRecipe } from "../theme/slot-recipes/input-chip";

type InputChipVariantProps = RecipeVariantProps<typeof inputChipSlotRecipe>;

export type InputChipProps = Omit<TagRootProps, keyof InputChipVariantProps> &
  InputChipVariantProps & {
    startIcon?: IconComponent;
    endIcon?: IconComponent;
    onClick?: VoidFunction;
  };

export const InputChip = ({
  startIcon,
  endIcon,
  children,
  ref,
  ...rest
}: InputChipProps & { ref?: React.Ref<HTMLDivElement> }) => {
  return (
    <ChakraTag.Root ref={ref} {...rest} as="button">
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
};
