import {
  Card,
  Heading,
  SporProvider,
  Stack,
  Text,
} from "@vygruppen/spor-react-native";
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
          <Card colorScheme={"white"} size="sm" selected={true}>
            <Text variant="md">120 kr</Text>
          </Card>
          <Card size="sm" selected={true}>
            <Text variant="md">120 kr</Text>
          </Card>
          <Card colorScheme={"white"} size="sm">
            <Text variant="md">120 kr</Text>
          </Card>
        </Stack>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
