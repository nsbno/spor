import { Flex } from "@chakra-ui/react";
import { SiteHeader } from "./SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      backgroundColor={"bg.default"}
      fontFamily="Vy Sans"
    >
      <SiteHeader />
      <Flex flex={1} flexDirection="column">
        {children}
      </Flex>
    </Flex>
  );
};
