import { Flex } from "@chakra-ui/react";
import { Box } from "@vygruppen/spor-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import { FeedbackForm } from "~/routes/_base/feedback-form/FeedbackForm";
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
  const [feedbackBottom, setFeedbackBottom] = useState(16);
  const footerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isIdentitetPage = location.pathname.includes("identitet");

  useEffect(() => {
    const updateFeedbackPosition = () => {
      const footer = footerRef.current;
      if (!footer) return;
      const footerTop = footer.getBoundingClientRect().top + 100;
      const viewportHeight = window.innerHeight;
      if (footerTop < viewportHeight) {
        setFeedbackBottom(viewportHeight - footerTop + 30);
      } else {
        setFeedbackBottom(16);
      }
    };
    window.addEventListener("scroll", updateFeedbackPosition, {
      passive: true,
    });
    updateFeedbackPosition();
    return () => window.removeEventListener("scroll", updateFeedbackPosition);
  }, []);

  const isLandingPage =
    location?.pathname === "/" ||
    location?.pathname === "/ressurser" ||
    location?.pathname === "/identitet" ||
    location?.pathname === "/spor";
  const marginLeft = isLandingPage
    ? [0, null, null, "18rem"]
    : [0, null, null, "21rem"];

  const paddingTop = isLandingPage ? 0 : 8;
  const paddingRight = isLandingPage ? 0 : [2, 6, 6, 6];
  const marginX = isLandingPage ? 0 : [2, 6, 8, 0];
  usePageTracking();

  return (
    <HeaderOffsetContext value={headerOffset}>
      <Flex direction="column" minHeight="100vh" bg="bg" fontFamily="Vy Sans">
        <SiteHeader onHeightChange={setHeaderOffset} />

        <Flex
          marginX={marginX}
          marginRight={paddingRight}
          flex={1}
          position="relative"
          minWidth={0}
        >
          <LeftSidebar headerOffset={headerOffset} />
          {/* Add left margin on large screens to account for the fixed sidebar width (20rem) */}
          <Flex
            as="main"
            alignItems="stretch"
            marginLeft={marginLeft}
            paddingTop={paddingTop}
            flex={1}
            minWidth={0}
          >
            {children}
          </Flex>
        </Flex>
        {!isIdentitetPage && (
          <Flex
            position="fixed"
            bottom={`${feedbackBottom}px`}
            right={4}
            zIndex="banner"
          >
            <FeedbackForm />
          </Flex>
        )}

        <Box ref={footerRef} position="relative" zIndex="sticky">
          <Footer />
        </Box>
      </Flex>
    </HeaderOffsetContext>
  );
};
