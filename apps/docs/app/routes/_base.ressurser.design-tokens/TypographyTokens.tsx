import tokens from "@vygruppen/spor-design-tokens";
import {
  Box,
  BoxProps,
  Code,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@vygruppen/spor-react";
import { Fragment } from "react";
import { LinkableHeading } from "~/features/portable-text/LinkableHeading";
import { useTokenFormatter } from "~/routes/_base.ressurser.design-tokens/useTokenFormatter";
import { SharedTokenLayout } from "./SharedTokenLayout";

type TypographyToken = {
  name: string;
  key: "xs" | "sm" | "md" | "lg" | "xl-display" | "xl-sans" | "xxl";
  fontWeight: "normal" | "bold";
};
const typographyTokens: TypographyToken[] = [
  {
    name: "XS Regular",
    key: "xs",
    fontWeight: "normal",
  },
  {
    name: "XS Bold",
    key: "xs",
    fontWeight: "bold",
  },
  {
    name: "Sm Regular",
    key: "sm",
    fontWeight: "normal",
  },
  {
    name: "Sm Bold",
    key: "sm",
    fontWeight: "bold",
  },
  {
    name: "Md Regular",
    key: "md",
    fontWeight: "normal",
  },
  {
    name: "Md Bold",
    key: "md",
    fontWeight: "bold",
  },
  {
    name: "Lg Regular",
    key: "lg",
    fontWeight: "normal",
  },
  {
    name: "Lg Bold",
    key: "lg",
    fontWeight: "bold",
  },
  {
    name: "XL Sans Regular",
    key: "xl-sans",
    fontWeight: "normal",
  },
  {
    name: "XL Sans Bold",
    key: "xl-sans",
    fontWeight: "bold",
  },
  {
    name: "XL Display",
    key: "xl-display",
    fontWeight: "normal",
  },
  {
    name: "2XL Display",
    key: "xxl",
    fontWeight: "normal",
  },
];

export function TypographyTokens(props: BoxProps) {
  return (
    <SharedTokenLayout
      {...props}
      title="Typografi"
      description={
        <Stack spacing={6}>
          <Text>
            Vi har to “sett” med tekststiler; ett for mobil og ett for desktop.
            Tekststilene for Mobil skal brukes i Vy-appen, og web på mobil, mens
            liggende tablet, desktop og widescreen skal bruke tekststilene for
            Desktop. Brekkpunktet er på skjermbredde større eller lik &gt;=756
            piksler bredde. Linjehøyden skal alltid være 1.333 ganger
            skriftstørrelsen rundet av til nærmeste pixel.
          </Text>
          <Text>
            Fonten Vy Display er mindre lesbar i små størrelser, og skal derfor
            helst bare brukes på overskrifter på Epi-sidene, mens vi i Elm- og
            React-apper foretrekker Vy Sans.
          </Text>
        </Stack>
      }
    >
      <Stack spacing={9}>
        <TypographyTokenTable viewportSize="mobile" title="Mobil" />
        <TypographyTokenTable viewportSize="desktop" title="Desktop" />
      </Stack>
    </SharedTokenLayout>
  );
}

type TypographyTokenTableProps = BoxProps & {
  viewportSize: "mobile" | "desktop";
  title: string;
};
const TypographyTokenTable = ({
  viewportSize,
  title,
  ...props
}: TypographyTokenTableProps) => {
  const tokenFormatter = useTokenFormatter();
  return (
    <Box {...props}>
      <LinkableHeading as="h2" variant="sm" fontWeight="bold" mb={2}>
        {title}
      </LinkableHeading>
      <Table variant="simple" colorScheme="grey">
        <Thead>
          <Tr>
            <Th>Eksempel</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {typographyTokens.map((token) => (
            <Fragment key={token.name}>
              <Tr>
                <Td>
                  <Text
                    fontSize={
                      tokens.font.style[token.key]["font-size"][viewportSize]
                    }
                    fontFamily={tokens.font.style[token.key]["font-family"]}
                    lineHeight={tokens.font.style[token.key]["line-height"]}
                    fontWeight={token.fontWeight}
                  >
                    {token.name}
                  </Text>
                </Td>
                <Td>
                  {tokens.font.style[token.key]["font-size"][viewportSize]} /{" "}
                  {tokens.font.style[token.key]["line-height"]}
                </Td>
                <Td>
                  <Stack spacing={1}>
                    <Box>
                      <Code>
                        {tokenFormatter(
                          `font.style.${token.key}.font-size.${viewportSize}`
                        )}
                      </Code>
                    </Box>
                    <Box>
                      <Code>
                        {tokenFormatter(`font.style.${token.key}.line-height`)}
                      </Code>
                    </Box>
                    <Box>
                      <Code>
                        {tokenFormatter(`font.style.${token.key}.font-family`)}
                      </Code>
                    </Box>
                  </Stack>
                </Td>
              </Tr>
            </Fragment>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
