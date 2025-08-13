import { Flex } from "@chakra-ui/react";

import { Footer } from "./Footer";
import { SiteHeader } from "./SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex
      flexDirection="column"
      minHeight="vh"
      backgroundColor="bg"
      fontFamily="Vy Sans"
      overflowX={"hidden"}
    >
      <SiteHeader />
      <Flex flex={1} flexDirection="column">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
