import { Box } from "@vygruppen/spor-react";
import { Footer } from "~/features/layouts/footer/Footer";
import { ActionLinks } from "~/features/routes/index/ActionLinks";
import { HeroSection } from "~/features/routes/index/HeroSection";

export default function Index() {
  return (
    <Box backgroundColor="lightGrey" flex="1">
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
