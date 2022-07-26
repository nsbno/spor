import {
  Heading,
  SporProvider,
  Stack,
  Text,
  Alert,
  Expandable,
} from "@vygruppen/spor-react-native";
import {
  AltTransportOutline24Icon,
  CloseOutline18Icon,
  DeleteCircleOutline24Icon,
  DropdownDownFill18Icon,
  DropdownUpFill18Icon,
  InformationOutline24Icon,
  SuccessOutline24Icon,
  WarningOutline24Icon,
} from "@vygruppen/spor-icon-react-native";
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
          width={284}
          p={2}
          justifyContent="center"
          alignItems={"center"}
        >
          <Heading color="darkGrey" variant="2xl" textAlign="center">
            Spor Demo app
          </Heading>

          <Alert colorScheme="yellow" icon={<InformationOutline24Icon />}>
            Informasjon om alternativ transport for avganger som ikke går som
            normalt.
          </Alert>

          <Alert
            colorScheme="light-yellow"
            actionType="expandable"
            title="Viktig melding med for lang tittel"
            icon={<WarningOutline24Icon />}
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
            colorScheme="orange"
            actionType="closeable"
            title="Kort overgangstid"
            url="https://spor.cloud.vy.no/ressurser/design-tokens"
            icon={<InformationOutline24Icon />}
          >
            Informasjon om alternativ transport for avganger som ikke går som
          </Alert>

          <Alert colorScheme="red" icon={<InformationOutline24Icon />}>
            Informasjon om alternativ transport for avganger som ikke går som
            normalt.
          </Alert>

          <Alert
            colorScheme="green"
            actionType="expandable"
            title="Bekreftelse"
            icon={<SuccessOutline24Icon />}
          >
            Brukes til bekreftelse i kjøpsløpet og informasjon om utførte
            handlinger.
          </Alert>

          <Alert colorScheme="blue" icon={<InformationOutline24Icon />}>
            Informasjon om alternativ transport for avganger som ikke går som
            normalt.
          </Alert>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
