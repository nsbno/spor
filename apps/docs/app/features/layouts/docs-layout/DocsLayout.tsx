import { useTheme } from "@chakra-ui/react";
import {
  Box,
  Flex,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  SearchOutline24Icon,
} from "@vygruppen/spor-react";
import React from "react";

type DocsLayoutProps = { children: React.ReactNode };
export const DocsLayout = ({ children }: DocsLayoutProps) => {
  return (
    <Flex flex="1">
      <LeftNavigation>TBD</LeftNavigation>
      <Box as="main" flex="1" mt={6} mx={[3, 6, 10]}>
        {children}
      </Box>
    </Flex>
  );
};

type LeftNavigationProps = {
  children: React.ReactNode;
};
const LeftNavigation = ({ children }: LeftNavigationProps) => {
  const { space, colors } = useTheme();
  return (
    <Box
      display={["none", "block"]}
      as="nav"
      aria-label="content"
      flex="1"
      maxWidth="340px"
      px={1.5}
      py={2}
      borderRight={`${space[1.5]} solid ${colors.alias.lightGrey}`}
    >
      <FormControl>
        <InputGroup>
          <InputLeftElement width="48px">
            <IconButton
              type="submit"
              aria-label="Søk"
              variant="ghost"
              icon={<SearchOutline24Icon />}
            />
          </InputLeftElement>
          <Input label="Search" pl="48px" />
        </InputGroup>
      </FormControl>
      <Box mt={6}>{children}</Box>
    </Box>
  );
};
