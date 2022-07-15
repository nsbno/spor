import {
  Heading,
  SporProvider,
  Stack,
  Text,
  Card,
  Box,
} from "@vygruppen/spor-react-native";
import React from "react";
import { SafeAreaView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

const App = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <SporProvider>
      <SafeAreaView>
        <Box margin={"xl"}>
          <Card
            colorScheme={"white"}
            marginBottom="lg"
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text>It works!</Text>
          </Card>
          <Card
            colorScheme={"white"}
            marginBottom="lg"
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text>It works!</Text>
          </Card>
          <Card
            colorScheme={"white"}
            marginBottom="lg"
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text>It works!</Text>
          </Card>
          <Card
            colorScheme={"white"}
            marginBottom="lg"
            onPress={() => {
              setIsClicked(!isClicked);
            }}
          >
            <Text>It works!</Text>
          </Card>
        </Box>
        <Box marginTop={"8xl"} alignItems="center">
          {isClicked && (
            <Text variant="lg" color={"teal.600"}>
              Click!
            </Text>
          )}
        </Box>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
