import {
  Heading,
  SporProvider,
  Stack,
  Text,
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
          spacing={3}
        >
          <Heading color="darkGrey" variant="2xl" textAlign="center">
            Spor Demo app
          </Heading>
          <Text color="darkGrey" variant="md" textAlign="center">
            Velkommen! Denne appen brukes til demonstrasjon og utvikling av
            forskjellige komponenter i Spor sitt designsystem for React Native.
          </Text>
          <Text color="darkGrey" variant="md" textAlign="center">
            Man kan ikke gjøre så mye enda da, men det funker i alle fall!
          </Text>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
