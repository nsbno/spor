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
        <Box backgroundColor="lightGrey" height={200}>
          <Heading color="darkTeal" variant="2xl">
            Spor Demo app
          </Heading>
          <Text mt={2} color="white" variant="md">
            Velkommen! Denne appen brukes til demonstrasjon og utvikling av
            forskjellige komponenter i Spor sitt designsystem for React Native.
          </Text>
        </Box>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
