import { Flex } from "@vygruppen/spor-react";
import type { ReactNode } from "react";
import { SiteHeader } from "../../site-header/SiteHeader";

type BaseLayoutProps = {
  children: ReactNode;
};
export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <SiteHeader />
      <Flex flex="1" flexDirection="column" alignItems="stretch">
        {children}
      </Flex>
      {/* add <SiteFooter /> */}
    </Flex>
  );
};
