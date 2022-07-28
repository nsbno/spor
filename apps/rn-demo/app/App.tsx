import {
  Box,
  Button,
  Card,
  Heading,
  SporProvider,
  Stack,
  Text,
} from "@vygruppen/spor-react-native";
import {
  BusOutline24Icon,
  CloseOutline18Icon,
  SuccessFill24Icon,
  TicketOutline30Icon,
  TrainOutline30Icon,
} from "@vygruppen/spor-icon-react-native";
import React from "react";
import { Pressable, SafeAreaView, ScrollView } from "react-native";

/**
 * The entry point of the Spor RN demo app
 */

function press() {
  console.log("press");
}
function press2() {
  console.log("button");
}

const App = () => {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isPressed2, setIsPressed2] = React.useState(false);
  return (
    <SporProvider>
      <SafeAreaView>
        <Card colorScheme={"white"} onClose={() => {}} selected={true}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            provident quae veritatis quam reiciendis cupiditate, et commodi,
            impedit non facere molestiae ipsam nobis nulla dicta ex vitae
            suscipit incidunt voluptate.
          </Text>
          <Button variant={"control"} onPress={press}>
            Click me
          </Button>
        </Card>

        <Box marginBottom={"md"} />

        <Card
          size="sm"
          colorScheme={"white"}
          onPress={press}
          onClose={() => {}}
          selected={true}
        >
          <Text>Henlo</Text>
        </Card>
        <Card
          size="sm"
          colorScheme={"white"}
          onPress={press}
          onClose={() => {}}
        >
          <Text>Henlo</Text>
        </Card>

        <ScrollView horizontal>
          <Card
            size="sm"
            colorScheme={"white"}
            onPress={press}
            onClose={() => {}}
            selected={true}
          >
            <Text>Henlo</Text>
          </Card>
          <Card
            size="sm"
            colorScheme={"white"}
            onPress={press}
            // onClose={() => {}}
          >
            <Text>Henlo</Text>
          </Card>
          <Card
            size="sm"
            colorScheme={"white"}
            // onPress={press}
            onClose={() => {}}
          >
            <Text>Henlo</Text>
          </Card>
        </ScrollView>

        <Box flexDirection={"row"}>
          <Card
            size="sm"
            colorScheme={"white"}
            onPress={() => {
              setIsPressed(!isPressed);
            }}
            selected={isPressed}
          >
            <Text>Henlo</Text>
          </Card>
          <Card
            size="lg"
            colorScheme={"white"}
            onPress={() => {
              setIsPressed2(!isPressed2);
            }}
            selected={isPressed2}
          >
            <Text>Henlo</Text>
          </Card>
          <Card
            size="sm"
            colorScheme={"white"}
            // onPress={press}
            onClose={() => {}}
          >
            <Text>Henlo</Text>
          </Card>
        </Box>

        <Card colorScheme={"white"}>
          <Heading>Heading</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            provident quae veritatis quam reiciendis cupiditate, et commodi,
          </Text>
          <Box></Box>
        </Card>

        <Card
          colorScheme={"white"}
          marginBottom={2}
          onPress={() => {}}
          selected={true}
        >
          <Box flexDirection={"row"}>
            <TicketOutline30Icon />
            <Box marginLeft={"sm"} flex={1}>
              <Text
                variant="sm"
                fontWeight="bold"
                textAlign={"left"}
                marginBottom={0.5}
              >
                TOG TOG TOG
              </Text>
              <Text variant="xs">ruter, brakar og mye mer</Text>
            </Box>
          </Box>
        </Card>
        <Card colorScheme={"white"} marginBottom={2} onPress={() => {}}>
          <Box flexDirection={"row"}>
            <TicketOutline30Icon />
            <Box marginLeft={"sm"} flex={1}>
              <Text
                variant="sm"
                fontWeight="bold"
                textAlign={"left"}
                marginBottom={0.5}
              >
                TOG TOG TOG
              </Text>
              <Text variant="xs">ruter, brakar og mye mer</Text>
            </Box>
          </Box>
        </Card>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
