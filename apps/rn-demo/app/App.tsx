import { Card, SporProvider, Heading } from "@vygruppen/spor-react-native";
import { Text } from "@vygruppen/spor-typography-react-native";
import { BusOutline18Icon } from "@vygruppen/spor-icon-react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Box } from "@vygruppen/spor-layout-react-native";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  const [isSelected1, setIsSelected1] = React.useState(false);
  const [isSelected2, setIsSelected2] = React.useState(false);
  const [isSelected3, setIsSelected3] = React.useState(false);

  return (
    <SporProvider>
      <SafeAreaView>
        <Text variant="lg" marginTop="2xl" textAlign="center">
          Oppdaterte kort
        </Text>
        <Box margin="md">
          <Card
            colorScheme={"white"}
            size="sm"
            marginBottom="md"
            selected={isSelected1}
            onPress={() => setIsSelected1(!isSelected1)}
          >
            <Text variant="md">Option 1</Text>
          </Card>
          <Card
            size="sm"
            colorScheme={"blue"}
            selected={isSelected2}
            onPress={() => setIsSelected2(!isSelected2)}
            marginBottom="md"
            onClose={() => {}}
          >
            <Text variant="md">Option 2</Text>
          </Card>
          <Card
            colorScheme={"grey"}
            size="sm"
            marginBottom="md"
            selected={isSelected3}
            onPress={() => setIsSelected3(!isSelected3)}
            onClose={() => {}}
          >
            <Text variant="md">Option 3</Text>
          </Card>
        </Box>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
