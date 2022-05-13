import React from "react";
import { SafeAreaView } from "react-native";
import { Button } from "./features/spor-button-react-native";
import { Stack } from "./features/spor-layout-react-native/Stack";
import { SporProvider } from "./features/spor-provider-react-native";
import { Heading, Text } from "./features/spor-typography-react-native";
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
          <Button variant="primary" size="md" onPress={() => {}}>
            Her er en knapp
          </Button>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
