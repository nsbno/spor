import { Box, Tag as ChakraTag, TagRootProps } from "@chakra-ui/react";
import { IconComponent } from "@vygruppen/spor-icon-react";
import React from "react";

export type TagProps = TagRootProps & {
  startIcon?: IconComponent;
  endIcon?: IconComponent;
  onClick?: VoidFunction;
};

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(function Tag(
  { startIcon, endIcon, onClick, children, ...rest },
  ref,
) {
  return (
    <ChakraTag.Root ref={ref} {...rest} onClick={onClick} as="button">
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
