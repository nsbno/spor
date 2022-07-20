import {
  Heading,
  SporProvider,
  Stack,
  Text,
  Alert,
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
        >
          <Heading color="darkGrey" variant="2xl" textAlign="center">
            Spor Demo app
          </Heading>
          <Text color="darkGrey" variant="md" textAlign="center">
            Velkommen! Denne appen brukes til demonstrasjon og utvikling av
            forskjellige komponenter i Spor sitt designsystem for React Native.
          </Text>
          <Alert variant="info">ehi jeg heter gyda</Alert>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
