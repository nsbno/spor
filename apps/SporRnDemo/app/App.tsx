import React from "react";
import { SafeAreaView } from "react-native";
import { Box } from "./features/spor-layout-react-native";
import { SporProvider } from "./features/spor-provider-react-native";
import { Heading, Text } from "./features/spor-typography-react-native";
/**
 * The entry point of the Spor RN demo app
 */
const App = () => {
  return (
    <SporProvider>
      <SafeAreaView>
        <Box
          backgroundColor="lightGrey"
          height="100%"
          p={2}
          justifyContent="center"
        >
          <Heading color="darkTeal" variant="2xl" textAlign="center">
            Spor Demo app
          </Heading>
          <Text mt={2} color="white" variant="md" textAlign="center">
            Velkommen! Denne appen brukes til demonstrasjon og utvikling av
            forskjellige komponenter i Spor sitt designsystem for React Native.
          </Text>
          <Text mt={2} color="white" variant="md" textAlign="center">
            Man kan ikke gjøre så mye enda da, men det funker i alle fall!
          </Text>
        </Box>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
