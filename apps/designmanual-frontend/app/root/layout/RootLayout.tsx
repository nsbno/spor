import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import { useStickymenu } from "~/routes/_base/content-menu/utils";
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
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const { asideRef, forceFixed, fixedRect } = useStickymenu();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new ResizeObserver(([entry]) => {
      setFooterHeight(entry.contentRect.height);
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  usePageTracking();

  return (
    <Flex direction="column" minHeight="100vh" bg="bg" fontFamily="Vy Sans">
      <SiteHeader onHeightChange={setHeaderOffset} />

      <Flex
        id="content"
        justifyContent="space-between"
        gap={8}
        marginX={{ base: "4", md: "8" }}
        overflow="visible"
        flexDirection={["column", null, null, "row"]}
        flex={1}
      >
        {forceFixed && fixedRect && (
          <Box
            width={`${fixedRect.width}px`}
            height={`${fixedRect.height}px`}
            as="div"
          />
        )}
        <Box
          ref={asideRef}
          alignSelf="flex-start"
          position={forceFixed ? "fixed" : "sticky"}
          top={headerOffset}
          as="aside"
          maxHeight={`calc(100vh - ${headerOffset}px - ${footerHeight}px)`}
          overflowY="auto"
          style={
            forceFixed && fixedRect
              ? { left: `${fixedRect.left}px`, width: `${fixedRect.width}px` }
              : undefined
          }
          transition="all .3s linear"
        >
          <LeftSidebar />
        </Box>

        {children}
      </Flex>
      <Footer ref={footerRef} />
    </Flex>
  );
};
