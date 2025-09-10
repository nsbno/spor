import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@vygruppen/spor-react";
import { ReactNode } from "react";

import { getIcon } from "~/utils/getIcon";

type BlockHeadingProps = {
  heading: string;
  subheading?: string | ReactNode;
  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "lg" | "md" | "sm" | "xs";
  icon?: string;
};

const mediaQuery = `@media screen and (min-width: ${tokens.size.breakpoint.lg})`;

export const BlockHeading = ({
  heading,
  subheading,
  headingLevel = "h2",
  variant = "lg",
  icon,
}: BlockHeadingProps) => (
  <GridItem colStart={[1, 2, null, 3]} colSpan={[6, 4, null, 8]}>
    <Stack gap={1} marginBottom={subheading ? [2, 3] : 2}>
      <Flex
        alignItems="center"
        justifyContent="flex-start"
        css={{
          [mediaQuery]: {
            svg: {
              height: 30,
              width: 30,
            },
          },
        }}
      >
        {icon && (
          <Box marginRight={2} color="darkTeal">
            {getIcon({ iconName: icon })}{" "}
          </Box>
        )}
        <Heading
          as={headingLevel}
          variant={variant}
          fontWeight="bold"
          color="text.secondary"
          autoId
        >
          {heading}
        </Heading>
      </Flex>
      {subheading && <Text variant="sm">{subheading}</Text>}
    </Stack>
  </GridItem>
);
