import { Box, useColorModeValue } from "@vygruppen/spor-react";
import { Footer } from "~/root/layout/Footer";
import { ActionLinks } from "~/routes/_index/ActionLinks";
import { HeroSection } from "~/routes/_index/HeroSection";

export default function Index() {
  const backgroundColor = useColorModeValue(
    "bg.default.light",
    "bg.default.dark",
  );
  return (
    <Box backgroundColor={backgroundColor} flex="1">
      <Box as="main" id="content">
        <HeroSection />
        <ActionLinks />
      </Box>
      <Box maxWidth="container.lg" marginX="auto" marginY={3} paddingX={4}>
        <Footer />
      </Box>
    </Box>
  );
}
