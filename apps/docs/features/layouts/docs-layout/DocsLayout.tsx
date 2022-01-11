import { Box, Button, Flex, useTheme } from "@chakra-ui/react";
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from "@vygruppen/spor-react";
import React from "react";
import { BaseLayout } from "../base-layout/BaseLayout";

type DocsLayoutProps = { children: React.ReactNode };
export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <BaseLayout>
      <Flex>
        <LeftNavigation />
        <Box as="main" flex="1">
          {children}
        </Box>
      </Flex>
    </BaseLayout>
  );
};

type LeftNavigationProps = {};
const LeftNavigation = ({}: LeftNavigationProps) => {
  const { space, colors } = useTheme();
  return (
    <Box
      as="nav"
      aria-label="content"
      flex="1"
      maxWidth="340px"
      px={1.5}
      borderRight={`${space[1.5]} solid ${colors.alias.lightGrey}`}
    >
      <FormControl>
        <InputGroup>
          <Input label="Search" />
          <InputRightElement>
            <Button type="submit" aria-label="search" variant="ghost">
              🔎
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};
