import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  VyLogo,
} from "@vygruppen/spor-react";
import { Link, useRouteLoaderData } from "react-router";

import { PortableText } from "~/features/portable-text/PortableText";
import { loader } from "~/root";

export const Footer = () => {
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const routeData = useRouteLoaderData<typeof loader>("root");
  const footerItems =
    routeData?.initialSanityData?.siteSettings?.footerItems || [];

  return (
    <Flex
      as="footer"
      justifyContent="space-between"
      backgroundColor={"surface.tertiary"}
      alignItems="center"
      gap="4"
      marginTop={3}
      paddingTop={2}
      borderTop="1px solid"
      borderColor={borderColor}
      paddingX={[3, null, 6, 4, 8]}
      width={"100%"}
      marginX="auto"
      minHeight={"8.75rem"}
    >
      <Link to="/" aria-label="Go to the front page">
        <VyLogo
          aria-hidden="true"
          className="dark"
          width="auto"
          height={["30px", "36px", null, "48px"]}
        />
      </Link>

      <Flex
        flexDirection="row"
        justifyContent={"center"}
        alignItems="start"
        gap={2}
        flexWrap="wrap"
        flexGrow={1}
      >
        <Flex
          flexDirection={"column"}
          gap="2"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color="white" fontSize="xs">
            Har du spørsmål eller kommentar angående designmanualen?
          </Text>
          <Flex gap="8">
            {footerItems.map((item) => (
              <Flex
                flexDirection="column"
                key={item._key}
                alignItems={"center"}
              >
                <Text
                  as="h6"
                  className="dark"
                  color={"white"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize="xs"
                >
                  {item.title}
                </Text>
                <Box color={"white"} textAlign={"center"} fontSize="xs">
                  <PortableText value={item.description} />
                </Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
