import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";
import { sendPageViewEvent } from "~/utils/analytics/metabaseCore";

import { Footer } from "./Footer";
import { SiteHeader } from "./SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};

function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    if (typeof document === "undefined") return;

    sendPageViewEvent({
      name: location.pathname,
      recordModelVersion: 1,
    });
  }, [location.pathname]);
}
export const RootLayout = ({ children }: BaseLayoutProps) => {
  const [headerOffset, setHeaderOffset] = useState(0);

  usePageTracking();

  return (
    <Flex direction="column" minHeight="100vh" bg="bg" fontFamily="Vy Sans">
      <SiteHeader onHeightChange={setHeaderOffset} />

      <Flex marginX={[8, 8, 8, 0]} marginRight={8} flex={1} position="relative">
        <LeftSidebar headerOffset={headerOffset} />
        {/* Add left margin on large screens to account for the fixed sidebar width (20rem) */}
        <Flex
          as="main"
          flex="1"
          alignItems="stretch"
          marginLeft={[2, null, null, "20rem"]}
          paddingTop={5}
        >
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};
