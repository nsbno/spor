import React from "react";
import { SafeAreaView, Text } from "react-native";
import { SporProvider } from "./features/spor-provider-react-native";

/**
 * The entry point of the Spor RN demo app
 */
const App = () => {
  return (
    <SporProvider>
      <SafeAreaView>
        <Text>Spor</Text>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
