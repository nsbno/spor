import {
  Badge,
  Heading,
  SporProvider,
  Stack,
  Text,
  Box,
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
        <Badge borderStyle={true} variant="orange">
          Innstilt
        </Badge>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
