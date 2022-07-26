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
  return (
    <SporProvider>
      <SafeAreaView>
        <ScrollView>
          <Heading color="darkGrey" variant="2xl" textAlign="center">
            Spor Demo app
          </Heading>

          <Box marginBottom={"lg"} />
          <Box flexDirection={"row"}>
            <Card colorScheme={"white"} onClose={() => {}}>
              <Text>A</Text>
            </Card>
            <Card colorScheme={"white"}>
              <Text>B</Text>
            </Card>
            <Card colorScheme={"white"} onPress={press}>
              <Text>C</Text>
            </Card>
          </Box>

          <Box marginBottom={"lg"} />
          <Box flexDirection={"row"}>
            <Card colorScheme={"white"} onClose={() => {}}>
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing</Text>
            </Card>
            <Card colorScheme={"white"}>
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing</Text>
            </Card>
            <Card colorScheme={"white"} onPress={press}>
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing</Text>
            </Card>
          </Box>

          <Box marginBottom={"lg"} />
          <Box flexDirection={"row"}>
            <Card colorScheme={"white"} onClose={() => {}}>
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing</Text>
              <Button onPress={() => {}} variant="primary">
                click
              </Button>
            </Card>
            <Card colorScheme={"white"} selected={true} onPress={() => {}}>
              <Text>Lorem ipsum dolor, sit amet consectetur adipisicing</Text>
              <Button onPress={() => {}} variant="primary">
                click
              </Button>
            </Card>
          </Box>

          <Box marginBottom={"lg"} />

          <Box marginHorizontal={"md"}>
            <Box marginBottom={"lg"} />
            <Card colorScheme={"white"} onClose={() => {}}>
              <Text>Lorem</Text>
            </Card>
            <Box marginBottom={"lg"} />
            <Card
              colorScheme={"white"}
              size="sm"
              onPress={press}
              selected={true}
            >
              <Text>Lorem</Text>
            </Card>
            <Box marginBottom={"lg"} />

            <Card
              colorScheme={"white"}
              onPress={press}
              selected={true}
              onClose={() => {}}
              size="sm"
            >
              <Text>Lorem</Text>
            </Card>
            <Box marginBottom={"lg"} />
            <Card colorScheme={"white"} onPress={press} onClose={() => {}}>
              <Text>
                Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates reiciendis porro minus ipsam, nulla incidunt delectus
                distinctio placeat recusandae fugiat consequuntur tempora
                dolores similique ullam eligendi ea molestiae possimus
                molestias?
              </Text>
            </Card>
            <Box marginBottom={"lg"} />
            <Card colorScheme={"white"} onPress={press} onClose={() => {}}>
              {/* <Box flex={1}> */}
              <Text>Lorem</Text>
              <Button variant={"control"} onPress={press2}>
                click me
              </Button>
              {/* </Box> */}
            </Card>
          </Box>
        </ScrollView>

        <Box marginBottom={"3xl"}></Box>
      </SafeAreaView>
    </SporProvider>
  );
};

export default App;
