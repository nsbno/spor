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
      backgroundColor="surface.secondary"
      className="dark"
      alignItems="center"
      gap="4"
      marginTop={3}
      paddingTop={2}
      borderTop="1px solid"
      borderColor={borderColor}
      paddingX={[3, null, 6, 4, 8]}
      width="100%"
      marginX="auto"
      minHeight="12rem"
      flexDirection={["column", null, "row"]}
    >
      <Box alignSelf="start" marginTop="4">
        <Link to="/" aria-label="Go to the front page">
          <VyLogo
            aria-hidden="true"
            width="auto"
            height={["30px", "36px", null, "42px"]}
          />
        </Link>
      </Box>

      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="start"
        gap={2}
        flexWrap="wrap"
        flexGrow={1}
      >
        <Flex
          flexDirection="column"
          gap="6"
          justifyContent="center"
          alignItems={["start", null, "center"]}
        >
          <Flex
            gap={["4", null, "8"]}
            flexDirection={["column", null, "row"]}
            marginBottom={4}
          >
            {footerItems.map((item) => (
              <Flex
                flexDirection="column"
                key={item._key}
                textAlign={["left", null, "center"]}
              >
                <Text
                  as="h6"
                  textAlign={["left", null, "center"]}
                  fontWeight="bold"
                  variant="xs"
                >
                  {item.title}
                </Text>

                <Box
                  textAlign={["left", null, "center"]}
                  fontSize="xs"
                  css={{
                    "& a": {
                      color: "inherit",
                      textDecoration: "underline",
                    },
                  }}
                >
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
