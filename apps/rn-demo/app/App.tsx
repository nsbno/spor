import { Card, SporProvider, Text } from "@vygruppen/spor-react-native";
import { BusOutline18Icon } from "@vygruppen/spor-icon-react-native";
import React from "react";
import { SafeAreaView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */
const App = () => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <SporProvider>
      <SafeAreaView>
        <Card colorScheme={"white"} size="sm" marginBottom="md" marginTop="5xl">
          <Text variant="md">120 kr</Text>
        </Card>
        <Card
          size="sm"
          colorScheme={"white"}
          selected={isSelected}
          onPress={() => setIsSelected(!isSelected)}
          marginBottom="md"
        >
          <Text variant="md">120 kr</Text>
        </Card>
        <Card colorScheme={"white"} size="sm" marginBottom="md">
          <Text variant="md">120 kr</Text>
        </Card>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
