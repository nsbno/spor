import { Flex } from "@chakra-ui/react";
import { SkipToContent } from "~/features/layouts/root-layout/SkipToContent";
import { SiteHeader } from "./SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <SkipToContent />
      <Flex flexDirection="column" minHeight="100vh">
        <SiteHeader />
        <Flex flex="1" flexDirection="column" alignItems="stretch">
          {children}
        </Flex>
      </Flex>
    </>
  );
};
