import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";
import { sendPageViewEvent } from "~/utils/analytics/metabaseCore";

import { Footer } from "./Footer";
import { HeaderOffsetContext } from "./HeaderOffsetContext";
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
  const [headerOffset, setHeaderOffset] = useState(110);

  usePageTracking();

  return (
    <HeaderOffsetContext value={headerOffset}>
      <Flex direction="column" minHeight="100vh" bg="bg" fontFamily="Vy Sans">
        <SiteHeader onHeightChange={setHeaderOffset} />

        <Flex
          marginX={[2, 6, 8, 0]}
          marginRight={[2, 6, 6, 6]}
          flex={1}
          position="relative"
          minWidth={0}
        >
          <LeftSidebar headerOffset={headerOffset} />
          {/* Add left margin on large screens to account for the fixed sidebar width (20rem) */}
          <Flex
            as="main"
            alignItems="stretch"
            marginLeft={[0, null, null, "21rem"]}
            paddingTop={8}
            flex={1}
            minWidth={0}
          >
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </HeaderOffsetContext>
  );
};
