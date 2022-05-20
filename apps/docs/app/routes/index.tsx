import { Box } from "@vygruppen/spor-react";
import { ActionLinks } from "~/features/routes/index/ActionLinks";
import { Footer } from "~/features/routes/index/Footer";
import { HeroSection } from "~/features/routes/index/HeroSection";

export default function Index() {
  return (
    <Box backgroundColor="lightGrey" flex="1">
      <Box as="main">
        <HeroSection />
        <ActionLinks />
      </Box>
      <Footer />
    </Box>
  );
}
