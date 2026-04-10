import { Box, Tag as ChakraTag, TagRootProps } from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";
import React from "react";

export type InputChipProps = TagRootProps & {
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
