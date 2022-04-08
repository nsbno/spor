import { Box } from "@vygruppen/spor-react";
import { BaseLayout } from "~/features/layouts/base-layout/BaseLayout";
import { ActionLinks } from "~/features/routes/index/ActionLinks";
import { Footer } from "~/features/routes/index/Footer";
import { HeroSection } from "~/features/routes/index/HeroSection";

export default function Index() {
  return (
    <BaseLayout>
      <Box backgroundColor="alias.lightGrey" flex="1">
        <Box as="main">
          <HeroSection />
          <ActionLinks />
        </Box>
        <Footer />
      </Box>
    </BaseLayout>
  );
}
