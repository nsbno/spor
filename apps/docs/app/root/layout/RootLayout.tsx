import { Flex, useColorModeValue } from "@chakra-ui/react";
import { SiteHeader } from "./SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout = ({ children }: BaseLayoutProps) => {
  const backgroundColor = useColorModeValue(
    "bg.default.light",
    "bg.default.dark",
  );
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      backgroundColor={backgroundColor}
    >
      <SiteHeader />
      <Flex flex="1" flexDirection="column" alignItems="stretch">
        {children}
      </Flex>
    </Flex>
  );
};
