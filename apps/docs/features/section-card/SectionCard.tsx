import { Link, Box, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

type SectionCardProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const SectionCard = () => {
  return (
    <Link>
      <Box padding="lg">
        <Box paddingBottom="lg">{<Icon />}</Box>
        <Stack spacing="sm">
          <Text as="h2" fontWeight="bold">
            Test
          </Text>
          {/*  <Text>{description}</Text> */}
        </Stack>
      </Box>
    </Link>
  );
};
