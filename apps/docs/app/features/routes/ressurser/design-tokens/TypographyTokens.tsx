import {
  Code,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";
import { Stack, Text } from "@vygruppen/spor-react";
import { Fragment } from "react";
import { SharedTokenLayout } from "./SharedTokenLayout";

export function TypographyTokens() {
  const mobileTokens = Object.entries(tokens.font.style).map(
    ([name, style]) => ({
      name,
      ...style,
    })
  );
  return (
    <SharedTokenLayout
      title="Typografi"
      description={
        <Stack>
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
      <Table>
        <TableCaption>Mobil</TableCaption>
        <Thead>
          <Tr>
            <Th>Eksempel</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mobileTokens.map((token, index) => (
            <Fragment key={index}>
              <Tr>
                <Td>
                  <Text
                    fontSize={token["font-size"].mobile.value}
                    fontFamily={token["font-family"].value}
                    lineHeight={token["line-height"].value}
                  >
                    {token.name} Regular
                  </Text>
                </Td>
                <Td>
                  {token["font-size"].mobile.value} /{" "}
                  {token["line-height"].value}
                </Td>
                <Td>
                  <Stack>
                    <Code>$font-style-{token.name}-font-size-mobile</Code>
                    <Code>$font-style-{token.name}-line-height</Code>
                    <Code>$font-style-{token.name}-font-family</Code>
                  </Stack>
                </Td>
              </Tr>
            </Fragment>
          ))}
        </Tbody>
      </Table>
    </SharedTokenLayout>
  );
}
