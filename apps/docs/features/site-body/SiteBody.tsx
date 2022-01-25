import {
  Box,
  Button,
  Flex,
  Icon,
  Heading,
  Stack,
  Center,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import React from "react";

import { LandingPageIllustration } from "./LandingPageIllustration";

export const SiteBody = () => {
  return (
    <Box backgroundColor="alias.darkTeal">
      <Flex gap={4} maxWidth="container.lg" mx="auto" py="50px">
        <Center flex={1}>
          <Stack alignItems="flex-start" spacing="20px">
            <Heading
              as="h2"
              size="4xl"
              fontWeight="normal"
              textColor="alias.white"
            >
              Velkommen til designsystemet
            </Heading>
            <Button
              rightIcon={<RightArrowIcon />}
              rounded={"full"}
              size={"lg"}
              bgColor="alias.coralGreen"
              fontWeight="bold"
              textColor="alias.darkTeal"
            >
              Se hvordan du kan bidra
            </Button>
          </Stack>
        </Center>
        <Center flex={1}>
          <LandingPageIllustration />
        </Center>
      </Flex>
    </Box>
  );
};

const RightArrowIcon = () => {
  return (
    <Icon
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6464 21.6464C17.4511 21.8417 17.4511 22.1583 17.6464 22.3536C17.8417 22.5488 18.1583 22.5488 18.3535 22.3536L25.7474 14.9596L18.3516 7.64451C18.1552 7.45032 17.8387 7.45206 17.6445 7.64839C17.4503 7.84472 17.452 8.1613 17.6484 8.35549L23.8607 14.5L4.49988 14.5C4.22374 14.5 3.99988 14.7239 3.99988 15C3.99988 15.2761 4.22374 15.5 4.49988 15.5L23.7929 15.5L17.6464 21.6464Z"
        fill="#2B2B2C"
      />
    </Icon>
  );
};
