import {
  Heading,
  SporProvider,
  Stack,
  Text,
  Alert,
  Expandable,
} from "@vygruppen/spor-react-native";
import React from "react";
import { SafeAreaView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  return (
    <SporProvider>
      <SafeAreaView>
        <Stack
          backgroundColor="white"
          height="100%"
          p={2}
          justifyContent="center"
          alignItems={"center"}
        >
          <Heading color="darkGrey" variant="2xl" textAlign="center">
            Spor Demo app
          </Heading>
          <Alert variant="info">
            Informasjon om alternativ transport for avganger som ikke går som
            normalt.
          </Alert>
          <Alert
            variant="important"
            actionType="expandable"
            title="Viktig melding lang lang lang lang tekst"
          >
            Informasjon om kort tid mellom avganger, når overgangstid er mindre
            enn 10 min. {"\n"}
            {"\n"}
            Om den korte teksten ikke holder og det er behov for en lengre og
            mer forklarende tekst, så kan vi legge til mer tekst i xl-boksen.
            Denne kan fylle en hel skjerm om nødvendig, men prøv å holde teksten
            i infoboksene så kortfattet som mulig.{"\n"}
            {"\n"}
            Noen ganger må ord utheves for å forsterke et budskap.
            {"\n"}
            {"\n"} Link til mer informasjon
          </Alert>
          <Alert
            variant="short-transition"
            actionType="closeable"
            title="Kort overgangstid"
          >
            Informasjon om alternativ transport for avganger som ikke går som
          </Alert>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
