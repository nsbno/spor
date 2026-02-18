import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { useStickymenu } from "~/routes/_base/content-menu/utils";
import { LeftSidebar } from "~/routes/_base/left-sidebar/LeftSidebar";

import { Footer } from "./Footer";
import { SiteHeader } from "./SiteHeader";

type BaseLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout = ({ children }: BaseLayoutProps) => {
  const [headerOffset, setHeaderOffset] = useState(0);
  const { asideRef, forceFixed, fixedRect } = useStickymenu();

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
          style={
            forceFixed && fixedRect
              ? { left: `${fixedRect.left}px`, width: `${fixedRect.width}px` }
              : undefined
          }
          transition="all .2s linear"
        >
          <LeftSidebar />
        </Box>

        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
