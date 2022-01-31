import { Flex, Image } from "@chakra-ui/react";
import {
  ArrowRightFill30Icon,
  Box,
  Button,
  Heading,
} from "@vygruppen/spor-react";
import { Link } from "remix";
export default function Index() {
  return (
    <Box as="main">
      <HeroSection />
    </Box>
  );
}

function HeroSection() {
  return (
    <Flex backgroundColor="alias.darkTeal" minHeight={["80vh", "510px"]}>
      <Flex maxWidth="1160px" mx="auto" mt={8}>
        <Flex flexDirection="column" color="alias.white" flex="0.3" mt={10}>
          <Heading as="h1" textStyle="2xl">
            Velkommen til designsystemet
          </Heading>
          <Button
            variant="secondary"
            as={Link}
            size="lg"
            to="/docs/contributing"
            rightIcon={<ArrowRightFill30Icon fontSize="30px" />}
            mt={7}
          >
            Se hvordan du kan bidra
          </Button>
        </Flex>
        <Box flex="0.7">
          <Image
            src="/illustrations/front-page-illustration.svg"
            alt="En person som sitter foran et skrivebord, med en dataskjerm."
            width="100%"
            objectFit="contain"
            objectPosition="top center"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
