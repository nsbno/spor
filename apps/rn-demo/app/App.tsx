import {
  Heading,
  SporProvider,
  Stack,
  Text,
  TooltipSmall,
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
        <Heading color="darkGrey" variant="2xl" textAlign="center">
          Spor Demo app
        </Heading>
        <Text
          color="darkGrey"
          variant="md"
          textAlign="center"
          marginBottom={"2xl"}
        >
          Velkommen! Denne appen brukes til demonstrasjon og utvikling av
          forskjellige komponenter i Spor sitt designsystem for React Native.
        </Text>
        <TooltipSmall>Hey there</TooltipSmall>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
