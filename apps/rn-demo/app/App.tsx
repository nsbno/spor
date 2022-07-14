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
          colorScheme={"blue"}
          selected={isSelected}
          onPress={() => setIsSelected(!isSelected)}
          marginBottom="md"
          onClose={() => {}}
        >
          <Text variant="md">
            120 kr Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias pariatur sed vero enim? Similique animi maxime rem ducimus
            harum. Alias minus nihil consequuntur totam? Reprehenderit quas
            distinctio tempore aliquam voluptates!
          </Text>
        </Card>
        <Card
          colorScheme={"white"}
          size="lg"
          marginBottom="md"
          selected={true}
          onClose={() => {}}
        >
          <Text variant="md">120 kr</Text>
        </Card>
        <Card colorScheme="white" onClose={() => {}}>
          <Text variant="md">
            120 kr Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo soluta sapiente illo voluptatum pariatur quibusdam
            adipisci quas impedit, veniam totam quos nemo tenetur, nisi
            voluptatem modi a temporibus quia rem.
          </Text>
        </Card>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
